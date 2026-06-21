import React from 'react'
import { AlertCircle, Mail, MapPin, FileText } from 'lucide-react'

export default function Impressum() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Impressum</h1>
        <div className="flex items-center gap-2 text-gray-400">
          <FileText className="w-5 h-5" />
          <span>Gemäß § 5 TMG</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <h2 className="text-xl font-bold text-white">Anbieter</h2>
          </div>
          <div className="space-y-3 text-gray-300">
            <p className="font-semibold text-lg text-blue-400">Dialing Innovations</p>
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p>Berlin, Germany</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-cyan-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
            <h2 className="text-xl font-bold text-white">Kontakt</h2>
          </div>
          <div className="space-y-3 text-gray-300">
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
              <p>
                <a href="mailto:info@dialing-innovations.de" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  info@dialing-innovations.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4">Verantwortlich für den Inhalt</h2>
        <p className="text-gray-300 mb-4">
          Verantwortlich im Sinne des § 7 Abs. 1 TMG:
        </p>
        <div className="bg-black rounded p-4 border border-gray-800">
          <p className="text-gray-200">Dialing Innovations</p>
          <p className="text-gray-200">Berlin, Germany</p>
          <p className="text-gray-200">
            <a href="mailto:info@dialing-innovations.de" className="text-cyan-400 hover:text-cyan-300">
              info@dialing-innovations.de
            </a>
          </p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
          <h2 className="text-xl font-bold text-white">Haftungsausschluss</h2>
        </div>
        <div className="space-y-4 text-gray-300">
          <p>
            Dialing Innovations bemüht sich, die Informationen auf dieser Website aktuell und fehlerfrei zu halten. Trotzdem können Fehler und Unklarheiten nicht völlig ausgeschlossen werden. Dialing Innovations übernimmt keine Haftung für die Aktualität, Richtigkeit, Vollständigkeit oder Qualität der bereitgestellten Informationen.
          </p>
          <p>
            Haftungsansprüche gegen Dialing Innovations, die sich auf Schäden materieller oder ideeller Art beziehen, welche durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind ausgeschlossen, sofern seitens Dialing Innovations kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
          </p>
          <p>
            Dialing Innovations behält sich das Recht vor, die Inhalte dieser Website ohne vorherige Ankündigung zu ändern, zu ergänzen oder zu löschen.
          </p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4">Urheberrecht</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Die durch Dialing Innovations erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Erstellers.
          </p>
          <p>
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>
      </div>

      <div className="text-gray-400 text-sm border-t border-gray-800 pt-6">
        <p>Zuletzt aktualisiert: {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
