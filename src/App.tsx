/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Menu,
  X,
  Home,
  Layers,
  Compass,
  Wrench,
  BookOpen,
  Building2,
  ChevronRight,
  MonitorPlay,
} from 'lucide-react';
import { CmcGuelmimSection } from './components/CmcGuelmimSection';
import { OptionsExplorer } from './components/OptionsExplorer';
import { CareerSimulator } from './components/CareerSimulator';
import { ActivePedagogyLabs } from './components/ActivePedagogyLabs';
import { ProgramAndOFPPT } from './components/ProgramAndOFPPT';
import { OptionId } from './utils/courseLogic';

interface NavSectionItem {
  id: string;
  shortCode: string;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  hoverHex: string;
}

const NAV_SECTIONS: NavSectionItem[] = [
  {
    id: 'accueil-m101',
    shortCode: 'INTRO',
    label: 'Introduction M101',
    subtitle: 'Métier & Skills Factory',
    icon: <Home className="w-5 h-5" />,
    hoverHex: '#009FE3',
  },
  {
    id: 'quatre-options',
    shortCode: 'CH 1-2',
    label: 'Les 4 Options',
    subtitle: 'Métiers & Opérations',
    icon: <Layers className="w-5 h-5" />,
    hoverHex: '#005596',
  },
  {
    id: 'career-simulator',
    shortCode: 'QUIZ',
    label: 'Simulateur Métier',
    subtitle: 'Choisir sa spécialité',
    icon: <Compass className="w-5 h-5" />,
    hoverHex: '#139A74',
  },
  {
    id: 'active-labs',
    shortCode: 'CH 3',
    label: 'Ateliers & Aptitudes',
    subtitle: '4 Labs + Compétences',
    icon: <Wrench className="w-5 h-5" />,
    hoverHex: '#66437A',
  },
  {
    id: 'programme-tronc-commun',
    shortCode: 'CH 4',
    label: 'Programme 2 Ans',
    subtitle: '15 Modules & Évaluation',
    icon: <BookOpen className="w-5 h-5" />,
    hoverHex: '#84BD00',
  },
  {
    id: 'ofppt-systeme',
    shortCode: 'CH 5-14',
    label: 'Système OFPPT',
    subtitle: 'Hybride, Bourse & AMO',
    icon: <Building2 className="w-5 h-5" />,
    hoverHex: '#009FE3',
  },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState<OptionId>('sysres');
  const [activeSection, setActiveSection] = useState<string>('accueil-m101');
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);

  const scrollToElement = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectRecommendedOption = (id: OptionId) => {
    setSelectedOption(id);
    scrollToElement('quatre-options');
  };

  return (
    <div className="min-h-screen bg-[#F4F8FB] text-slate-900 font-sans selection:bg-[#EA5B0C] selection:text-white flex">
      {/* =====================================================================
          FLOATING HAMBURGER TRIGGER WHEN SIDEBAR IS HIDDEN
         ===================================================================== */}
      {!isSidebarVisible && (
        <button
          onClick={() => setIsSidebarVisible(true)}
          title="Afficher le menu du cours M101"
          aria-label="Afficher le menu du cours M101"
          className="fixed top-3 left-3 z-50 w-12 h-12 bg-[#EA5B0C] hover:bg-[#009FE3] text-white flex flex-col items-center justify-center shadow-lg border-2 border-white transition-colors cursor-pointer"
        >
          <Menu className="w-6 h-6" />
          <span className="text-[9px] font-black uppercase tracking-tighter leading-none mt-0.5">
            M101
          </span>
        </button>
      )}

      {/* =====================================================================
          LEFT VERTICAL MINI SLIDER NAVBAR (ORANGE #EA5B0C + BROCHURE HOVER COLORS)
         ===================================================================== */}
      {isSidebarVisible && (
        <aside
          aria-label="Navigation principale COURS M101"
          className={`fixed top-0 left-0 bottom-0 z-50 bg-[#EA5B0C] text-white border-r-2 border-white/25 flex flex-col justify-between transition-all duration-200 shadow-xl ${
            isSidebarExpanded ? 'w-64' : 'w-20'
          }`}
        >
          {/* Top Hamburger Toggle + Expand/Collapse Button */}
          <div>
            <div className="border-b-2 border-white/20 flex items-center justify-between p-2 gap-1 bg-[#d45008]">
              <button
                onClick={() => setIsSidebarVisible(false)}
                title="Masquer la barre latérale"
                aria-label="Masquer la barre latérale"
                className="w-12 h-12 bg-black/20 hover:bg-[#005596] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <Menu className="w-6 h-6" />
              </button>

              {isSidebarExpanded && (
                <div className="px-2 flex-1 min-w-0">
                  <div className="text-xs font-black uppercase tracking-widest truncate">
                    COURS M101
                  </div>
                  <div className="text-[10px] text-white/85 font-bold truncate">
                    Infrastructure Digitale
                  </div>
                </div>
              )}

              <button
                onClick={() => setIsSidebarExpanded((prev) => !prev)}
                title={isSidebarExpanded ? 'Réduire en mini-barre' : 'Déplier les titres'}
                aria-label={isSidebarExpanded ? 'Réduire en mini-barre' : 'Déplier les titres'}
                className="w-7 h-12 bg-black/15 hover:bg-[#009FE3] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                {isSidebarExpanded ? (
                  <X className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Vertical Section Icons List */}
            <nav className="flex flex-col divide-y divide-white/15">
              {NAV_SECTIONS.map((item) => {
                const isHovered = hoveredNavId === item.id;
                const isActive = activeSection === item.id;
                const bgColor =
                  isHovered || isActive ? item.hoverHex : 'transparent';
                const isLime = (isHovered || isActive) && item.hoverHex === '#84BD00';

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToElement(item.id)}
                    onMouseEnter={() => setHoveredNavId(item.id)}
                    onMouseLeave={() => setHoveredNavId(null)}
                    style={{ backgroundColor: bgColor }}
                    title={`${item.label} — ${item.subtitle}`}
                    className={`group relative w-full transition-colors cursor-pointer flex items-center ${
                      isSidebarExpanded ? 'px-4 py-3.5 gap-3.5 text-left' : 'py-3.5 flex-col justify-center gap-1'
                    } ${isLime ? 'text-slate-950' : 'text-white'}`}
                  >
                    {/* Active Left Indicator Square Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-white" />
                    )}

                    <div className="w-9 h-9 bg-black/20 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    {isSidebarExpanded ? (
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-85">
                          {item.shortCode}
                        </div>
                        <div className="text-xs font-black uppercase tracking-tight truncate">
                          {item.label}
                        </div>
                        <div className="text-[11px] opacity-90 truncate">{item.subtitle}</div>
                      </div>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-wider leading-none">
                        {item.shortCode}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Course Badge */}
          <div className="p-2 border-t-2 border-white/20 bg-black/15 text-center">
            {isSidebarExpanded ? (
              <div className="text-[11px] font-black uppercase tracking-wider py-1">
                MODULE M101 · 15 HEURES
              </div>
            ) : (
              <div className="text-[10px] font-black uppercase leading-tight py-1">
                15H
              </div>
            )}
          </div>
        </aside>
      )}

      {/* =====================================================================
          MAIN COURSE CONTENT AREA
         ===================================================================== */}
      <div
        className={`flex-1 min-w-0 transition-all duration-200 ${
          isSidebarVisible ? (isSidebarExpanded ? 'pl-64' : 'pl-20') : 'pl-0'
        }`}
      >
        {/* Top Square Presentation Bar */}
        <header className="sticky top-0 z-30 bg-white border-b-4 border-[#EA5B0C] px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {!isSidebarVisible && <div className="w-12" />}
            <div className="w-10 h-10 bg-[#EA5B0C] text-white font-black text-sm flex items-center justify-center">
              M101
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 uppercase">
                  COURS M101
                </span>
                <span className="bg-[#009FE3] text-white px-2.5 py-0.5 text-[11px] font-black uppercase">
                  15 Heures
                </span>
              </div>
              <p className="text-xs font-bold text-slate-600">
                Métier et Formation en Infrastructure Digitale · Tronc Commun 1ère Année
              </p>
            </div>
          </div>

          {/* Quick Jump Square Tiles in Top Bar */}
          <div className="hidden xl:flex items-center gap-2">
            <span className="text-[11px] font-black uppercase text-slate-500 mr-1 flex items-center gap-1">
              <MonitorPlay className="w-4 h-4 text-[#EA5B0C]" />
              Accès rapide :
            </span>
            {NAV_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToElement(sec.id)}
                style={{
                  borderColor: activeSection === sec.id ? sec.hoverHex : '#e2e8f0',
                  backgroundColor: activeSection === sec.id ? sec.hoverHex : '#F4F8FB',
                }}
                className={`px-3 py-1.5 text-xs font-black uppercase border-2 transition-colors cursor-pointer ${
                  activeSection === sec.id
                    ? sec.hoverHex === '#84BD00'
                      ? 'text-slate-950'
                      : 'text-white'
                    : 'text-slate-800 hover:border-[#EA5B0C]'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </header>

        {/* Main Sections */}
        <main>
          {/* Section 0: Introduction M101 + Modèle Pédagogique Skills Factory */}
          <CmcGuelmimSection
            onJumpToSimulator={() => scrollToElement('career-simulator')}
            onJumpToLabs={() => scrollToElement('active-labs')}
            onJumpToOptions={() => scrollToElement('quatre-options')}
          />

          {/* Section 1 & 2: Chapitres 1 & 2 - Métiers, 4 Options & Nature et exigences de l'emploi */}
          <OptionsExplorer
            selectedOption={selectedOption}
            onSelectOption={(id) => setSelectedOption(id)}
            onSelectLabOption={() => scrollToElement('active-labs')}
          />

          {/* Section 3: Simulateur d'Orientation Métier */}
          <CareerSimulator onSelectRecommendedOption={handleSelectRecommendedOption} />

          {/* Section 4: Ateliers Pratiques (4 Labs) + Chapitre 3 (Compétences & 6 Aptitudes) */}
          <ActivePedagogyLabs />

          {/* Section 5 & 6: Chapitre 4 (Programme 2 ans, Pédagogie Active, Évaluation, 15 Modules) + Chapitres 5 à 14 (Système OFPPT, Hybride, Plateformes, Bourse & AMO) */}
          <ProgramAndOFPPT />
        </main>

        {/* Square Metro Footer */}
        <footer className="bg-[#005596] text-white border-t-8 border-[#EA5B0C] py-8 px-4 sm:px-8 mt-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#EA5B0C] text-white font-black text-sm flex items-center justify-center">
                M101
              </div>
              <div>
                <div className="font-black text-base uppercase tracking-wider">
                  COURS M101 · INFRASTRUCTURE DIGITALE
                </div>
                <div className="text-xs text-white/80">
                  Support interactif complet (Chapitres 1 à 14 · 15 Heures) — Pôle Digital & IA
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-[#009FE3] text-white px-3 py-1 text-xs font-black uppercase">
                Systèmes & Réseaux
              </span>
              <span className="bg-[#EA5B0C] text-white px-3 py-1 text-xs font-black uppercase">
                Cybersécurité
              </span>
              <span className="bg-white text-[#005596] px-3 py-1 text-xs font-black uppercase">
                Cloud Computing
              </span>
              <span className="bg-[#139A74] text-white px-3 py-1 text-xs font-black uppercase">
                Systèmes IoT
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
