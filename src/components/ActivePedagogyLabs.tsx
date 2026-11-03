import React, { useState } from 'react';
import {
  Network,
  ShieldAlert,
  Cloud,
  Sprout,
  Award,
  CheckSquare,
  AlertTriangle,
  Wifi,
  Router,
  Server,
  Laptop,
  Lock,
  Droplets,
  Thermometer,
  Brain,
  Users,
  Wrench,
} from 'lucide-react';
import {
  evaluateNetworkLab,
  evaluateCyberDefense,
  evaluateOasisIoT,
  NetworkNodeState,
  CyberDefenseState,
  IoTOasisState,
} from '../utils/courseLogic';
import { EMPLOYER_SOFT_SKILLS, SIX_APTITUDES_GUIDE } from '../data/courseData';

type LabTab = 'network' | 'cyber' | 'cloud' | 'iot' | 'skills';

const COMPETENCE_QUIZ_ITEMS = [
  {
    id: 'c1',
    title: 'Configurer un routeur Cisco et découper un réseau en VLAN',
    category: 'Savoir-Faire (Hard Skill)',
    transversalOrSpecific: 'Compétence spécifique au métier',
    explanation: 'C’est un geste technique précis que vous pratiquez au laboratoire réseau.',
  },
  {
    id: 'c2',
    title: 'Expliquer calmement une panne à un collègue et travailler en équipe',
    category: 'Savoir-Être (Soft Skill)',
    transversalOrSpecific: 'Compétence transversale',
    explanation: 'C’est un comportement professionnel utile dans toutes les entreprises.',
  },
  {
    id: 'c3',
    title: 'Connaître le rôle d’une adresse IP et les 7 couches du modèle OSI',
    category: 'Savoir (Connaissance)',
    transversalOrSpecific: 'Compétence spécifique au métier',
    explanation: 'C’est une connaissance théorique indispensable pour comprendre les réseaux.',
  },
  {
    id: 'c4',
    title: 'Chercher par soi-même une nouvelle solution technologique (Auto-formation)',
    category: 'Savoir-Être (Soft Skill)',
    transversalOrSpecific: 'Compétence transversale',
    explanation: 'La curiosité et l’autonomie permettent de progresser toute sa vie.',
  },
];

