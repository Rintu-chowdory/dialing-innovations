"""Dialing Innovations — REST API

SQLite + FastAPI. Auto-seeds demo data on first start.

Run:
    pip install -r requirements.txt
    uvicorn app:app --reload --port 8000
"""
import csv
import io
from datetime import datetime, timedelta

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, String, Integer, Float
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, Session
import os
import httpx

JAMBONZ_API_URL = os.getenv("JAMBONZ_API_URL", "")
JAMBONZ_API_KEY = os.getenv("JAMBONZ_API_KEY", "")
JAMBONZ_FROM_NUMBER = os.getenv("JAMBONZ_FROM_NUMBER", "+49 000 000 0000")

DB_URL = "sqlite:///./dialing.db"
engine = create_engine(DB_URL, connect_args={"check_same_thread": False})


class Base(DeclarativeBase):
    pass


class Call(Base):
    __tablename__ = "calls"
    id: Mapped[int] = mapped_column(primary_key=True)
    time: Mapped[str] = mapped_column(String(10))
    from_number: Mapped[str] = mapped_column(String(40))
    to: Mapped[str] = mapped_column(String(40))
    duration: Mapped[str] = mapped_column(String(10))
    direction: Mapped[str] = mapped_column(String(5))
    status: Mapped[str] = mapped_column(String(12))
    agent: Mapped[str] = mapped_column(String(60))


class Agent(Base):
    __tablename__ = "agents"
    id: Mapped[str] = mapped_column(String(10), primary_key=True)
    name: Mapped[str] = mapped_column(String(60))
    initials: Mapped[str] = mapped_column(String(4))
    color: Mapped[str] = mapped_column(String(10))
    status: Mapped[str] = mapped_column(String(10))
    calls: Mapped[int] = mapped_column(Integer)
    answered: Mapped[int] = mapped_column(Integer)
    avg: Mapped[str] = mapped_column(String(10))
    csat: Mapped[float] = mapped_column(Float)


class Lead(Base):
    __tablename__ = "leads"
    id: Mapped[str] = mapped_column(String(10), primary_key=True)
    name: Mapped[str] = mapped_column(String(60))
    company: Mapped[str] = mapped_column(String(60))
    city: Mapped[str] = mapped_column(String(40))
    value: Mapped[str] = mapped_column(String(15))
    stage: Mapped[str] = mapped_column(String(12))
    source: Mapped[str] = mapped_column(String(20))
    touched: Mapped[str] = mapped_column(String(12))


class Thread(Base):
    __tablename__ = "threads"
    id: Mapped[str] = mapped_column(String(10), primary_key=True)
    name: Mapped[str] = mapped_column(String(60))
    company: Mapped[str] = mapped_column(String(60))
    last: Mapped[str] = mapped_column(String(200))
    time: Mapped[str] = mapped_column(String(12))
    unread: Mapped[int] = mapped_column(Integer)


class Message(Base):
    __tablename__ = "messages"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    thread_id: Mapped[str] = mapped_column(String(10))
    sender: Mapped[str] = mapped_column(String(5))
    text: Mapped[str] = mapped_column(String(1000))
    time: Mapped[str] = mapped_column(String(8))


class Voicemail(Base):
    __tablename__ = "voicemails"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    from_number: Mapped[str] = mapped_column(String(40))
    duration: Mapped[str] = mapped_column(String(8))
    received: Mapped[str] = mapped_column(String(20))
    transcript: Mapped[str] = mapped_column(String(500))
    unread: Mapped[int] = mapped_column(Integer)


Base.metadata.create_all(engine)

app = FastAPI(title="Dialing Innovations API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_methods=["*"], allow_headers=["*"],
)


