import React, { useState } from 'react';
import {
  Compass,
  Cpu,
  GraduationCap,
  Award,
  Layers,
  CheckSquare,
  ArrowRight,
  Network,
  ShieldCheck,
  Cloud,
  Radio,
} from 'lucide-react';

interface CmcGuelmimSectionProps {
  onJumpToSimulator: () => void;
  onJumpToLabs: () => void;
  onJumpToOptions: () => void;
}

export const CmcGuelmimSection: React.FC<CmcGuelmimSectionProps> = ({
  onJumpToSimulator,
  onJumpToLabs,
  onJumpToOptions,
}) => {
  const [activeFactoryStep, setActiveFactoryStep] = useState<'apprenant' | 'cmc' | 'laureat'>('laureat');

  return (
    <section id="accueil-m101" className="scroll-mt-20 space-y-8 pt-8 pb-4 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Metro / Brochure Style Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left Dominant Tile (8 cols): Course Title & Core Mission */}
        <div className="lg:col-span-8 bg-white border-2 border-[#EA5B0C] flex flex-col justify-between">
          {/* Top Brochure Ribbon */}
          <div className="bg-[#EA5B0C] text-white px-6 py-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3 font-extrabold text-sm tracking-wide uppercase">
              <Layers className="w-5 h-5 shrink-0" />
              <span>COURS M101 · INFRASTRUCTURE DIGITALE (15 HEURES)</span>
            </div>
            <span className="font-mono text-xs bg-white text-[#EA5B0C] px-2.5 py-0.5 font-bold">
              1ÈRE ANNÉE · TRONC COMMUN
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#009FE3]">
                MÉTIER ET FORMATION · SE SITUER AU REGARD DU MÉTIER ET DE LA DÉMARCHE DE FORMATION
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-[1.15]">
                Découvrez votre futur métier en{' '}
                <span className="text-[#EA5B0C]">Infrastructure Digitale</span>
              </h1>
              <p className="text-base text-slate-700 leading-relaxed max-w-2xl">
                Ce module de <strong className="text-slate-900">15 heures</strong> est votre point de départ. Vous allez comprendre le travail concret du technicien spécialisé, explorer les <strong className="text-[#009FE3]">4 options de spécialisation</strong> de 2ème année, pratiquer sur des simulateurs et construire votre parcours de réussite.
              </p>
            </div>

            {/* 4 Metro Action Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                type="button"
                onClick={onJumpToOptions}
                className="bg-[#009FE3] hover:bg-[#0082ba] text-white p-4 text-left transition-colors cursor-pointer flex flex-col justify-between gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold opacity-90">CHAPITRE 01 & 02</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-sm uppercase">
                  Explorer les 4 Options du Métier
                </div>
              </button>

              <button
                type="button"
                onClick={onJumpToSimulator}
                className="bg-[#EA5B0C] hover:bg-[#cf4e08] text-white p-4 text-left transition-colors cursor-pointer flex flex-col justify-between gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold opacity-90">ORIENTATION</span>
                  <Compass className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-sm uppercase">
                  Lancer le Simulateur de Carrière
                </div>
              </button>

              <button
                type="button"
                onClick={onJumpToLabs}
                className="bg-[#139A74] hover:bg-[#0f7d5e] text-white p-4 text-left transition-colors cursor-pointer flex flex-col justify-between gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold opacity-90">PRATIQUE</span>
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-sm uppercase">
                  Pratiquer les 5 Ateliers Réels
                </div>
              </button>
            </div>
          </div>

          {/* Bottom Summary Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t-2 border-slate-100 bg-[#F4F8FB] divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="p-4">
              <div className="font-mono text-xl font-extrabold text-[#EA5B0C]">15 Heures</div>
              <div className="text-xs text-slate-600 font-medium">Durée du module M101</div>
            </div>
            <div className="p-4">
              <div className="font-mono text-xl font-extrabold text-[#009FE3]">4 Options</div>
              <div className="text-xs text-slate-600 font-medium">Spécialités en 2ème année</div>
            </div>
            <div className="p-4">
              <div className="font-mono text-xl font-extrabold text-[#139A74]">2 Ans</div>
              <div className="text-xs text-slate-600 font-medium">Diplôme Technicien Spécialisé</div>
            </div>
            <div className="p-4">
              <div className="font-mono text-xl font-extrabold text-[#005596]">70% / 30%</div>
              <div className="text-xs text-slate-600 font-medium">Technique & Compétences transversales</div>
            </div>
          </div>
        </div>

        {/* Right Tile (4 cols): Pôle Digital Visual Tile + 4 Options Quick Grid */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="relative flex-1 min-h-[220px] bg-[#005596] border-2 border-[#005596] overflow-hidden flex flex-col justify-end">
            <img
              src="/assets/aistudio/image_95769b69.png"
              alt="Pôle Digital - Cité des Métiers et des Compétences"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#005596]/95 via-[#005596]/40 to-transparent" />
            <div className="relative z-10 p-5 text-white space-y-1">
              <div className="inline-block bg-[#EA5B0C] text-white text-[11px] font-extrabold px-2.5 py-1 uppercase">
                PÔLE DIGITAL & IA
              </div>
              <p className="font-extrabold text-base leading-snug pt-1">
                Filière Infrastructure Digitale
              </p>
              <p className="text-xs text-slate-200">
                1ère année Tronc Commun · 2ème année Spécialisation
              </p>
            </div>
          </div>

          {/* 4 Square Mini-Tiles of the 4 Options */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#009FE3] text-white p-3.5 flex items-center gap-2.5">
              <Network className="w-5 h-5 shrink-0" />
              <div className="text-xs font-extrabold uppercase leading-tight">
                Systèmes & Réseaux
              </div>
            </div>
            <div className="bg-[#EA5B0C] text-white p-3.5 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <div className="text-xs font-extrabold uppercase leading-tight">
                Cybersécurité
              </div>
            </div>
            <div className="bg-[#005596] text-white p-3.5 flex items-center gap-2.5">
              <Cloud className="w-5 h-5 shrink-0" />
              <div className="text-xs font-extrabold uppercase leading-tight">
                Cloud Computing
              </div>
            </div>
            <div className="bg-[#139A74] text-white p-3.5 flex items-center gap-2.5">
              <Radio className="w-5 h-5 shrink-0" />
              <div className="text-xs font-extrabold uppercase leading-tight">
                IoT Connecté
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KEPT SECTION REQUESTED BY USER: MODÈLE PÉDAGOGIQUE DE LA BROCHURE CMC (SKILLS FACTORY) */}
      <div className="bg-white border-2 border-[#EA5B0C]">
        <div className="bg-[#EA5B0C] text-white px-6 py-3 flex flex-wrap items-center justify-between gap-2">
          <span className="font-extrabold text-sm uppercase tracking-wide">
            MODÈLE PÉDAGOGIQUE DE LA BROCHURE CMC · LA CMC EST UNE RÉELLE « SKILLS FACTORY » (USINE À COMPÉTENCES)
          </span>
          <span className="text-xs font-mono bg-white/20 px-2.5 py-0.5">
            Cliquez sur chaque étape ci-dessous
          </span>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-slate-700">
            Cliquez sur chaque étape ci-dessous pour comprendre comment la formation vous accompagne de votre premier jour jusqu’à votre diplôme :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => setActiveFactoryStep('apprenant')}
              className={`p-5 border-2 text-left transition-all cursor-pointer ${
                activeFactoryStep === 'apprenant'
                  ? 'bg-[#009FE3] border-[#009FE3] text-white'
                  : 'bg-[#EAF6FC] border-[#009FE3]/40 text-slate-900 hover:border-[#009FE3]'
              }`}
            >
              <div
                className={`text-xs font-mono font-bold ${
                  activeFactoryStep === 'apprenant' ? 'text-white' : 'text-[#009FE3]'
                }`}
              >
                ÉTAPE 01
              </div>
              <div className="font-extrabold text-lg mt-1">1. L’Apprenant</div>
              <div
                className={`text-xs mt-1 ${
                  activeFactoryStep === 'apprenant' ? 'text-white/90' : 'text-slate-600'
                }`}
              >
                Vous aujourd’hui : curieux, même avec zéro expérience technique
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveFactoryStep('cmc')}
              className={`p-5 border-2 text-left transition-all cursor-pointer ${
                activeFactoryStep === 'cmc'
                  ? 'bg-[#EA5B0C] border-[#EA5B0C] text-white'
                  : 'bg-[#FEF2EB] border-[#EA5B0C]/40 text-slate-900 hover:border-[#EA5B0C]'
              }`}
            >
              <div
                className={`text-xs font-mono font-bold ${
                  activeFactoryStep === 'cmc' ? 'text-white' : 'text-[#EA5B0C]'
                }`}
              >
                ÉTAPE 02
              </div>
              <div className="font-extrabold text-lg mt-1">2. Cœur CMC (70% / 30%)</div>
              <div
                className={`text-xs mt-1 ${
                  activeFactoryStep === 'cmc' ? 'text-white/90' : 'text-slate-600'
                }`}
              >
                Hard Skills + Soft Skills + Smart Learning
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveFactoryStep('laureat')}
              className={`p-5 border-2 text-left transition-all cursor-pointer ${
                activeFactoryStep === 'laureat'
                  ? 'bg-[#139A74] border-[#139A74] text-white'
                  : 'bg-[#E8F7F2] border-[#139A74]/40 text-slate-900 hover:border-[#139A74]'
              }`}
            >
              <div
                className={`text-xs font-mono font-bold ${
                  activeFactoryStep === 'laureat' ? 'text-white' : 'text-[#139A74]'
                }`}
              >
                ÉTAPE 03
              </div>
              <div className="font-extrabold text-lg mt-1">3. Le Lauréat</div>
              <div
                className={`text-xs mt-1 ${
                  activeFactoryStep === 'laureat' ? 'text-white/90' : 'text-slate-600'
                }`}
              >
                Prêt pour l’emploi, l’entrepreneuriat ou les études supérieures
              </div>
            </button>
          </div>

          {/* Detail Panel */}
          <div className="p-5 bg-[#F4F8FB] border-2 border-slate-200">
            {activeFactoryStep === 'apprenant' && (
              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">
                  Étape 1 : Vous démarrez par le Tronc Commun d’Infrastructure Digitale
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Pendant toute la 1ère année, vous apprenez les bases pas à pas avec votre formateur : comment fonctionne un ordinateur, comment relier un réseau, comment créer une machine virtuelle et comment protéger un système.
                </p>
              </div>
            )}

            {activeFactoryStep === 'cmc' && (
              <div className="space-y-3">
                <h3 className="font-extrabold text-slate-900 text-base">
                  Étape 2 : Le programme combine « Hard Skills (70%) + Soft Skills (30%) + Smart Learning »
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-4 border border-[#009FE3]">
                    <div className="font-extrabold text-xs text-[#009FE3]">70% HARD SKILLS</div>
                    <p className="text-xs text-slate-700 mt-1">
                      La pratique technique du métier : réseaux, serveurs Windows et Linux, sécurité, Cloud et objets connectés.
                    </p>
                  </div>
                  <div className="bg-white p-4 border border-[#EA5B0C]">
                    <div className="font-extrabold text-xs text-[#EA5B0C]">30% COMPÉTENCES TRANSVERSALES</div>
                    <p className="text-xs text-slate-700 mt-1">
                      Français, Anglais technique, Arabe, communication, travail en équipe et entrepreneuriat (PIE).
                    </p>
                  </div>
                  <div className="bg-white p-4 border border-[#84BD00]">
                    <div className="font-extrabold text-xs text-[#139A74]">SMART LEARNING</div>
                    <p className="text-xs text-slate-700 mt-1">
                      Apprentissage par la pratique en atelier, projets d’équipe et plateformes numériques accessibles 24h/24.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeFactoryStep === 'laureat' && (
              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">
                  Étape 3 : Vous sortez Lauréat avec 3 portes ouvertes
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Avec votre diplôme de <strong>Technicien Spécialisé</strong> en poche, vous pouvez : <strong>1)</strong> Intégrer directement le marché du travail, <strong>2)</strong> Créer votre propre entreprise digitale, ou <strong>3)</strong> Poursuivre vos études supérieures (Licence Pro / École d’ingénieurs) grâce aux passerelles externes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