export const ActivePedagogyLabs: React.FC = () => {
  const [activeLab, setActiveLab] = useState<LabTab>('network');

  // Lab 1: Network state
  const [netState, setNetState] = useState<NetworkNodeState>({
    fiberConnected: true,
    routerConfigured: false,
    switchPowered: true,
    wifiSecured: false,
  });

  // Lab 2: Cyber state
  const [cyberState, setCyberState] = useState<CyberDefenseState>({
    firewallEnabled: true,
    mfaEnabled: false,
    backupOffline: false,
    patchApplied: false,
  });

  // Lab 3: Cloud state
  const [visitors, setVisitors] = useState<number>(350);
  const [cloudMode, setCloudMode] = useState<'local' | 'cloud'>('local');

  // Lab 4: IoT Oasis state
  const [iotState, setIotState] = useState<IoTOasisState>({
    soilMoisturePercent: 24,
    temperatureC: 38,
    autoValveEnabled: true,
  });

  // Lab 5: Savoir / Savoir-faire / Savoir-être interactive classification
  const [selectedCategories, setSelectedCategories] = useState<Record<string, string>>({});

  const netEval = evaluateNetworkLab(netState);
  const cyberEval = evaluateCyberDefense(cyberState);
  const iotEval = evaluateOasisIoT(iotState);

  const cloudCapacity = cloudMode === 'local' ? 250 : Math.ceil(visitors / 200) * 250;
  const activeServers = cloudMode === 'local' ? 1 : Math.max(1, Math.ceil(visitors / 200));
  const isOverloaded = visitors > cloudCapacity;

  const LAB_TABS: { id: LabTab; number: string; label: string; subtitle: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'network',
      number: 'ATELIER 01',
      label: 'Systèmes & Réseaux',
      subtitle: 'Connecter une PME',
      icon: <Network className="w-4 h-4" />,
      color: '#009FE3',
    },
    {
      id: 'cyber',
      number: 'ATELIER 02',
      label: 'Cybersécurité',
      subtitle: 'Stopper une attaque',
      icon: <ShieldAlert className="w-4 h-4" />,
      color: '#EA5B0C',
    },
    {
      id: 'cloud',
      number: 'ATELIER 03',
      label: 'Cloud Computing',
      subtitle: 'Serveur vs Cloud',
      icon: <Cloud className="w-4 h-4" />,
      color: '#005596',
    },
    {
      id: 'iot',
      number: 'ATELIER 04',
      label: 'Systèmes IoT',
      subtitle: 'Oasis Intelligente',
      icon: <Sprout className="w-4 h-4" />,
      color: '#139A74',
    },
    {
      id: 'skills',
      number: 'CHAPITRE 03',
      label: 'Aptitudes & Compétences',
      subtitle: 'Savoir / Savoir-Faire / Savoir-Être',
      icon: <Award className="w-4 h-4" />,
      color: '#66437A',
    },
  ];

  return (
    <section id="active-labs" className="scroll-mt-20 py-12 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-[#EA5B0C] text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-3">
          PÉDAGOGIE ACTIVE & CHAPITRE 3 (APTITUDES ET CONNAISSANCES)
        </div>
        <div className="border-l-8 border-[#009FE3] pl-5 py-1">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Ateliers Pratiques & <span className="text-[#009FE3]">Compétences du Métier</span>
          </h2>
          <p className="text-slate-600 text-base mt-1 max-w-3xl">
            Manipulez les 4 environnements techniques pour tester chaque métier, puis découvrez les aptitudes et compétences officielles du chapitre 3 du module M101.
          </p>
        </div>
      </div>

      {/* 5 Square Metro Lab Selector Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        {LAB_TABS.map((tab) => {
          const isActive = activeLab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveLab(tab.id)}
              style={{
                backgroundColor: isActive ? tab.color : '#FFFFFF',
                borderColor: tab.color,
              }}
              className={`p-4 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive ? 'text-white shadow-md -translate-y-0.5' : 'text-slate-900 hover:bg-[#F4F8FB]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span
                  className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {tab.number}
                </span>
                <div
                  className="w-7 h-7 flex items-center justify-center text-white"
                  style={{ backgroundColor: isActive ? 'rgba(0,0,0,0.2)' : tab.color }}
                >
                  {tab.icon}
                </div>
              </div>
              <div>
                <div className="font-black text-sm uppercase tracking-tight leading-snug">{tab.label}</div>
                <div className={`text-xs mt-0.5 ${isActive ? 'text-white/90' : 'text-slate-500'}`}>
                  {tab.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* LAB 1: NETWORK TOPOLOGY BUILDER */}
      {activeLab === 'network' && (
        <div className="bg-white border-2 border-[#009FE3]">
          <div className="bg-[#009FE3] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/90">
                ATELIER 1 · OPTION SYSTÈMES ET RÉSEAUX
              </div>
              <h3 className="text-xl font-black uppercase">
                Mettre en service le réseau d’une coopérative à Guelmim
              </h3>
            </div>
            <div className="bg-white text-[#005596] px-4 py-1.5 font-black text-sm uppercase">
              État du réseau : {netEval.score}%
            </div>
          </div>

          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#EAF6FC] border-l-4 border-[#009FE3] p-4">
                <div className="text-xs font-black uppercase text-[#005596] mb-1">Mission du Technicien</div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Une entreprise locale vient d’ouvrir ses bureaux. Cliquez sur les 4 équipements ci-dessous pour établir la connexion Internet et sécuriser le Wi-Fi.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    key: 'fiberConnected' as const,
                    title: '1. Arrivée Fibre Optique (WAN)',
                    desc: 'Relier le câble opérateur au modem de l’entreprise',
                  },
                  {
                    key: 'routerConfigured' as const,
                    title: '2. Configuration Routeur (Adresses IP)',
                    desc: 'Activer la distribution automatique d’adresses (DHCP)',
                  },
                  {
                    key: 'switchPowered' as const,
                    title: '3. Commutateur Switch (Câbles RJ45)',
                    desc: 'Alimenter le switch qui relie les ordinateurs et serveurs',
                  },
                  {
                    key: 'wifiSecured' as const,
                    title: '4. Sécurité Wi-Fi (WPA3)',
                    desc: 'Verrouiller le Wi-Fi avec un mot de passe chiffré',
                  },
                ].map((item) => {
                  const active = netState[item.key];
                  return (
                    <button
                      key={item.key}
                      onClick={() => setNetState((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                      className={`w-full p-3.5 border-2 text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        active
                          ? 'bg-[#E8F7F2] border-[#139A74] text-slate-900'
                          : 'bg-[#FEF2EB] border-[#EA5B0C] text-slate-900'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-black uppercase">{item.title}</div>
                        <div className="text-xs text-slate-600 mt-0.5">{item.desc}</div>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-black uppercase text-white shrink-0 ${
                          active ? 'bg-[#139A74]' : 'bg-[#EA5B0C]'
                        }`}
                      >
                        {active ? 'ACTIF' : 'COUPÉ'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Bright Visual Schema */}
            <div className="lg:col-span-7 bg-[#F4F8FB] border-2 border-slate-200 p-6 space-y-6">
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#005596]">
                  SCHÉMA D’ARCHITECTURE RÉSEAU EN DIRECT
                </span>
                <span
                  className={`px-3 py-1 text-xs font-black uppercase text-white ${
                    netEval.isOnline ? 'bg-[#139A74]' : 'bg-[#EA5B0C]'
                  }`}
                >
                  {netEval.statusLabel}
                </span>
              </div>

              {/* 4 Square Equipment Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div
                  className={`p-4 border-2 text-center ${
                    netState.fiberConnected ? 'bg-white border-[#139A74]' : 'bg-[#FEF2EB] border-[#EA5B0C]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 mx-auto mb-2 flex items-center justify-center text-white ${
                      netState.fiberConnected ? 'bg-[#139A74]' : 'bg-[#EA5B0C]'
                    }`}
                  >
                    <Router className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-black uppercase text-slate-900">1. Fibre WAN</div>
                  <div className="text-[11px] font-bold text-slate-600 mt-1">
                    {netState.fiberConnected ? 'Signal OK' : 'Débranché'}
                  </div>
                </div>

                <div
                  className={`p-4 border-2 text-center ${
                    netState.routerConfigured ? 'bg-white border-[#139A74]' : 'bg-[#FEF2EB] border-[#EA5B0C]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 mx-auto mb-2 flex items-center justify-center text-white ${
                      netState.routerConfigured ? 'bg-[#009FE3]' : 'bg-[#EA5B0C]'
                    }`}
                  >
                    <Network className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-black uppercase text-slate-900">2. Routeur IP</div>
                  <div className="text-[11px] font-bold text-slate-600 mt-1">
                    {netState.routerConfigured ? '192.168.1.1' : 'Non configuré'}
                  </div>
                </div>

                <div
                  className={`p-4 border-2 text-center ${
                    netState.switchPowered ? 'bg-white border-[#139A74]' : 'bg-[#FEF2EB] border-[#EA5B0C]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 mx-auto mb-2 flex items-center justify-center text-white ${
                      netState.switchPowered ? 'bg-[#005596]' : 'bg-[#EA5B0C]'
                    }`}
                  >
                    <Server className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-black uppercase text-slate-900">3. Switch 24p</div>
                  <div className="text-[11px] font-bold text-slate-600 mt-1">
                    {netState.switchPowered ? 'Ports RJ45 OK' : 'Éteint'}
                  </div>
                </div>

                <div
                  className={`p-4 border-2 text-center ${
                    netState.wifiSecured ? 'bg-white border-[#139A74]' : 'bg-[#FEF2EB] border-[#EA5B0C]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 mx-auto mb-2 flex items-center justify-center text-white ${
                      netState.wifiSecured ? 'bg-[#139A74]' : 'bg-[#EA5B0C]'
                    }`}
                  >
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-black uppercase text-slate-900">4. Borne Wi-Fi</div>
                  <div className="text-[11px] font-bold text-slate-600 mt-1">
                    {netState.wifiSecured ? 'WPA3 Actif' : 'Ouvert (Risque)'}
                  </div>
                </div>
              </div>

              {/* Diagnostic Box */}
              <div
                className={`p-4 border-l-8 ${
                  netEval.score === 100
                    ? 'bg-[#E8F7F2] border-[#139A74] text-slate-900'
                    : 'bg-[#FEF2EB] border-[#EA5B0C] text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-black uppercase mb-1">
                  <Laptop className="w-4 h-4 text-[#005596]" />
                  Diagnostic en direct :
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-800">{netEval.diagnosticMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAB 2: CYBERSECURITY INCIDENT SIMULATOR */}
      {activeLab === 'cyber' && (
        <div className="bg-white border-2 border-[#EA5B0C]">
          <div className="bg-[#EA5B0C] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/90">
                ATELIER 2 · OPTION CYBERSÉCURITÉ
              </div>
              <h3 className="text-xl font-black uppercase">
                Protéger un hôpital contre une attaque Ransomware
              </h3>
            </div>
            <div className="bg-white text-[#EA5B0C] px-4 py-1.5 font-black text-sm uppercase">
              Indice de protection : {cyberEval.protectionScore}%
            </div>
          </div>

          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#FEF2EB] border-l-4 border-[#EA5B0C] p-4">
                <div className="text-xs font-black uppercase text-[#EA5B0C] mb-1">Mission Cybersécurité</div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Un pirate tente de bloquer les dossiers médicaux. Activez les 4 boucliers de sécurité pour réduire le risque à zéro.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    key: 'firewallEnabled' as const,
                    title: '1. Pare-feu (Firewall)',
                    desc: 'Filtrer le trafic entrant et bloquer les ports suspects',
                  },
                  {
                    key: 'mfaEnabled' as const,
                    title: '2. Double Authentification (MFA)',
                    desc: 'Exiger un code sur téléphone en plus du mot de passe',
                  },
                  {
                    key: 'backupOffline' as const,
                    title: '3. Sauvegarde Isolée (Backup)',
                    desc: 'Copier chaque nuit les dossiers sur un serveur déconnecté',
                  },
                  {
                    key: 'patchApplied' as const,
                    title: '4. Correctifs de Sécurité (Patchs)',
                    desc: 'Mettre à jour Windows et Linux pour fermer les failles',
                  },
                ].map((shield) => {
                  const active = cyberState[shield.key];
                  return (
                    <button
                      key={shield.key}
                      onClick={() =>
                        setCyberState((prev) => ({ ...prev, [shield.key]: !prev[shield.key] }))
                      }
                      className={`w-full p-3.5 border-2 text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        active
                          ? 'bg-[#E8F7F2] border-[#139A74] text-slate-900'
                          : 'bg-[#FEF2EB] border-[#EA5B0C] text-slate-900'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-black uppercase">{shield.title}</div>
                        <div className="text-xs text-slate-600 mt-0.5">{shield.desc}</div>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-black uppercase text-white shrink-0 ${
                          active ? 'bg-[#139A74]' : 'bg-[#EA5B0C]'
                        }`}
                      >
                        {active ? 'ACTIF' : 'INACTIF'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Bright SOC Dashboard */}
            <div className="lg:col-span-7 bg-[#F4F8FB] border-2 border-slate-200 p-6 space-y-5">
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#005596]">
                  CENTRE DE CONTRÔLE SÉCURITÉ (SOC)
                </span>
                <span
                  className={`px-3 py-1 text-xs font-black uppercase text-white ${
                    cyberEval.protectionScore === 100
                      ? 'bg-[#139A74]'
                      : cyberEval.protectionScore >= 50
                      ? 'bg-[#009FE3]'
                      : 'bg-[#EA5B0C]'
                  }`}
                >
                  Risque : {cyberEval.riskLevel}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="bg-white p-4 border-2 border-slate-200">
                <div className="flex justify-between text-xs font-black uppercase mb-2">
                  <span>Niveau du bouclier de défense</span>
                  <span className="text-[#005596]">{cyberEval.protectionScore}%</span>
                </div>
                <div className="h-4 w-full bg-slate-100 border border-slate-300">
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${cyberEval.protectionScore}%`,
                      backgroundColor: cyberEval.protectionScore === 100 ? '#139A74' : '#EA5B0C',
                    }}
                  />
                </div>
              </div>

              {cyberEval.remainingVulnerabilities.length === 0 ? (
                <div className="bg-[#E8F7F2] border-2 border-[#139A74] p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#139A74] text-white flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase text-[#139A74]">
                      SYSTÈME 100% PROTÉGÉ CONTRE L’ATTAQUE
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1">
                      Les 4 mesures de sécurité sont actives. Aucune donnée n’est chiffrée par le pirate et l’hôpital continue de fonctionner normalement.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#FEF2EB] border-2 border-[#EA5B0C] p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-[#EA5B0C]">
                    <AlertTriangle className="w-4 h-4" />
                    Failles encore ouvertes ({cyberEval.remainingVulnerabilities.length}) :
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm font-bold text-slate-800">
                    {cyberEval.remainingVulnerabilities.map((v, i) => (
                      <li key={i} className="bg-white p-2.5 border-l-4 border-[#EA5B0C]">
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LAB 3: CLOUD AUTO-SCALING SIMULATOR */}
      {activeLab === 'cloud' && (
        <div className="bg-white border-2 border-[#005596]">
          <div className="bg-[#005596] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/90">
                ATELIER 3 · OPTION CLOUD COMPUTING
              </div>
              <h3 className="text-xl font-black uppercase">
                Comparer un serveur classique et le Cloud élastique
              </h3>
            </div>
            <div className="bg-white text-[#005596] px-4 py-1.5 font-black text-sm uppercase">
              {activeServers} serveur(s) actif(s)
            </div>
          </div>

          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#EAF6FC] border-l-4 border-[#005596] p-4">
                <div className="text-xs font-black uppercase text-[#005596] mb-1">Mission Cloud</div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Un site de résultats d’examens reçoit soudainement des centaines d’élèves. Augmentez le nombre de visiteurs et comparez un serveur fixe avec le Cloud.
                </p>
              </div>

              {/* Mode Selector */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setCloudMode('local')}
                  className={`p-3.5 border-2 text-left cursor-pointer transition-all ${
                    cloudMode === 'local'
                      ? 'bg-[#EA5B0C] border-[#EA5B0C] text-white'
                      : 'bg-[#F4F8FB] border-slate-300 text-slate-900'
                  }`}
                >
                  <div className="text-xs font-black uppercase">1 Seul Serveur Fixe</div>
                  <div className={`text-[11px] mt-1 ${cloudMode === 'local' ? 'text-white/90' : 'text-slate-600'}`}>
                    Capacité max : 250 visiteurs
                  </div>
                </button>

                <button
                  onClick={() => setCloudMode('cloud')}
                  className={`p-3.5 border-2 text-left cursor-pointer transition-all ${
                    cloudMode === 'cloud'
                      ? 'bg-[#009FE3] border-[#009FE3] text-white'
                      : 'bg-[#F4F8FB] border-slate-300 text-slate-900'
                  }`}
                >
                  <div className="text-xs font-black uppercase">Mode Cloud Auto-Scale</div>
                  <div className={`text-[11px] mt-1 ${cloudMode === 'cloud' ? 'text-white/90' : 'text-slate-600'}`}>
                    Ajoute des serveurs au besoin
                  </div>
                </button>
              </div>

              {/* Visitor Slider */}
              <div className="bg-[#F4F8FB] p-4 border-2 border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black uppercase text-slate-800">
                    Nombre de visiteurs simultanés :
                  </span>
                  <span className="bg-[#005596] text-white px-3 py-0.5 text-sm font-black">
                    {visitors} visiteurs
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={1000}
                  step={50}
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full accent-[#EA5B0C] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-bold text-slate-500 mt-1">
                  <span>50 (Calme)</span>
                  <span>500 (Pic moyen)</span>
                  <span>1000 (Jour des résultats)</span>
                </div>
              </div>
            </div>

            {/* Right Bright Cloud Cluster Stage */}
            <div className="lg:col-span-7 bg-[#F4F8FB] border-2 border-slate-200 p-6 space-y-5">
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#005596]">
                  ÉTAT DES SERVEURS EN TEMPS RÉEL
                </span>
                <span
                  className={`px-3 py-1 text-xs font-black uppercase text-white ${
                    isOverloaded ? 'bg-[#EA5B0C]' : 'bg-[#139A74]'
                  }`}
                >
                  {isOverloaded ? 'PANNE : SERVEUR SATURÉ !' : 'SITE RAPIDE ET DISPONIBLE'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5].map((srvNum) => {
                  const isRunning = srvNum <= activeServers;
                  return (
                    <div
                      key={srvNum}
                      className={`p-3.5 border-2 text-center ${
                        isRunning
                          ? isOverloaded
                            ? 'bg-[#FEF2EB] border-[#EA5B0C]'
                            : 'bg-white border-[#009FE3]'
                          : 'bg-slate-100 border-slate-200 opacity-50'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 mx-auto mb-2 flex items-center justify-center text-white ${
                          isRunning
                            ? isOverloaded
                              ? 'bg-[#EA5B0C]'
                              : 'bg-[#009FE3]'
                            : 'bg-slate-400'
                        }`}
                      >
                        <Server className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-black uppercase text-slate-900">
                        VM #{srvNum}
                      </div>
                      <div className="text-[10px] font-bold text-slate-600 mt-0.5">
                        {isRunning ? 'En ligne (250 max)' : 'En veille'}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={`p-4 border-l-8 ${
                  isOverloaded ? 'bg-[#FEF2EB] border-[#EA5B0C]' : 'bg-[#E8F7F2] border-[#139A74]'
                }`}
              >
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  {isOverloaded
                    ? `Attention : 1 seul serveur fixe ne peut gérer que 250 visiteurs. Avec ${visitors} visiteurs, le site tombe en panne ! Cliquez sur « Mode Cloud Auto-Scale » pour répartir la charge.`
                    : `Parfait : Avec ${activeServers} machine(s) virtuelle(s) active(s), votre architecture supporte jusqu'à ${cloudCapacity} visiteurs sans aucun ralentissement.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAB 4: IOT SMART OASIS SIMULATOR */}
      {activeLab === 'iot' && (
        <div className="bg-white border-2 border-[#139A74]">
          <div className="bg-[#139A74] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/90">
                ATELIER 4 · OPTION SYSTÈMES IOT (OBJETS CONNECTÉS)
              </div>
              <h3 className="text-xl font-black uppercase">
                Irrigation intelligente d’une palmeraie à Guelmim
              </h3>
            </div>
            <div className="bg-white text-[#139A74] px-4 py-1.5 font-black text-sm uppercase">
              Vanne d’eau : {iotEval.valveState}
            </div>
          </div>

          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#E8F7F2] border-l-4 border-[#139A74] p-4">
                <div className="text-xs font-black uppercase text-[#139A74] mb-1">Mission IoT</div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Faites varier l’humidité du sol et la température mesurées par les capteurs pour observer comment le système déclenche l’arrosage automatiquement.
                </p>
              </div>

              <div className="bg-[#F4F8FB] p-4 border-2 border-slate-200 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span className="flex items-center gap-1.5 text-[#009FE3]">
                      <Droplets className="w-4 h-4" /> Capteur d’humidité du sol
                    </span>
                    <span className="bg-[#009FE3] text-white px-2.5 py-0.5">
                      {iotState.soilMoisturePercent}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={80}
                    value={iotState.soilMoisturePercent}
                    onChange={(e) =>
                      setIotState((prev) => ({
                        ...prev,
                        soilMoisturePercent: Number(e.target.value),
                      }))
                    }
                    className="w-full accent-[#009FE3] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span className="flex items-center gap-1.5 text-[#EA5B0C]">
                      <Thermometer className="w-4 h-4" /> Capteur de température
                    </span>
                    <span className="bg-[#EA5B0C] text-white px-2.5 py-0.5">
                      {iotState.temperatureC} °C
                    </span>
                  </div>
                  <input
                    type="range"
                    min={18}
                    max={46}
                    value={iotState.temperatureC}
                    onChange={(e) =>
                      setIotState((prev) => ({
                        ...prev,
                        temperatureC: Number(e.target.value),
                      }))
                    }
                    className="w-full accent-[#EA5B0C] cursor-pointer"
                  />
                </div>

                <button
                  onClick={() =>
                    setIotState((prev) => ({ ...prev, autoValveEnabled: !prev.autoValveEnabled }))
                  }
                  className={`w-full py-3 px-4 border-2 font-black text-xs uppercase tracking-wider cursor-pointer transition-colors ${
                    iotState.autoValveEnabled
                      ? 'bg-[#139A74] border-[#139A74] text-white'
                      : 'bg-[#FEF2EB] border-[#EA5B0C] text-slate-900'
                  }`}
                >
                  Automatisation IoT : {iotState.autoValveEnabled ? 'ACTIVÉE' : 'DÉSACTIVÉE (MANUEL)'}
                </button>
              </div>
            </div>

            {/* Right Bright IoT Pipeline */}
            <div className="lg:col-span-7 bg-[#F4F8FB] border-2 border-slate-200 p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-4 border-2 border-[#009FE3]">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#009FE3] mb-1">
                    ÉTAPE 1 · CAPTEURS
                  </div>
                  <div className="text-sm font-black text-slate-900">
                    Sol : {iotState.soilMoisturePercent}% | Air : {iotState.temperatureC}°C
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Mesure physique dans la terre au pied des palmiers.
                  </p>
                </div>

                <div className="bg-white p-4 border-2 border-[#005596]">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#005596] mb-1">
                    ÉTAPE 2 · PASSERELLE LORA
                  </div>
                  <div className="text-sm font-black text-slate-900">
                    Analyse du seuil (&lt;35%)
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Transmission sans fil longue portée vers le serveur.
                  </p>
                </div>

                <div
                  className={`p-4 border-2 ${
                    iotEval.valveState === 'OUVERTE'
                      ? 'bg-[#E8F7F2] border-[#139A74]'
                      : 'bg-white border-[#EA5B0C]'
                  }`}
                >
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#139A74] mb-1">
                    ÉTAPE 3 · ELECTROVANNE
                  </div>
                  <div className="text-sm font-black text-slate-900">
                    Vanne {iotEval.valveState}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Économie d’eau estimée : {iotEval.waterSavedPercent}%
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 border-l-8 border-[#139A74]">
                <div className="text-xs font-black uppercase text-[#139A74] mb-1">
                  Décision du système IoT :
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-800">{iotEval.alertMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAB 5: CHAPITRE 3 - APTITUDES ET CONNAISSANCES (SAVOIR / SAVOIR-FAIRE / SAVOIR-ETRE + 6 APTITUDES) */}
      {activeLab === 'skills' && (
        <div className="bg-white border-2 border-[#66437A] space-y-8 p-6 lg:p-8">
          {/* Top Banner: Official Definition from Page 18-19 of PDF */}
          <div className="bg-[#66437A] text-white p-6">
            <div className="text-xs font-black uppercase tracking-widest text-white/80 mb-1">
              CHAPITRE 3 DU GUIDE M101 · APTITUDES ET CONNAISSANCES NÉCESSAIRES
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase mb-3">
              Qu’est-ce que la Compétence Professionnelle ?
            </h3>
            <p className="text-sm sm:text-base text-white/95 leading-relaxed border-l-4 border-[#84BD00] pl-4">
              « La compétence professionnelle est une combinaison de connaissances, de savoir-faire, d’expériences et de comportements s’exerçant dans un contexte précis. Elle se constate lors de sa mise en œuvre en situation professionnelle à partir de laquelle elle est validable. »
            </p>
          </div>

          {/* The 3 Pillars Diagram: Savoir + Savoir-Faire + Savoir-Être = Compétence Professionnelle */}
          <div>
            <h4 className="text-base font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#EA5B0C] inline-block" />
              Les 3 piliers qui forment votre Compétence Professionnelle (Schéma Officiel)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* SAVOIR */}
              <div className="border-2 border-[#009FE3] bg-[#EAF6FC] p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#009FE3] text-white px-3 py-1 text-xs font-black uppercase">
                    1. LE SAVOIR
                  </span>
                  <Brain className="w-6 h-6 text-[#009FE3]" />
                </div>
                <div className="text-base font-black text-[#005596] mb-1">
                  J’ai appris, j’ai compris → « JE SAIS »
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Ce sont les connaissances théoriques que vous apprenez : fonctionnement d’Internet, adressage IP, règles de sécurité, anglais technique.
                </p>
              </div>

              {/* SAVOIR-FAIRE */}
              <div className="border-2 border-[#EA5B0C] bg-[#FEF2EB] p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#EA5B0C] text-white px-3 py-1 text-xs font-black uppercase">
                    2. LE SAVOIR-FAIRE
                  </span>
                  <Wrench className="w-6 h-6 text-[#EA5B0C]" />
                </div>
                <div className="text-base font-black text-[#EA5B0C] mb-1">
                  J’applique, je pratique → « JE FAIS »
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  C’est la pratique concrète (Hard Skills) : installer Linux, configurer un routeur Cisco, créer un serveur Cloud ou brancher un capteur IoT.
                </p>
              </div>

              {/* SAVOIR-ÊTRE */}
              <div className="border-2 border-[#139A74] bg-[#E8F7F2] p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#139A74] text-white px-3 py-1 text-xs font-black uppercase">
                    3. LE SAVOIR-ÊTRE
                  </span>
                  <Users className="w-6 h-6 text-[#139A74]" />
                </div>
                <div className="text-base font-black text-[#139A74] mb-1">
                  J’adapte mon comportement → « JE SUIS »
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Ce sont vos qualités humaines et relationnelles (Soft Skills) : ponctualité, esprit d’équipe, écoute, calme face aux pannes et curiosité.
                </p>
              </div>
            </div>
          </div>

          {/* Compétences spécifiques vs Compétences transversales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-[#005596] bg-[#F4F8FB] p-5">
              <div className="bg-[#005596] text-white px-3 py-1 text-xs font-black uppercase inline-block mb-2">
                COMPÉTENCES SPÉCIFIQUES (HARD SKILLS · 70%)
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Ce sont les compétences techniques propres au métier de Technicien Spécialisé en Infrastructure Digitale : administration Windows/Linux, routage Cisco, pare-feu, virtualisation et Cloud.
              </p>
            </div>
            <div className="border-2 border-[#84BD00] bg-[#F4F8FB] p-5">
              <div className="bg-[#84BD00] text-slate-950 px-3 py-1 text-xs font-black uppercase inline-block mb-2">
                COMPÉTENCES TRANSVERSALES (SOFT SKILLS · 30%)
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Ce sont les compétences utiles dans toutes les situations professionnelles : communication en français et anglais, travail en équipe, résolution de problèmes et méthode.
              </p>
            </div>
          </div>

          {/* Les 6 Aptitudes indispensables du Guide M101 */}
          <div>
            <h4 className="text-base font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#009FE3] inline-block" />
              Les 6 Aptitudes Indispensables du Technicien (Chapitre 3 du Guide M101)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SIX_APTITUDES_GUIDE.map((apt, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 p-4"
                  style={{ borderColor: apt.color }}
                >
                  <div
                    className="text-white px-3 py-1 text-xs font-black uppercase inline-block mb-2"
                    style={{ backgroundColor: apt.color }}
                  >
                    0{idx + 1}. {apt.title}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {apt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Activity: Classify Savoir / Savoir-Faire / Savoir-Être */}
          <div className="bg-[#F4F8FB] border-2 border-slate-300 p-6">
            <h4 className="text-base font-black uppercase text-slate-900 mb-1">
              Activité Interactive : Classez chaque situation dans le bon pilier
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Cliquez sur « Savoir », « Savoir-Faire » ou « Savoir-Être » pour vérifier votre compréhension :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMPETENCE_QUIZ_ITEMS.map((item) => {
                const userPick = selectedCategories[item.id];
                const isCorrect = userPick === item.category;
                return (
                  <div key={item.id} className="bg-white border-2 border-slate-200 p-4 space-y-3">
                    <div className="text-xs sm:text-sm font-black text-slate-900">{item.title}</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Savoir (Connaissance)',
                        'Savoir-Faire (Hard Skill)',
                        'Savoir-Être (Soft Skill)',
                      ].map((cat) => (
                        <button
                          key={cat}
                          onClick={() =>
                            setSelectedCategories((prev) => ({ ...prev, [item.id]: cat }))
                          }
                          className={`px-2.5 py-1.5 text-[11px] font-black uppercase border cursor-pointer transition-colors ${
                            userPick === cat
                              ? cat === item.category
                                ? 'bg-[#139A74] border-[#139A74] text-white'
                                : 'bg-[#EA5B0C] border-[#EA5B0C] text-white'
                              : 'bg-[#F4F8FB] border-slate-300 text-slate-800 hover:border-[#009FE3]'
                          }`}
                        >
                          {cat.split(' (')[0]}
                        </button>
                      ))}
                    </div>
                    {userPick && (
                      <div
                        className={`p-2.5 text-xs font-bold border-l-4 ${
                          isCorrect
                            ? 'bg-[#E8F7F2] border-[#139A74] text-slate-900'
                            : 'bg-[#FEF2EB] border-[#EA5B0C] text-slate-900'
                        }`}
                      >
                        <div className="uppercase font-black mb-0.5">
                          {isCorrect ? `Exact ! (${item.transversalOrSpecific})` : `Essayez encore : c'est un ${item.category}`}
                        </div>
                        <div>{item.explanation}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 7 Qualities Sought by Employers */}
          <div>
            <h4 className="text-base font-black uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-[#139A74]" />
              Les 7 qualités comportementales les plus recherchées par les recruteurs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {EMPLOYER_SOFT_SKILLS.map((skill, idx) => (
                <div key={idx} className="bg-[#EAF6FC] border-2 border-[#009FE3] p-3.5">
                  <div className="text-xs font-black uppercase text-[#005596] mb-1">
                    {idx + 1}. {skill.title}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{skill.simpleDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