# ---------------------------------------------------------------- seed
def seed():
    with Session(engine) as s:
        if s.query(Call).count() > 0:
            return
        s.add_all([Call(time=t, from_number=f, to=to, duration=d, direction=dr, status=st, agent=ag)
                   for t, f, to, d, dr, st, ag in SEED_CALLS])
        s.add_all([Agent(id=a[0], name=a[1], initials=a[2], color=a[3], status=a[4], calls=a[5],
                         answered=a[6], avg=a[7], csat=a[8]) for a in SEED_AGENTS])
        s.add_all([Lead(id=l[0], name=l[1], company=l[2], city=l[3], value=l[4], stage=l[5],
                        source=l[6], touched=l[7]) for l in SEED_LEADS])
        s.add_all([Thread(id=t[0], name=t[1], company=t[2], last=t[3], time=t[4], unread=t[5])
                   for t in SEED_THREADS])
        s.add_all([Message(thread_id=m[0], sender=m[1], text=m[2], time=m[3]) for m in SEED_MESSAGES])
        s.add_all([Voicemail(from_number=v[0], duration=v[1], received=v[2], transcript=v[3], unread=v[4])
                   for v in SEED_VOICEMAILS])
        s.commit()


SEED_CALLS = [
    ("09:42", "+49 221 55 88 120", "Sales DE", "5m 12s", "in", "completed", "Sabine Krüger"),
    ("09:36", "+49 170 44 21 907", "Support", "12m 03s", "out", "completed", "Aylin Demir"),
    ("09:31", "+49 30 88 12 455", "Sales DE", "—", "in", "missed", "—"),
    ("09:24", "+43 1 99 320 44", "Support", "7m 48s", "in", "completed", "Jonas Meyer"),
    ("09:18", "+49 89 22 71 330", "Billing", "3m 26s", "in", "completed", "Marco Bianchi"),
    ("09:11", "+32 2 55 01 88", "Sales EU", "9m 15s", "out", "completed", "Aylin Demir"),
    ("09:05", "+49 175 33 04 221", "Support", "1m 08s", "in", "voicemail", "—"),
    ("08:58", "+49 711 95 40 12", "Sales DE", "6m 30s", "in", "completed", "Sabine Krüger"),
    ("08:51", "+41 44 210 55 90", "Support", "2m 12s", "out", "completed", "Jonas Meyer"),
    ("08:44", "+49 221 55 09 774", "Billing", "—", "in", "missed", "—"),
    ("08:37", "+49 160 88 12 445", "Sales DE", "11m 22s", "in", "completed", "Lena Hoffmann"),
    ("08:29", "+33 1 44 90 22 10", "Sales EU", "8m 47s", "out", "completed", "Aylin Demir"),
    ("08:22", "+49 30 70 11 256", "Support", "4m 55s", "in", "completed", "Marco Bianchi"),
    ("08:15", "+49 172 65 90 128", "Billing", "0m 45s", "in", "voicemail", "—"),
    ("08:08", "+49 89 320 44 91", "Sales DE", "7m 19s", "out", "completed", "Sabine Krüger"),
    ("08:01", "+49 221 60 88 002", "Support", "5m 40s", "in", "completed", "Jonas Meyer"),
    ("07:55", "+352 27 99 44 01", "Sales EU", "3m 33s", "in", "completed", "Lena Hoffmann"),
    ("07:48", "+49 171 22 84 330", "Billing", "—", "in", "missed", "—"),
    ("07:40", "+49 40 55 91 208", "Support", "9m 51s", "in", "completed", "Aylin Demir"),
    ("07:33", "+49 157 90 44 661", "Sales DE", "6m 04s", "out", "completed", "Marco Bianchi"),
]
SEED_AGENTS = [
    ("a1", "Sabine Krüger", "SK", "#6366f1", "online", 52, 44, "3m 41s", 4.8),
    ("a2", "Jonas Meyer", "JM", "#22d3ee", "online", 47, 39, "4m 05s", 4.6),
    ("a3", "Aylin Demir", "AD", "#a78bfa", "on-call", 45, 41, "5m 12s", 4.9),
    ("a4", "Marco Bianchi", "MB", "#f472b6", "break", 31, 25, "3m 58s", 4.4),
    ("a5", "Lena Hoffmann", "LH", "#34d399", "offline", 22, 19, "4m 44s", 4.5),
]
SEED_LEADS = [
    ("L-1042", "Stefan Wolter", "Rheinwerk GmbH", "Bonn", "€12.400", "new", "Website", "2h ago"),
    ("L-1041", "Camille Laurent", "Atelier Laurent", "Strasbourg", "€4.800", "new", "Messe", "5h ago"),
    ("L-1039", "Peter Brandt", "Brandt Logistik", "Hamburg", "€18.900", "contacted", "Inbound", "1d ago"),
    ("L-1036", "Sofia Rinaldi", "Rinaldi Foods", "München", "€9.200", "qualified", "Referral", "1d ago"),
    ("L-1030", "Daniel Vogt", "Vogt Immobilien", "Köln", "€25.000", "won", "Outbound", "2d ago"),
    ("L-1028", "Ines Kaufmann", "Kaufmann & Partner", "Frankfurt", "€7.600", "lost", "Website", "3d ago"),
]
SEED_THREADS = [
    ("c1", "Stefan Wolter", "Rheinwerk GmbH", "Perfect, the quote sounds good. Could you send it by Friday?", "09:38", 2),
    ("c2", "Camille Laurent", "Atelier Laurent", "Bonjour! Est-ce que le support parle français?", "09:12", 0),
    ("c3", "Peter Brandt", "Brandt Logistik", "Can we schedule a call next week?", "08:55", 1),
    ("c4", "Sofia Rinaldi", "Rinaldi Foods", "Thanks — invoice received. One question about the SLA…", "Yesterday", 0),
]
SEED_MESSAGES = [
    ("c1", "them", "Hi! I saw your booth at the ITCS event — is the contact center also available as a cloud version?", "09:31"),
    ("c1", "me", "Hi Stefan, yes! The full stack runs in the cloud, HA included. Happy to walk you through it.", "09:33"),
    ("c1", "them", "Great. What would a 10-seat setup cost per month?", "09:35"),
    ("c1", "me", "For 10 agents with unlimited EU calls you are at €490/month, VAT excluded. Includes the dashboard, analytics and softphone.", "09:37"),
    ("c1", "them", "Perfect, the quote sounds good. Could you send it by Friday?", "09:38"),
]
SEED_VOICEMAILS = [
    ("+49 175 33 04 221", "0:42", "09:05", "Hallo, ich wollte nochmal wegen des Angebots fragen — rufen Sie mich bitte zurück.", 1),
    ("+49 172 65 90 128", "0:18", "08:14", "Guten Tag, hier ist die Bank. Bitte Rückruf unter der bekannten Nummer.", 1),
    ("+49 89 320 44 91", "1:05", "Yesterday", "Hey, das Meeting morgen passt — kurze Bestätigung genügt. Danke!", 0),
]

