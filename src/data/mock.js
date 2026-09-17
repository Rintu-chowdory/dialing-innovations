// Shared demo data — deterministic mock dataset so every page feels consistent.

export const agents = [
  { id: 'a1', name: 'Sabine Krüger', initials: 'SK', color: '#6366f1', status: 'online', calls: 52, answered: 44, avg: '3m 41s', csat: 4.8 },
  { id: 'a2', name: 'Jonas Meyer', initials: 'JM', color: '#22d3ee', status: 'online', calls: 47, answered: 39, avg: '4m 05s', csat: 4.6 },
  { id: 'a3', name: 'Aylin Demir', initials: 'AD', color: '#a78bfa', status: 'on-call', calls: 45, answered: 41, avg: '5m 12s', csat: 4.9 },
  { id: 'a4', name: 'Marco Bianchi', initials: 'MB', color: '#f472b6', status: 'break', calls: 31, answered: 25, avg: '3m 58s', csat: 4.4 },
  { id: 'a5', name: 'Lena Hoffmann', initials: 'LH', color: '#34d399', status: 'offline', calls: 22, answered: 19, avg: '4m 44s', csat: 4.5 },
]

export const calls = [
  { id: 1,  time: '09:42', from: '+49 221 55 88 120', to: 'Sales DE',    duration: '5m 12s', direction: 'in',  status: 'completed', agent: 'Sabine Krüger' },
  { id: 2,  time: '09:36', from: '+49 170 44 21 907', to: 'Support',     duration: '12m 03s', direction: 'out', status: 'completed', agent: 'Aylin Demir' },
  { id: 3,  time: '09:31', from: '+49 30 88 12 455',  to: 'Sales DE',    duration: '—',      direction: 'in',  status: 'missed',    agent: '—' },
  { id: 4,  time: '09:24', from: '+43 1 99 320 44',   to: 'Support',      duration: '7m 48s',  direction: 'in',  status: 'completed', agent: 'Jonas Meyer' },
  { id: 5,  time: '09:18', from: '+49 89 22 71 330',  to: 'Billing',      duration: '3m 26s', direction: 'in',  status: 'completed', agent: 'Marco Bianchi' },
  { id: 6,  time: '09:11', from: '+32 2 55 01 88',    to: 'Sales EU',     duration: '9m 15s',  direction: 'out', status: 'completed', agent: 'Aylin Demir' },
  { id: 7,  time: '09:05', from: '+49 175 33 04 221', to: 'Support',     duration: '1m 08s',  direction: 'in',  status: 'voicemail', agent: '—' },
  { id: 8,  time: '08:58', from: '+49 711 95 40 12',  to: 'Sales DE',    duration: '6m 30s',  direction: 'in',  status: 'completed', agent: 'Sabine Krüger' },
  { id: 9,  time: '08:51', from: '+41 44 210 55 90',  to: 'Support',      duration: '2m 12s',  direction: 'out', status: 'completed', agent: 'Jonas Meyer' },
  { id: 10, time: '08:44', from: '+49 221 55 09 774', to: 'Billing',      duration: '—',       direction: 'in',  status: 'missed',    agent: '—' },
  { id: 11, time: '08:37', from: '+49 160 88 12 445', to: 'Sales DE',    duration: '11m 22s', direction: 'in',  status: 'completed', agent: 'Lena Hoffmann' },
  { id: 12, time: '08:29', from: '+33 1 44 90 22 10', to: 'Sales EU',     duration: '8m 47s',  direction: 'out', status: 'completed', agent: 'Aylin Demir' },
  { id: 13, time: '08:22', from: '+49 30 70 11 256',  to: 'Support',      duration: '4m 55s',  direction: 'in',  status: 'completed', agent: 'Marco Bianchi' },
  { id: 14, time: '08:15', from: '+49 172 65 90 128', to: 'Billing',      duration: '0m 45s',   direction: 'in',  status: 'voicemail', agent: '—' },
  { id: 15, time: '08:08', from: '+49 89 320 44 91',  to: 'Sales DE',    duration: '7m 19s',  direction: 'out', status: 'completed', agent: 'Sabine Krüger' },
  { id: 16, time: '08:01', from: '+49 221 60 88 002', to: 'Support',      duration: '5m 40s',  direction: 'in',  status: 'completed', agent: 'Jonas Meyer' },
  { id: 17, time: '07:55', from: '+352 27 99 44 01',  to: 'Sales EU',     duration: '3m 33s',  direction: 'in',  status: 'completed', agent: 'Lena Hoffmann' },
  { id: 18, time: '07:48', from: '+49 171 22 84 330', to: 'Billing',      duration: '—',       direction: 'in',  status: 'missed',    agent: '—' },
  { id: 19, time: '07:40', from: '+49 40 55 91 208',  to: 'Support',      duration: '9m 51s',  direction: 'in',  status: 'completed', agent: 'Aylin Demir' },
  { id: 20, time: '07:33', from: '+49 157 90 44 661', to: 'Sales DE',    duration: '6m 04s',  direction: 'out', status: 'completed', agent: 'Marco Bianchi' },
]

