import React, { useState } from 'react';
import {
  Network,
  ShieldCheck,
  Cloud,
  Radio,
  Wrench,
  Sparkles,
  Briefcase,
  Lightbulb,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { INFRA_OPTIONS, InfraOptionDetail } from '../data/courseData';
import { OptionId } from '../utils/courseLogic';

interface OptionsExplorerProps {
  selectedOption?: OptionId;
  onSelectOption?: (optionId: OptionId) => void;
  onSelectLabOption?: (optionId: OptionId) => void;
}

const OPTION_ICONS: Record<string, React.ReactNode> = {
  sysres: <Network className="w-6 h-6" />,
  cyber: <ShieldCheck className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
  iot: <Radio className="w-6 h-6" />,
};

export const OptionsExplorer: React.FC<OptionsExplorerProps> = ({
  selectedOption,
  onSelectOption,
  onSelectLabOption,
}) => {
  const [internalId, setInternalId] = useState<OptionId>('sysres');
  const selectedId = selectedOption ?? internalId;
  const handleSelect = (id: OptionId) => {
    setInternalId(id);
    onSelectOption?.(id);
  };
  const activeOption: InfraOptionDetail =
    INFRA_OPTIONS.find((o) => o.id === selectedId) || INFRA_OPTIONS[0];

  return (
    <section id="quatre-options" className="scroll-mt-20 space-y-8 py-8 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* CHAPITRE 1 & 2 CONTAINER */}
      <div className="bg-white border-2 border-[#009FE3]">
        {/* Brochure Top Header Bar */}
        <div className="bg-[#009FE3] text-white px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
          <div className="font-extrabold text-sm sm:text-base uppercase tracking-wide">
            1 & 2 · LES MÉTIERS DE L’INFRASTRUCTURE DIGITALE ET EXIGENCES DE L’EMPLOI
          </div>
          <span className="font-mono text-xs bg-white text-[#009FE3] px-2.5 py-0.5 font-bold">
            4 OPTIONS DE SPÉCIALISATION
          </span>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Core Definition Tile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            <div className="lg:col-span-8 bg-[#EAF6FC] border-2 border-[#009FE3]/30 p-5 sm:p-6 space-y-2">
              <div className="text-xs font-extrabold uppercase text-[#009FE3]">
                DÉFINITION DU MÉTIER
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Que fait un Technicien Spécialisé en Infrastructure Digitale ?
              </h2>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                C’est le professionnel chargé <strong className="text-[#EA5B0C]">d’exploiter</strong> (faire fonctionner),{' '}
                <strong className="text-[#EA5B0C]">sécuriser</strong> (protéger),{' '}
                <strong className="text-[#EA5B0C]">optimiser</strong> (rendre plus rapide) et{' '}
                <strong className="text-[#EA5B0C]">faire évoluer</strong> (moderniser) les ordinateurs, les serveurs et le réseau informatique de l’entreprise.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-1 gap-2">
              <div className="bg-[#005596] text-white p-4 flex flex-col justify-center">
                <div className="text-xs font-mono font-bold text-[#38BDF8]">1ÈRE ANNÉE</div>
                <div className="font-extrabold text-sm uppercase mt-0.5">
                  Tronc Commun Infrastructure Digitale
                </div>
                <div className="text-xs text-slate-200 mt-1">
                  Tous les stagiaires apprennent les mêmes bases.
                </div>
              </div>
              <div className="bg-[#EA5B0C] text-white p-4 flex flex-col justify-center">
                <div className="text-xs font-mono font-bold text-white/90">2ÈME ANNÉE</div>
                <div className="font-extrabold text-sm uppercase mt-0.5">
                  Choix d’une Option parmi les 4
                </div>
                <div className="text-xs text-white/90 mt-1">
                  Systèmes & Réseaux · Cybersécurité · Cloud · IoT
                </div>
              </div>
            </div>
          </div>

          {/* 4 Windows-8 / Brochure Metro Square Tiles Selector */}
          <div className="space-y-2">
            <div className="text-xs font-extrabold uppercase text-slate-500">
              CLIQUEZ SUR UNE OPTION POUR AFFICHER SES MISSIONS ET SES OUTILS :
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {INFRA_OPTIONS.map((opt) => {
                const isActive = opt.id === selectedId;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect(opt.id)}
                    style={{
                      backgroundColor: isActive ? opt.colorHex : opt.lightBgHex,
                      borderColor: opt.colorHex,
                    }}
                    className={`border-2 p-5 text-left transition-all cursor-pointer flex flex-col justify-between gap-4 ${
                      isActive ? 'text-white shadow-md' : 'text-slate-900 hover:opacity-95'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        style={{
                          backgroundColor: isActive ? '#FFFFFF' : opt.colorHex,
                          color: isActive ? opt.colorHex : '#FFFFFF',
                        }}
                        className="w-11 h-11 flex items-center justify-center shrink-0"
                      >
                        {OPTION_ICONS[opt.id]}
                      </span>
                      <span
                        className={`font-mono text-xs font-extrabold px-2 py-0.5 ${
                          isActive ? 'bg-black/20 text-white' : 'bg-white text-slate-700'
                        }`}
                      >
                        OPTION {opt.codeNumber}
                      </span>
                    </div>

                    <div>
                      <div className="font-extrabold text-base uppercase tracking-tight">
                        {opt.shortName}
                      </div>
                      <div
                        className={`text-xs mt-1 font-medium ${
                          isActive ? 'text-white/90' : 'text-slate-600'
                        }`}
                      >
                        {isActive ? 'Affiché ci-dessous' : 'Cliquez pour découvrir'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Option Detail Board (Brochure Square Layout) */}
          <div
            style={{ borderColor: activeOption.colorHex }}
            className="border-2 bg-white space-y-0"
          >
            {/* Active Option Header */}
            <div
              style={{ backgroundColor: activeOption.colorHex }}
              className="text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4"
            >
              <div>
                <div className="text-xs font-mono font-bold uppercase opacity-90">
                  DESCRIPTION DU MÉTIER & PROFIL DE LA FORMATION
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase mt-0.5">
                  {activeOption.fullName}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => onSelectLabOption?.(activeOption.id)}
                className="bg-white text-slate-900 hover:bg-slate-100 px-4 py-2.5 text-xs font-extrabold uppercase transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Tester l’Atelier Pratique {activeOption.shortName}</span>
                <ArrowRight className="w-4 h-4 text-[#EA5B0C]" />
              </button>
            </div>

            {/* Body Grid */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {/* Left: Description & Everyday Example */}
                <div
                  style={{ backgroundColor: activeOption.lightBgHex }}
                  className="lg:col-span-6 p-5 border border-slate-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div
                      style={{ color: activeOption.colorHex }}
                      className="text-xs font-extrabold uppercase"
                    >
                      RÔLE DU TECHNICIEN EN ENTREPRISE
                    </div>
                    <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                      {activeOption.simpleDefinition}
                    </p>
                  </div>

                  <div className="bg-white p-4 border-2 border-[#EA5B0C] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#EA5B0C]">
                      <Lightbulb className="w-4 h-4 shrink-0" />
                      <span>{activeOption.everydayAnalogy.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeOption.everydayAnalogy.comparison}
                    </p>
                  </div>
                </div>

                {/* Right: Current Tools & Jobs */}
                <div className="lg:col-span-6 bg-[#F4F8FB] p-5 border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#139A74]">
                      <Sparkles className="w-4 h-4 shrink-0" />
                      <span>OUTILS TECHNOLOGIQUES UTILISÉS SUR LE MARCHÉ</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeOption.modernTools2026.map((tool) => (
                        <div
                          key={tool.name}
                          className="bg-white border border-slate-200 p-3 space-y-1"
                        >
                          <div className="font-extrabold text-xs text-slate-900">
                            {tool.name}
                          </div>
                          <div className="text-xs text-slate-600">{tool.role}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-3.5 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#005596]">
                      <Briefcase className="w-4 h-4 shrink-0" />
                      <span>MÉTIERS VISÉS APRÈS LE DIPLÔME :</span>
                    </div>
                    <div className="text-xs text-slate-700 font-medium">
                      {activeOption.careerRoles.join(' · ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Concrete Operations & Activities (From Guide de Soutien Pages 11-16) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-slate-800">
                  <Wrench className="w-4 h-4 text-[#EA5B0C]" />
                  <span>
                    OPÉRATIONS ET ACTIVITÉS EXÉCUTÉES À LA FIN DE LA FORMATION ({activeOption.shortName}) :
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeOption.coreMissions.map((mission, idx) => {
                    const headerColors = ['#009FE3', '#EA5B0C', '#139A74'];
                    const barColor = headerColors[idx % headerColors.length];
                    return (
                      <div
                        key={mission.category}
                        className="border-2 border-slate-200 bg-white flex flex-col"
                      >
                        <div
                          style={{ backgroundColor: barColor }}
                          className="text-white px-4 py-2 font-extrabold text-xs uppercase"
                        >
                          {mission.category}
                        </div>
                        <ul className="p-4 space-y-2 text-xs text-slate-700 flex-1">
                          {mission.tasks.map((task) => (
                            <li key={task} className="leading-relaxed flex items-start gap-2">
                              <span
                                style={{ backgroundColor: barColor }}
                                className="w-1.5 h-1.5 mt-1.5 shrink-0"
                              />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Vocabulaire Clé du Cours (6 Square Tiles) */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#EA5B0C]">
              <BookOpen className="w-4 h-4" />
              <span>LES 6 MOTS CLÉS À CONNAÎTRE DÈS AUJOURD’HUI</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  term: '1. Serveur',
                  color: '#009FE3',
                  simple:
                    'Un ordinateur puissant allumé 24h/24 qui stocke les fichiers et les logiciels pour les partager avec tous les employés.',
                },
                {
                  term: '2. Adresse IP',
                  color: '#EA5B0C',
                  simple:
                    'Le numéro unique (exemple : 192.168.1.10) donné à chaque ordinateur ou téléphone pour communiquer sur le réseau.',
                },
                {
                  term: '3. Routeur et Switch',
                  color: '#139A74',
                  simple:
                    'Le Switch relie les ordinateurs d’un même bâtiment entre eux ; le Routeur les relie à Internet.',
                },
                {
                  term: '4. Pare-feu (Firewall)',
                  color: '#005596',
                  simple:
                    'Une barrière de sécurité qui contrôle tout ce qui entre et sort du réseau pour bloquer les pirates.',
                },
                {
                  term: '5. Machine Virtuelle (VM)',
                  color: '#84BD00',
                  simple:
                    'Un ordinateur complet créé par logiciel à l’intérieur d’un serveur physique.',
                },
                {
                  term: '6. Capteur IoT',
                  color: '#66437A',
                  simple:
                    'Un petit appareil électronique qui mesure la température, l’eau ou la position et envoie l’information sur Internet.',
                },
              ].map((item) => (
                <div
                  key={item.term}
                  style={{ borderColor: item.color }}
                  className="border-2 bg-[#F4F8FB] p-4 space-y-1.5"
                >
                  <div
                    style={{ color: item.color }}
                    className="font-extrabold text-sm uppercase"
                  >
                    {item.term}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{item.simple}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