seed()


def call_dict(c: Call) -> dict:
    return {"id": c.id, "time": c.time, "from": c.from_number, "to": c.to,
            "duration": c.duration, "direction": c.direction, "status": c.status, "agent": c.agent}


# ---------------------------------------------------------------- endpoints
@app.get("/api/health")
def health():
    return {"status": "ok", "time": datetime.now().isoformat()}


@app.get("/api/summary")
def summary():
    with Session(engine) as s:
        calls = s.query(Call).all()
        completed = [c for c in calls if c.status == "completed"]
        missed = [c for c in calls if c.status == "missed"]
        now = datetime.now()
        hourly = []
        for h in range(8, 18):
            n = sum(1 for c in calls if int(c.time[:2]) == h)
            hourly.append({"hour": f"{h:02d}", "calls": n * 3 + 12})  # demo scaling
        return {
            "total": len(calls),
            "completed": len(completed),
            "missed": len(missed),
            "voicemails": sum(1 for c in calls if c.status == "voicemail"),
            "hourly": hourly,
            "generated_at": now.isoformat(),
        }


@app.get("/api/calls")
def list_calls(
    search: str = "", direction: str = "all", status: str = "all",
    page: int = Query(0, ge=0), per_page: int = Query(50, ge=1, le=500),
):
    with Session(engine) as s:
        q = s.query(Call)
        if search:
            like = f"%{search.lower()}%"
            q = q.filter((Call.from_number.ilike(like)) | (Call.to.ilike(like)) | (Call.agent.ilike(like)))
        if direction != "all":
            q = q.filter(Call.direction == direction)
        if status != "all":
            q = q.filter(Call.status == status)
        total = q.count()
        rows = q.order_by(Call.id.desc()).offset(page * per_page).limit(per_page).all()
        return {"total": total, "page": page, "per_page": per_page, "calls": [call_dict(c) for c in rows]}


