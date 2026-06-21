import React from 'react'
import { AlertCircle, Mail, Lock, Eye, Download, XCircle } from 'lucide-react'

export default function Datenschutz() {
  return (
    <div className="bg-black text-gray-300 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Datenschutzerklärung</h1>
          <p className="text-gray-400">Dialing Innovations – VoIP/Call Center Datenschutzrichtlinien (DSGVO)</p>
          <p className="text-sm text-gray-500 mt-4">Stand: Juni 2026</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-8 flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300">
            Diese Datenschutzerklärung beschreibt, wie Dialing Innovations Ihre Daten erhebt, verarbeitet und schützt.
          </p>
        </div>

        <div className="space-y-12">
          <section className="border-l-4 border-blue-600 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h2 className="text-2xl font-bold text-white">Verantwortlicher</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 space-y-3">
              <p className="font-semibold text-white">Dialing Innovations GmbH</p>
              <p>Kontakt:</p>
              <ul className="space-y-2 text-gray-400">
                <li>Email: <span className="text-blue-400 font-mono">privacy@dialing-innovations.com</span></li>
                <li>Hauptsitz: Europäische Union</li>
              </ul>
            </div>
          </section>
          <section className="border-l-4 border-blue-600 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h2 className="text-2xl font-bold text-white">Datenerhebung und -verarbeitunh</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">Als VoIP/Call-Center-Plattform verarbeiten wir:</p>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li><span className="font-semibold text-gray-300">Anrufdaten:</span> Telefonnummern, Anrufdauer, Zeitstempel, Aufzeichnungen, Transcript-Daten</li>
                <li><span className="font-semibold text-gray-300">Kontaktinformationen:</span> Namen, Email-Adressen, Telefonnummern, Firmendaten</li>
                <li><span className="font-semibold text-gray-300">Account-Daten:</span> Benutzer-Authentifizierung, Einstellungen, Nutzungsmetriken</li>
                <li><span className="font-semibold text-gray-300">Kommunikationsinhalte:</span> Voicemail-Nachrichten, Chat-Protokolle, Bildschirmaufnahmen</li>
              </ul>
              <p className="text-gray-400 pt-2 text-sm italic">Rechtsgrundlage: Vertragserfüllung (Art. 6 Abs. 1 b DSGVO) und Berechtigte Interessen (Art. 6 Abs. 1 f DSGVO)</p>
            </div>
          </section>
          <section className="border-l-4 border-cyan-600 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <h2 className="text-2xl font-bold text-white">Google OAuth Login</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">Dialing Innovations ermöglicht Google OAuth zur Authentifizierung.</p>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li>Wir erhalten: Email, Name, Profilbild-URL und eindeutige Google-Account-ID</li>
                <li>Diese werden mit Ihrem Dialing-Innovations-Konto verlinkt und gespeichert</li>
                <li>Google unterliegt eigenen Datenschutzbedingungen: <span className="text-cyan-400">policies.google.com</span></li>
                <li>Sie können die Authentifizierung jederzeit in Ihren Google-Kontoeinstellungen widerrufen</li>
              </ul>
              <p className="text-gray-400 pt-2 text-sm italic">Rechtsgrundlage: Zustimmung (Art. 7 DSGVO)</p>
            </div>
          </section>
          <section className="border-l-4 border-cyan-600 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <h2 className="text-2xl font-bold text-white">KI-gestützte Call-Analyse und Transkription</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">Dialing Innovations nutzt KI-Modelle zur automatischen Call-Analyse:</p>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li>Anrufaufzeichnungen werden an KI-Services übermittelt für Transkription und Sentiment-Analyse</li>
                <li>KI erzeugt automatische Zusammenfassungen und identifiziert Keywords</li>
                <li>Call-Daten unterliegen unseren Sicherheits- und Verschlüsselungsmaßnahmen</li>
                <li>Sie können KI-Features in den Account-Einstellungen deaktivieren</li>
              </ul>
              <p className="text-gray-400 pt-2 text-sm italic">Rechtsgrundlage: Vertragserfüllung und Berechtigte Interessen (Art. 6 DSGVO)</p>
            </div>
          </section>
          <section className="border-l-4 border-green-600 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">5</div>
              <h2 className="text-2xl font-bold text-white">Ihre Datenschutzrechte</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">Gemäÿ DSGVO haben Sie folgende Rechte:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-start gap-2 mb-2">
                    <Eye className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-white">Auskunftsrecht</h3>
                  </div>
                  <p className="text-sm text-gray-400">Erfahren Sie, welche Ihrer Daten wir speichern und verarbeiten</p>
                  </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-start gap-2 mb-2">
                    <Download className="v-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-white">Datenportabilität</h3>
                  </div>
                  <p className="text-sm text-gray-400">Exportieren Sie Ihre Daten in strukturiertem Format</p>
                  </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-start gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-white">Löschungsrecht</h3>
                  </div>
                  <p className="text-sm text-gray-400">Beantragen Sie Löschung Ihrer Daten (Recht auf Vergessenwerden)</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-start gap-2 mb-2">
                    <Lock className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-white">Widerspruchsrecht</h3>
                  </div>
                  <p className="text-sm text-gray-400">Widersprechen Sie der Verarbeitung Ihrer Daten</p>
                </div>
              </div>

              <p className="text-gray-400 pt-4 text-sm italic">Kontaktieren Sie privacy@dialing-innovations.com zur Geltendmachung dieser Rechte</p>
            </div>
          </section>

          <section className="border-l-4 border-gray-600 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">6</div>
              <h2 className="text-2xl font-bold text-white">Anrufaufzeichnung und Compliance</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">Anrufaufzeichnungen werden für Qualitätssicherung und Compliance aufbewahrt:</p>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li>Aufzeichnungen erfordern korrekte Zustimmung aller Gesprächsteilnehmer</li>
                <li>Lokal geltende Gesetze zur Aufzeichnung werden respektiert</li>
                <li>Aufzeichnungen werden verschlüsselt gespeichert und nach Aufbewahrungsfrist gelöscht</li>
                <li>Sie können Löschanfragen für spezifische Aufzeichnungen stellen</li>
              </ul>
            </div>
          </section>

          <section className="border-l-4 border-orange-600 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">7</div>
              <h2 className="text-2xl font-bold text-white">Datenspeicherung und Aufbewahrung</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">Speicherdauer Ihrer Daten:</p>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li><span className="font-semibold text-gray-300">Account-Daten:</span> Während Abo aktiv + 60 Tage nach Kündigung</li>
                <li><span className="font-semibold text-gray-300">Anrufaufzeichnungen:</span> Standardmäßig 90 Tage (konfigurierbar bis 7 Jahre)</li>
                <li><span className="font-semibold text-gray-300">Anruflogs/Metadaten:</span> 2 Jahre</li>
                <li><span className="font-semibold text-gray-300">Transkripte:</span> Gleich wie Aufzeichnungen</li>
              </ul>
            </div>
          </section>

          <section className="border-l-4 border-indigo-600 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">8</div>
              <h2 className="text-2xl font-bold text-white">Kontakt & Support</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">Fragen zu Ihren Daten oder Datenschutzanfragen:</p>
              <div className="flex items-center gap-2 text-gray-300 mt-4">
                <Mail className="v-5 h-5 text-indigo-500" />
                <span>Email: <span className="font-mono text-indigo-400">privacy@dialing-innovations.com</span></span>
              </div>
              <p className="text-sm text-gray-500 pt-4">Wir antworten auf Anfragen innerhalb von 30 Tagen.</p>
            </div>
          </section>

          <div className="border-t border-gray-800 pt-8 mt-12">
            <p className="text-gray-500 text-sm">
              © 2024-2026 Dialing Innovations. Diese Datenschutzerklärung kann aktualisiert werden. Die aktuelle Version gilt ab dem Veröffentlichungsdatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