export const hourlyVolume = [
  { hour: '08', calls: 34 }, { hour: '09', calls: 58 }, { hour: '10', calls: 72 },
  { hour: '11', calls: 66 }, { hour: '12', calls: 48 }, { hour: '13', calls: 52 },
  { hour: '14', calls: 69 }, { hour: '15', calls: 74 }, { hour: '16', calls: 61 },
  { hour: '17', calls: 45 },
]

export const weekTrend = [
  { label: 'Mon', value: 812, delta: +4.2 },
  { label: 'Tue', value: 868, delta: +6.9 },
  { label: 'Wed', value: 934, delta: +9.1 },
  { label: 'Thu', value: 1024, delta: +12.4 },
  { label: 'Fri', value: 876, delta: -2.8 },
]

export const leads = [
  { id: 'L-1042', name: 'Stefan Wolter', company: 'Rheinwerk GmbH', city: 'Bonn', value: '€12.400', stage: 'new', source: 'Website', touched: '2h ago' },
  { id: 'L-1041', name: 'Camille Laurent', company: 'Atelier Laurent', city: 'Strasbourg', value: '€4.800', stage: 'new', source: 'Messe', touched: '5h ago' },
  { id: 'L-1039', name: 'Peter Brandt', company: 'Brandt Logistik', city: 'Hamburg', value: '€18.900', stage: 'contacted', source: 'Inbound', touched: '1d ago' },
  { id: 'L-1036', name: 'Sofia Rinaldi', company: 'Rinaldi Foods', city: 'München', value: '€9.200', stage: 'qualified', source: 'Referral', touched: '1d ago' },
  { id: 'L-1030', name: 'Daniel Vogt', company: 'Vogt Immobilien', city: 'Köln', value: '€25.000', stage: 'won', source: 'Outbound', touched: '2d ago' },
  { id: 'L-1028', name: 'Ines Kaufmann', company: 'Kaufmann & Partner', city: 'Frankfurt', value: '€7.600', stage: 'lost', source: 'Website', touched: '3d ago' },
]

export const conversations = [
  { id: 'c1', name: 'Stefan Wolter', company: 'Rheinwerk GmbH', last: 'Perfect, the quote sounds good. Could you send it by Friday?', time: '09:38', unread: 2 },
  { id: 'c2', name: 'Camille Laurent', company: 'Atelier Laurent', last: 'Bonjour! Est-ce que le support parle français?', time: '09:12', unread: 0 },
  { id: 'c3', name: 'Peter Brandt', company: 'Brandt Logistik', last: 'Can we schedule a call next week?', time: '08:55', unread: 1 },
  { id: 'c4', name: 'Sofia Rinaldi', company: 'Rinaldi Foods', last: 'Thanks — invoice received. One question about the SLA…', time: 'Yesterday', unread: 0 },
]

export const messages = [
  { id: 1, from: 'them', text: 'Hi! I saw your booth at the ITCS event — is the contact center also available as a cloud version?', time: '09:31' },
  { id: 2, from: 'me', text: 'Hi Stefan, yes! The full stack runs in the cloud, HA included. Happy to walk you through it.', time: '09:33' },
  { id: 3, from: 'them', text: 'Great. What would a 10-seat setup cost per month?', time: '09:35' },
  { id: 4, from: 'me', text: 'For 10 agents with unlimited EU calls you are at €490/month, VAT excluded. Includes the dashboard, analytics and softphone.', time: '09:37' },
  { id: 5, from: 'them', text: 'Perfect, the quote sounds good. Could you send it by Friday?', time: '09:38' },
]

export const voicemails = [
  { id: 1, from: '+49 175 33 04 221', duration: '0:42', received: '09:05', transcript: 'Hallo, ich wollte nochmal wegen des Angebots fragen — rufen Sie mich bitte zurück.', unread: true },
  { id: 2, from: '+49 172 65 90 128', duration: '0:18', received: '08:14', transcript: 'Guten Tag, hier ist die Bank. Bitte Rückruf unter der bekannten Nummer.', unread: true },
  { id: 3, from: '+49 89 320 44 91', duration: '1:05', received: 'Yesterday', transcript: 'Hey, das Meeting morgen passt — kurze Bestätigung genügt. Danke!', unread: false },
]