@app.get("/api/calls.csv")
def export_csv(direction: str = "all", status: str = "all", search: str = ""):
    with Session(engine) as s:
        q = s.query(Call)
        if search:
            like = f"%{search.lower()}%"
            q = q.filter((Call.from_number.ilike(like)) | (Call.to.ilike(like)) | (Call.agent.ilike(like)))
        if direction != "all":
            q = q.filter(Call.direction == direction)
        if status != "all":
            q = q.filter(Call.status == status)
        buf = io.StringIO()
        w = csv.writer(buf)
        w.writerow(["Date", "Time", "From", "To", "Direction", "Duration", "Status", "Agent"])
        for c in q.all():
            w.writerow([datetime.now().date(), c.time, c.from_number, c.to, c.direction, c.duration, c.status, c.agent])
        return ResponseWithCsv(buf.getvalue())


def ResponseWithCsv(text: str):
    from fastapi import Response
    return Response(content=text, media_type="text/csv",
                    headers={"Content-Disposition": "attachment; filename=call-history.csv"})


@app.get("/api/agents")
def list_agents():
    with Session(engine) as s:
        return [{"id": a.id, "name": a.name, "initials": a.initials, "color": a.color,
                 "status": a.status, "calls": a.calls, "answered": a.answered,
                 "avg": a.avg, "csat": a.csat} for a in s.query(Agent).all()]


@app.get("/api/leads")
def list_leads():
    with Session(engine) as s:
        return [{"id": l.id, "name": l.name, "company": l.company, "city": l.city,
                 "value": l.value, "stage": l.stage, "source": l.source, "touched": l.touched}
                for l in s.query(Lead).all()]


@app.get("/api/threads")
def list_threads():
    with Session(engine) as s:
        return [{"id": t.id, "name": t.name, "company": t.company, "last": t.last,
                 "time": t.time, "unread": t.unread} for t in s.query(Thread).all()]


@app.get("/api/threads/{thread_id}/messages")
def thread_messages(thread_id: str):
    with Session(engine) as s:
        rows = s.query(Message).filter(Message.thread_id == thread_id).order_by(Message.id).all()
        if not rows and not s.get(Thread, thread_id):
            raise HTTPException(404, "thread not found")
        return [{"id": m.id, "from": "me" if m.sender == "me" else "them", "text": m.text, "time": m.time}
                for m in rows]


class NewMessage(BaseModel):
    text: str


@app.post("/api/threads/{thread_id}/messages")
def send_message(thread_id: str, body: NewMessage):
    with Session(engine) as s:
        t = s.get(Thread, thread_id)
        if not t:
            raise HTTPException(404, "thread not found")
        m = Message(thread_id=thread_id, sender="me", text=body.text,
                    time=datetime.now().strftime("%H:%M"))
        s.add(m)
        t.last = body.text
        t.time = m.time
        t.unread = 0
        s.commit()
        return {"id": m.id, "from": "me", "text": m.text, "time": m.time}


class DialRequest(BaseModel):
    to: str
    agent: str = "You"


@app.post("/api/calls/dial")
def dial(body: DialRequest):
    now = datetime.now()
    status = "ringing"
    note = "demo mode - no telephony provider configured"

    if JAMBONZ_API_URL and JAMBONZ_API_KEY:
        try:
            r = httpx.post(
                f"{JAMBONZ_API_URL}/v1/Accounts/self/Calls",
                headers={"Authorization": f"Bearer {JAMBONZ_API_KEY}"},
                json={"from": JAMBONZ_FROM_NUMBER, "to": {"type": "phone", "number": body.to}},
                timeout=10,
            )
            r.raise_for_status()
            note = "dialed via jambonz"
        except Exception as e:
            status = "failed"
            note = f"jambonz error: {e}"

    with Session(engine) as s:
        c = Call(
            time=now.strftime("%H:%M"), from_number=JAMBONZ_FROM_NUMBER, to=body.to,
            duration="-", direction="out", status=status, agent=body.agent,
        )
        s.add(c)
        s.commit()
        s.refresh(c)
        return {"id": c.id, "status": status, "note": note, "to": body.to}


@app.get("/api/voicemails")
def list_voicemails():
    with Session(engine) as s:
        return [{"id": v.id, "from": v.from_number, "duration": v.duration,
                 "received": v.received, "transcript": v.transcript, "unread": bool(v.unread)}
                for v in s.query(Voicemail).all()]
