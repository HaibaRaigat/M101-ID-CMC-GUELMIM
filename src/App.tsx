/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Menu,
  Home,
  Layers,
  Compass,
  Wrench,
  BookOpen,
  Building2,
  ChevronRight,
  ChevronLeft,
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
    label: 'Introduction',
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
    label: 'Simulateur',
    subtitle: 'Choisir sa spécialité',
    icon: <Compass className="w-5 h-5" />,
    hoverHex: '#139A74',
  },
  {
    id: 'active-labs',
    shortCode: 'CH 3',
    label: 'Ateliers & Ch.3',
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
          className="fixed top-1.5 left-2 z-50 w-9 h-9 bg-[#EA5B0C] hover:bg-[#009FE3] text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* =====================================================================
          LEFT VERTICAL MINI SLIDER NAVBAR (ORANGE #EA5B0C + BROCHURE HOVER COLORS)
         ===================================================================== */}
      {isSidebarVisible && (
        <aside
          aria-label="Navigation principale COURS M101"
          className={`fixed top-0 left-0 bottom-0 z-50 bg-[#EA5B0C] text-white flex flex-col justify-between transition-all duration-200 shadow-lg overflow-hidden ${
            isSidebarExpanded ? 'w-56' : 'w-16'
          }`}
        >
          {/* Top Hamburger Toggle (Strictly Contained Inside Sidebar Width) */}
          <div>
            <div className="h-12 border-b border-white/20 flex items-center justify-between px-2">
              <button
                onClick={() => setIsSidebarVisible(false)}
                title="Masquer la barre latérale"
                aria-label="Masquer la barre latérale"
                className="w-8 h-8 hover:bg-[#005596] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <Menu className="w-5 h-5" />
              </button>

              {isSidebarExpanded && (
                <span className="text-xs font-black uppercase tracking-wider truncate px-1 flex-1">
                  COURS M101
                </span>
              )}

              <button
                onClick={() => setIsSidebarExpanded((prev) => !prev)}
                title={isSidebarExpanded ? 'Réduire le menu' : 'Déplier les titres'}
                aria-label={isSidebarExpanded ? 'Réduire le menu' : 'Déplier les titres'}
                className="w-6 h-8 hover:bg-[#009FE3] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                {isSidebarExpanded ? (
                  <ChevronLeft className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Vertical Section Icons List (Seamless on Orange without inner boxes) */}
            <nav className="flex flex-col divide-y divide-white/15">
              {NAV_SECTIONS.map((item) => {
                const isHovered = hoveredNavId === item.id;
                const isActive = activeSection === item.id;
                const bgColor = isHovered || isActive ? item.hoverHex : 'transparent';
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
                      isSidebarExpanded
                        ? 'px-3.5 py-3 gap-3 text-left'
                        : 'py-3.5 flex-col justify-center gap-1'
                    } ${isLime ? 'text-slate-950' : 'text-white'}`}
                  >
                    {/* Active Left Indicator Square Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
                    )}

                    <div className="flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    {isSidebarExpanded ? (
                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] font-black uppercase tracking-widest opacity-85">
                          {item.shortCode}
                        </div>
                        <div className="text-xs font-black uppercase tracking-tight truncate">
                          {item.label}
                        </div>
                        <div className="text-[10px] opacity-85 truncate">{item.subtitle}</div>
                      </div>
                    ) : (
                      <span className="text-[9px] font-black uppercase tracking-wider leading-none">
                        {item.shortCode}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Course Badge */}
          <div className="py-2 px-1 border-t border-white/20 text-center">
            {isSidebarExpanded ? (
              <div className="text-[10px] font-black uppercase tracking-wider">
                MODULE M101 · 15H
              </div>
            ) : (
              <div className="text-[10px] font-black uppercase leading-none">
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
          isSidebarVisible ? (isSidebarExpanded ? 'pl-56' : 'pl-16') : 'pl-0'
        }`}
      >
        {/* Sleek, Compact Single-Row Top Bar (h-12) */}
        <header className="sticky top-0 z-30 h-12 bg-white border-b-2 border-[#EA5B0C] px-3 sm:px-6 flex items-center justify-between gap-3 overflow-x-auto">
          <div className="flex items-center gap-2.5 shrink-0">
            {!isSidebarVisible && <div className="w-8" />}
            <div className="w-7 h-7 bg-[#EA5B0C] text-white font-black text-[11px] flex items-center justify-center shrink-0">
              M101
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 uppercase">
                COURS M101
              </span>
              <span className="bg-[#009FE3] text-white px-1.5 py-0.5 text-[10px] font-black uppercase">
                15H
              </span>
              <span className="hidden md:inline text-xs font-bold text-slate-500 border-l border-slate-300 pl-2">
                Infrastructure Digitale
              </span>
            </div>
          </div>

          {/* Compact Single-Line Quick Jump Buttons */}
          <div className="hidden lg:flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            {NAV_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToElement(sec.id)}
                style={{
                  borderColor: activeSection === sec.id ? sec.hoverHex : '#cbd5e1',
                  backgroundColor: activeSection === sec.id ? sec.hoverHex : '#F8FAFC',
                }}
                className={`px-2.5 py-1 text-[11px] font-extrabold uppercase border transition-colors cursor-pointer ${
                  activeSection === sec.id
                    ? sec.hoverHex === '#84BD00'
                      ? 'text-slate-950'
                      : 'text-white'
                    : 'text-slate-700 hover:border-[#EA5B0C] hover:text-[#EA5B0C]'
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
