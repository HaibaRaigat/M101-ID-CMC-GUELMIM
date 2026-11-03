import React, { useState } from 'react';
import {
  BookOpen,
  GraduationCap,
  Laptop,
  HeartPulse,
  Coins,
  CheckSquare,
  Building2,
  GitBranch,
  Clock,
  Award,
  Layers,
  Target,
  Users,
  RefreshCw,
} from 'lucide-react';
import {
  TRONC_COMMUN_MODULES,
  OFPPT_PLATFORMS,
  PLAN_15_HEURES,
  OFPPT_TRAINING_TYPES,
  OFPPT_SIX_LEVELS,
} from '../data/courseData';
import { evaluateStudentRights, StudentProfileInput } from '../utils/courseLogic';

export const ProgramAndOFPPT: React.FC = () => {
  const [moduleFilter, setModuleFilter] = useState<'all' | 'technique' | 'transversal'>('all');
  const [activeTrainingType, setActiveTrainingType] = useState<string>('initiale');

  const [studentInput, setStudentInput] = useState<StudentProfileInput>({
    hasBac: true,
    livesOutsideCenterCity: true,
    age: 20,
    annualAverageOutOf20: 13.5,
  });

  const rightsResult = evaluateStudentRights(studentInput);

  const filteredModules =
    moduleFilter === 'all'
      ? TRONC_COMMUN_MODULES
      : TRONC_COMMUN_MODULES.filter((m) => m.type === moduleFilter);

  const selectedTrainingType =
    OFPPT_TRAINING_TYPES.find((t) => t.id === activeTrainingType) || OFPPT_TRAINING_TYPES[0];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* =====================================================================
          PARTIE A : CHAPITRE 4 - PROGRAMME DE FORMATION, PÉDAGOGIE ACTIVE & ÉVALUATION
         ===================================================================== */}
      <section id="programme-tronc-commun" className="scroll-mt-20 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#005596] text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-3">
            <BookOpen className="w-4 h-4" />
            CHAPITRE 4 · PROGRAMME DE FORMATION (2 ANS : TRONC COMMUN + OPTION)
          </div>
          <div className="border-l-8 border-[#EA5B0C] pl-5 py-1">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Organisation des <span className="text-[#EA5B0C]">2 Années</span> & Pédagogie Active
            </h2>
            <p className="text-slate-600 text-base mt-1 max-w-3xl">
              La formation s’étale sur deux années : une 1ère année en Tronc Commun pour maîtriser toutes les bases, suivie d’une 2ème année de spécialisation dans l’une des 4 options.
            </p>
          </div>
        </div>

        {/* 2-Year Structure + Pédagogie Active + Évaluation Square Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Pédagogie Active (Définition + 4 Intérêts du Guide M101 p.25-26) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#009FE3]">
            <div className="bg-[#009FE3] text-white px-6 py-3.5 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                LA PÉDAGOGIE ACTIVE : VOUS ÊTES ACTEUR DE VOTRE APPRENTISSAGE
              </span>
              <Users className="w-5 h-5" />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#EAF6FC] p-4 border-l-4 border-[#005596]">
                La pédagogie active désigne un ensemble de méthodes qui relèvent de l’apprentissage expérientiel, c’est-à-dire <strong>« apprendre en faisant »</strong>. Elle implique le stagiaire dans des situations réelles ou fictives pour qu’il puisse utiliser ses compétences et les faire évoluer au cours de la formation.
              </p>

              <div className="text-xs font-black uppercase text-[#005596] tracking-wider">
                Les 4 grands intérêts de la pédagogie active (Guide M101) :
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#F4F8FB] border-2 border-[#009FE3] p-3.5">
                  <div className="text-xs font-black uppercase text-[#005596] mb-1">
                    1. Apprentissage Expérientiel
                  </div>
                  <p className="text-xs text-slate-700">
                    Apprendre dans l’action en manipulant directement les équipements, serveurs et logiciels.
                  </p>
                </div>

                <div className="bg-[#FEF2EB] border-2 border-[#EA5B0C] p-3.5">
                  <div className="text-xs font-black uppercase text-[#EA5B0C] mb-1">
                    2. Apprentissage Collaboratif
                  </div>
                  <p className="text-xs text-slate-700">
                    Travailler en groupe, partager ses idées et construire des solutions ensemble comme en entreprise.
                  </p>
                </div>

                <div className="bg-[#E8F7F2] border-2 border-[#139A74] p-3.5">
                  <div className="text-xs font-black uppercase text-[#139A74] mb-1">
                    3. Apprentissage par Problème
                  </div>
                  <p className="text-xs text-slate-700">
                    Analyser une panne réseau ou une attaque de sécurité réelle et chercher comment la résoudre.
                  </p>
                </div>

                <div className="bg-[#F4F8FB] border-2 border-[#66437A] p-3.5">
                  <div className="text-xs font-black uppercase text-[#66437A] mb-1">
                    4. Apprentissage par Projet
                  </div>
                  <p className="text-xs text-slate-700">
                    Concevoir et réaliser un projet technique complet de bout en bout.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Système d'Évaluation (Guide M101 p.27) */}
          <div className="lg:col-span-5 bg-white border-2 border-[#EA5B0C]">
            <div className="bg-[#EA5B0C] text-white px-6 py-3.5 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                COMMENT ÊTES-VOUS ÉVALUÉ ?
              </span>
              <Award className="w-5 h-5" />
            </div>
            <div className="p-6 space-y-3">
              <p className="text-xs text-slate-600 mb-2">
                Pour vérifier vos acquis tout au long des 2 années, le règlement prévoit 4 types d’évaluations :
              </p>

              {[
                {
                  code: '01. CC',
                  title: 'Contrôles Continus',
                  desc: 'Évaluations régulières théoriques et pratiques durant chaque module.',
                  color: '#009FE3',
                },
                {
                  code: '02. EFM',
                  title: 'Examens de Fin de Module',
                  desc: 'Examen organisé à la fin de chaque module pour valider la compétence visée.',
                  color: '#005596',
                },
                {
                  code: '03. STAGE',
                  title: 'Stage en Entreprise',
                  desc: 'Immersion en milieu professionnel avec rédaction d’un rapport et soutenance.',
                  color: '#139A74',
                },
                {
                  code: '04. EFF',
                  title: 'Examen de Fin de Formation',
                  desc: 'Examen national final à la fin de la 2ème année pour l’obtention du diplôme.',
                  color: '#EA5B0C',
                },
              ].map((ev, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#F4F8FB] border border-slate-200 p-3">
                  <span
                    className="px-2.5 py-1 text-xs font-black text-white shrink-0"
                    style={{ backgroundColor: ev.color }}
                  >
                    {ev.code}
                  </span>
                  <div>
                    <div className="text-xs font-black uppercase text-slate-900">{ev.title}</div>
                    <p className="text-xs text-slate-600 mt-0.5">{ev.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Complete 15 Modules Table of 1st Year Tronc Commun */}
        <div className="bg-white border-2 border-[#005596]">
          <div className="bg-[#005596] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-[#84BD00]">
                TABLEAU OFFICIEL DU GUIDE M101 (PAGE 28)
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase">
                Les 15 Modules de la 1ère Année (Tronc Commun)
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all' as const, label: 'Tous (15)' },
                { id: 'technique' as const, label: 'Modules Techniques (8)' },
                { id: 'transversal' as const, label: 'Langues & Soft Skills (7)' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setModuleFilter(btn.id)}
                  className={`px-3 py-1.5 text-xs font-black uppercase transition-colors cursor-pointer ${
                    moduleFilter === btn.id
                      ? 'bg-[#EA5B0C] text-white'
                      : 'bg-white text-[#005596] hover:bg-[#EAF6FC]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredModules.map((mod) => {
              const isM101 = mod.code === 'M101';
              const isTech = mod.type === 'technique';
              return (
                <div
                  key={mod.code}
                  className={`border-2 p-4 flex flex-col justify-between ${
                    isM101
                      ? 'bg-[#FEF2EB] border-[#EA5B0C]'
                      : isTech
                      ? 'bg-white border-[#009FE3]'
                      : 'bg-[#F4F8FB] border-[#139A74]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`px-2.5 py-0.5 text-xs font-black uppercase text-white ${
                          isM101 ? 'bg-[#EA5B0C]' : isTech ? 'bg-[#009FE3]' : 'bg-[#139A74]'
                        }`}
                      >
                        {mod.code} {isM101 ? '· CE COURS' : ''}
                      </span>
                      <span className="text-xs font-black text-slate-800 bg-slate-100 px-2.5 py-0.5 border border-slate-300">
                        {mod.hours} Heures
                      </span>
                    </div>
                    <h4 className="text-sm font-black text-slate-900 uppercase leading-snug mb-1.5">
                      {mod.title}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">{mod.simpleExplanation}</p>
                    <p className="text-[11px] font-bold text-[#005596] mt-2 bg-[#EAF6FC] p-2 border-l-2 border-[#009FE3]">
                      Exemple : {mod.concreteExample}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-black uppercase text-slate-500">
                    <span>{isTech ? 'Compétence Spécifique' : 'Compétence Transversale'}</span>
                    <span>1ère Année</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          PARTIE B : CHAPITRES 5 À 14 - PRÉSENTATION DE L'OFPPT, HYBRIDE, BOURSE & AMO
         ===================================================================== */}
      <section id="ofppt-systeme" className="scroll-mt-20 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#EA5B0C] text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-3">
            <Building2 className="w-4 h-4" />
            CHAPITRES 5 À 14 · CONNAÎTRE L’OFPPT, SES NIVEAUX, SES PLATEFORMES ET VOS DROITS
          </div>
          <div className="border-l-8 border-[#005596] pl-5 py-1">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Tout le Système <span className="text-[#005596]">OFPPT</span> expliqué simplement
            </h2>
            <p className="text-slate-600 text-base mt-1 max-w-3xl">
              Retrouvez ici les chapitres 5 à 14 du module M101 : missions de l’OFPPT, types et niveaux de formation, passerelles, diplôme, classe inversée, plateformes en ligne, bourse Minhaty et couverture médicale AMO.
            </p>
          </div>
        </div>

        {/* Chapitres 5 & 6 : Présentation de l'OFPPT (1974) + Ses 3 Objectifs Stratégiques */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-[#005596] text-white p-6 border-2 border-[#005596] flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#EA5B0C] text-white px-3 py-1 text-xs font-black uppercase mb-3">
                CHAPITRE 5 · PRÉSENTATION DE L’OFPPT
              </div>
              <h3 className="text-xl font-black uppercase mb-3">
                Créé en 1974 : 1er opérateur public de formation professionnelle au Maroc
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                L’Office de la Formation Professionnelle et de la Promotion du Travail (OFPPT) assure des formations dédiées aux jeunes pour favoriser leur insertion professionnelle et énergétique, ainsi qu’aux entreprises et aux salariés pour développer leurs compétences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-white/20">
              <div className="bg-white/10 p-3">
                <div className="text-2xl font-black text-[#84BD00]">1974</div>
                <div className="text-xs font-bold uppercase">Année de création</div>
              </div>
              <div className="bg-white/10 p-3">
                <div className="text-2xl font-black text-[#009FE3]">6 Niveaux</div>
                <div className="text-xs font-bold uppercase">De formation offerts</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border-2 border-[#009FE3] p-6">
            <div className="inline-flex items-center gap-2 bg-[#009FE3] text-white px-3 py-1 text-xs font-black uppercase mb-4">
              <Target className="w-4 h-4" />
              CHAPITRE 6 · LES 3 OBJECTIFS MAJEURS DE L’OFPPT
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#EAF6FC] border-2 border-[#009FE3] p-4">
                <div className="w-8 h-8 bg-[#009FE3] text-white font-black text-sm flex items-center justify-center mb-2">
                  01
                </div>
                <h4 className="text-xs font-black uppercase text-[#005596] mb-1">
                  Répondre aux besoins des entreprises
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Former des profils qualifiés qui correspondent exactement aux métiers demandés par les employeurs et favoriser leur compétitivité.
                </p>
              </div>

              <div className="bg-[#FEF2EB] border-2 border-[#EA5B0C] p-4">
                <div className="w-8 h-8 bg-[#EA5B0C] text-white font-black text-sm flex items-center justify-center mb-2">
                  02
                </div>
                <h4 className="text-xs font-black uppercase text-[#EA5B0C] mb-1">
                  Développer les compétences des salariés
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Accompagner l’évolution technologique par des formations continues et des cours du soir pour les employés.
                </p>
              </div>

              <div className="bg-[#E8F7F2] border-2 border-[#139A74] p-4">
                <div className="w-8 h-8 bg-[#139A74] text-white font-black text-sm flex items-center justify-center mb-2">
                  03
                </div>
                <h4 className="text-xs font-black uppercase text-[#139A74] mb-1">
                  Favoriser l’employabilité des jeunes
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Accompagner chaque stagiaire vers l’emploi salarié, la création de sa propre entreprise ou la poursuite d’études.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chapitre 7 : Les 3 Types de Formation (Initiale, Qualifiante, Cours du soir) */}
        <div className="bg-white border-2 border-[#EA5B0C]">
          <div className="bg-[#EA5B0C] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/90">
                CHAPITRE 7 · TYPES DE FORMATION À L’OFPPT (PAGES 32 À 35 DU GUIDE)
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase">
                Formation Initiale, Formation Qualifiante & Cours du Soir
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {OFPPT_TRAINING_TYPES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTrainingType(t.id)}
                  className={`px-3 py-1.5 text-xs font-black uppercase transition-colors cursor-pointer ${
                    activeTrainingType === t.id
                      ? 'bg-white text-[#EA5B0C]'
                      : 'bg-black/20 text-white hover:bg-black/30'
                  }`}
                >
                  {t.title}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div
                className="text-white px-3 py-1 text-xs font-black uppercase inline-block"
                style={{ backgroundColor: selectedTrainingType.color }}
              >
                Catégorie : {selectedTrainingType.title}
              </div>
              <h4 className="text-xl font-black text-slate-900 uppercase">
                {selectedTrainingType.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#F4F8FB] p-4 border-l-4 border-[#EA5B0C]">
                {selectedTrainingType.description}
              </p>
              <div className="bg-[#EAF6FC] p-3.5 border border-[#009FE3]">
                <div className="text-xs font-black uppercase text-[#005596]">Titre délivré :</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                  {selectedTrainingType.id === 'qualifiante'
                    ? 'Certificat de Formation Qualifiante (3 à 9 mois)'
                    : 'Diplôme Officiel de Formation Professionnelle (2 ans)'}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Exemples officiels de filières pour « {selectedTrainingType.title} » (Guide M101) :
              </div>
              <div className="border-2 border-slate-300 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#005596] text-white text-xs uppercase font-black">
                      <th className="p-3 border-r border-white/20">Secteur</th>
                      <th className="p-3 border-r border-white/20">Niveau</th>
                      <th className="p-3 border-r border-white/20">Type</th>
                      <th className="p-3">Filière</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {selectedTrainingType.examples.map((ex, i) => (
                      <tr key={i} className="border-t border-slate-200 odd:bg-white even:bg-[#F4F8FB]">
                        <td className="p-3 font-black text-[#EA5B0C]">Digital & IA</td>
                        <td className="p-3 font-bold text-slate-700">{ex.niveau}</td>
                        <td className="p-3 text-slate-600">{ex.type}</td>
                        <td className="p-3 font-bold text-slate-900">{ex.filiere}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Chapitre 8 : Les 6 Niveaux de Formation de l'OFPPT */}
        <div className="bg-white border-2 border-[#005596] p-6">
          <div className="inline-flex items-center gap-2 bg-[#005596] text-white px-3 py-1 text-xs font-black uppercase mb-4">
            <Layers className="w-4 h-4" />
            CHAPITRE 8 · LES 6 NIVEAUX DE FORMATION À L’OFPPT (PAGE 36 DU GUIDE)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFPPT_SIX_LEVELS.map((lvl, idx) => (
              <div
                key={idx}
                className="border-2 p-4 flex flex-col justify-between bg-[#F4F8FB]"
                style={{ borderColor: lvl.color }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="text-white px-2.5 py-0.5 text-xs font-black uppercase"
                      style={{ backgroundColor: lvl.color }}
                    >
                      {lvl.level}
                    </span>
                    <span className="text-[11px] font-black text-slate-700 bg-white px-2 py-0.5 border border-slate-300">
                      Durée : {lvl.duration}
                    </span>
                  </div>
                  <div className="text-xs text-slate-800 leading-relaxed mt-2">
                    <strong className="uppercase text-[#005596]">Conditions d’accès : </strong>
                    {lvl.access}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chapitres 9 & 10 : Système des Passerelles & Sanction de Formation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Chapitre 9: Passerelles */}
          <div className="lg:col-span-7 bg-white border-2 border-[#139A74] p-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#139A74] text-white px-3 py-1 text-xs font-black uppercase">
              <GitBranch className="w-4 h-4" />
              CHAPITRE 9 · LE SYSTÈME DES PASSERELLES (INTERNES & EXTERNES)
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Le système des passerelles récompense les meilleurs stagiaires en leur permettant de gravir les échelons d’un niveau à un autre (jusqu’à 33 ans maximum) :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#E8F7F2] border-2 border-[#139A74] p-4">
                <div className="text-xs font-black uppercase text-[#139A74] mb-1">
                  1. Passerelles Internes (OFPPT)
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Les meilleurs lauréats du niveau <strong>Spécialisation</strong> accèdent au niveau <strong>Qualification</strong>, puis au niveau <strong>Technicien</strong>, et enfin au niveau <strong>Technicien Spécialisé</strong>.
                </p>
              </div>

              <div className="bg-[#EAF6FC] border-2 border-[#009FE3] p-4">
                <div className="text-xs font-black uppercase text-[#005596] mb-1">
                  2. Passerelles Externes (Études Supérieures)
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Avec votre diplôme de <strong>Technicien Spécialisé</strong>, vous pouvez poursuivre vos études en <strong>Licence Professionnelle</strong> à l’université ou en <strong>École Supérieure / Ingénierie</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Chapitre 10: Sanction de formation */}
          <div className="lg:col-span-5 bg-white border-2 border-[#66437A] p-6 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#66437A] text-white px-3 py-1 text-xs font-black uppercase">
              <GraduationCap className="w-4 h-4" />
              CHAPITRE 10 · SANCTION DE LA FORMATION
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="bg-[#F4F8FB] p-3 border-l-4 border-[#66437A]">
                <strong>Diplôme bilingue :</strong> La formation est sanctionnée par un diplôme établi en <strong>arabe et en français</strong> (ou un certificat pour les formations qualifiantes).
              </li>
              <li className="bg-[#E8F7F2] p-3 border-l-4 border-[#139A74]">
                <strong>Condition de réussite :</strong> Obtenir une moyenne générale supérieure ou égale à <strong>10/20</strong> aux examens.
              </li>
              <li className="bg-[#FEF2EB] p-3 border-l-4 border-[#EA5B0C]">
                <strong>En cas d’interruption :</strong> Les stagiaires qui arrêtent leur formation en cours d’année reçoivent une <strong>attestation d’arrêt de formation</strong> précisant la durée de présence.
              </li>
            </ul>
          </div>
        </div>

        {/* Chapitres 11 & 12 : Mode de Formation Hybride, Classe Inversée & les 4 Plateformes Digitales */}
        <div className="bg-white border-2 border-[#009FE3]">
          <div className="bg-[#009FE3] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/90">
                CHAPITRES 11 & 12 · MODE DE FORMATION HYBRIDE, CLASSE INVERSÉE & PLATEFORMES
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase">
                Comment fonctionne l’apprentissage Hybride et la Classe Inversée ?
              </h3>
            </div>
            <RefreshCw className="w-6 h-6" />
          </div>

          <div className="p-6 space-y-6">
            {/* Mode Hybride : Présentiel + Distanciel Synchrone / Asynchrone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#FEF2EB] border-2 border-[#EA5B0C] p-4">
                <div className="bg-[#EA5B0C] text-white px-2.5 py-0.5 text-xs font-black uppercase inline-block mb-2">
                  1. COURS EN PRÉSENTIEL (AU CENTRE)
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Travaux pratiques en laboratoire avec votre formateur : câblage réseau, serveurs, ateliers de groupe et mises en situation.
                </p>
              </div>

              <div className="bg-[#EAF6FC] border-2 border-[#009FE3] p-4">
                <div className="bg-[#009FE3] text-white px-2.5 py-0.5 text-xs font-black uppercase inline-block mb-2">
                  2. DISTANCIEL SYNCHRONE (EN DIRECT)
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Classes virtuelles en temps réel avec votre formateur sur <strong>Microsoft Teams</strong> pour poser vos questions et corriger les exercices.
                </p>
              </div>

              <div className="bg-[#E8F7F2] border-2 border-[#139A74] p-4">
                <div className="bg-[#139A74] text-white px-2.5 py-0.5 text-xs font-black uppercase inline-block mb-2">
                  3. DISTANCIEL ASYNCHRONE (AUTONOME)
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Consultation à votre rythme des cours, vidéos, quiz et livres numériques sur les plateformes en ligne de l’OFPPT.
                </p>
              </div>
            </div>

            {/* Principe de la Classe Inversée (Pages 44-45 du Guide M101) */}
            <div className="bg-[#F4F8FB] border-2 border-[#005596] p-5">
              <div className="text-xs font-black uppercase text-[#005596] mb-3">
                LE PRINCIPE DE LA CLASSE INVERSÉE (PAR RAPPORT À LA CLASSE TRADITIONNELLE) :
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border-l-4 border-[#009FE3]">
                  <div className="text-xs font-black uppercase text-[#009FE3] mb-1">
                    ÉTAPE A · AVANT LA SÉANCE (À DISTANCE SUR PLATEFORME)
                  </div>
                  <p className="text-xs text-slate-700">
                    Vous découvrez les notions théoriques chez vous ou à la médiathèque grâce aux vidéos et supports numériques sur OFPPT Academy.
                  </p>
                </div>
                <div className="bg-white p-4 border-l-4 border-[#EA5B0C]">
                  <div className="text-xs font-black uppercase text-[#EA5B0C] mb-1">
                    ÉTAPE B · PENDANT LA SÉANCE (EN CLASSE AVEC LE FORMATEUR)
                  </div>
                  <p className="text-xs text-slate-700">
                    Le temps en classe est consacré à 100% à la pratique, aux projets d’équipe, aux études de cas et à l’accompagnement personnalisé.
                  </p>
                </div>
              </div>
            </div>

            {/* Les 4 Plateformes de Formation (Chapitre 12 - Pages 47 à 56) */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h4 className="text-sm font-black uppercase text-slate-900 flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-[#EA5B0C]" />
                  Les 4 Plateformes E-Learning gratuites avec votre compte @ofppt-edu.ma :
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {OFPPT_PLATFORMS.map((plat, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-2 p-4 flex flex-col justify-between"
                    style={{ borderColor: plat.color }}
                  >
                    <div>
                      <div
                        className="text-white px-2.5 py-1 text-[11px] font-black uppercase inline-block mb-2"
                        style={{ backgroundColor: plat.color }}
                      >
                        {plat.role}
                      </div>
                      <h5 className="text-sm font-black text-slate-900 uppercase mb-1.5">
                        {plat.name}
                      </h5>
                      <p className="text-xs text-slate-700 leading-relaxed">{plat.description}</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] font-black text-[#EA5B0C] truncate">
                      Compte : stagiaire@ofppt-edu.ma
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chapitres 13 & 14 : Simulateur Bourse (Minhaty) & Assurance Maladie Obligatoire (AMO) */}
        <div className="bg-white border-2 border-[#139A74]">
          <div className="bg-[#139A74] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/90">
                CHAPITRES 13 & 14 · SIMULATEUR BOURSE D’ÉTUDES (MINHATY) & COUVERTURE MÉDICALE (AMO)
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase">
                Vérifiez vos droits à la Bourse, à l’AMO et aux Passerelles
              </h3>
            </div>
            <Coins className="w-6 h-6" />
          </div>

          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Interactive Student Parameters */}
            <div className="lg:col-span-5 space-y-4 bg-[#F4F8FB] p-5 border-2 border-slate-200">
              <div className="text-xs font-black uppercase text-[#005596]">
                Renseignez votre situation personnelle :
              </div>

              <div className="space-y-3">
                <button
                  onClick={() =>
                    setStudentInput((prev) => ({ ...prev, hasBac: !prev.hasBac }))
                  }
                  className={`w-full p-3 border-2 text-left flex items-center justify-between cursor-pointer ${
                    studentInput.hasBac
                      ? 'bg-[#E8F7F2] border-[#139A74]'
                      : 'bg-white border-slate-300'
                  }`}
                >
                  <span className="text-xs font-black uppercase text-slate-900">
                    1. Titulaire du Baccalauréat (Niveau TS)
                  </span>
                  <span
                    className={`px-2.5 py-0.5 text-xs font-black text-white ${
                      studentInput.hasBac ? 'bg-[#139A74]' : 'bg-slate-500'
                    }`}
                  >
                    {studentInput.hasBac ? 'OUI' : 'NON'}
                  </span>
                </button>

                <button
                  onClick={() =>
                    setStudentInput((prev) => ({
                      ...prev,
                      livesOutsideCenterCity: !prev.livesOutsideCenterCity,
                    }))
                  }
                  className={`w-full p-3 border-2 text-left flex items-center justify-between cursor-pointer ${
                    studentInput.livesOutsideCenterCity
                      ? 'bg-[#FEF2EB] border-[#EA5B0C]'
                      : 'bg-[#EAF6FC] border-[#009FE3]'
                  }`}
                >
                  <span className="text-xs font-black uppercase text-slate-900">
                    2. Lieu de résidence des parents
                  </span>
                  <span
                    className={`px-2.5 py-0.5 text-xs font-black text-white ${
                      studentInput.livesOutsideCenterCity ? 'bg-[#EA5B0C]' : 'bg-[#009FE3]'
                    }`}
                  >
                    {studentInput.livesOutsideCenterCity ? 'Hors de la ville' : 'Même ville'}
                  </span>
                </button>

                <div className="bg-white p-3 border border-slate-300">
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span>3. Votre âge actuel :</span>
                    <span className="text-[#005596]">{studentInput.age} ans</span>
                  </div>
                  <input
                    type="range"
                    min={17}
                    max={34}
                    value={studentInput.age}
                    onChange={(e) =>
                      setStudentInput((prev) => ({ ...prev, age: Number(e.target.value) }))
                    }
                    className="w-full accent-[#005596] cursor-pointer"
                  />
                </div>

                <div className="bg-white p-3 border border-slate-300">
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span>4. Moyenne annuelle simulée :</span>
                    <span className="text-[#139A74]">{studentInput.annualAverageOutOf20} / 20</span>
                  </div>
                  <input
                    type="range"
                    min={7}
                    max={19}
                    step={0.5}
                    value={studentInput.annualAverageOutOf20}
                    onChange={(e) =>
                      setStudentInput((prev) => ({
                        ...prev,
                        annualAverageOutOf20: Number(e.target.value),
                      }))
                    }
                    className="w-full accent-[#139A74] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right: Bright Square Result Cards for Chapitre 13 (Bourse) & Chapitre 14 (AMO) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bourse Card (Chapitre 13 - Pages 57 à 59) */}
              <div className="bg-[#FEF2EB] border-2 border-[#EA5B0C] p-5 flex flex-col justify-between">
                <div>
                  <div className="bg-[#EA5B0C] text-white px-3 py-1 text-xs font-black uppercase inline-block mb-2">
                    CHAPITRE 13 · LA BOURSE (MINHATY.MA)
                  </div>
                  <div className="text-base font-black text-slate-900 uppercase mb-2">
                    {rightsResult.scholarshipStatus}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    {rightsResult.scholarshipSchedule}
                  </p>
                </div>
                <div className="bg-white p-3 border border-[#EA5B0C]/30 text-[11px] text-slate-700 space-y-1">
                  <div className="font-black text-[#EA5B0C] uppercase">
                    Calendrier des 3 tranches annuelles :
                  </div>
                  <div>• 1ère tranche : Mi-Octobre</div>
                  <div>• 2ème tranche : Mi-Février</div>
                  <div>• 3ème tranche : Mi-Mai</div>
                </div>
              </div>

              {/* AMO Card (Chapitre 14 - Pages 60 à 62) */}
              <div className="bg-[#EAF6FC] border-2 border-[#009FE3] p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#009FE3] text-white px-3 py-1 text-xs font-black uppercase">
                      CHAPITRE 14 · ASSURANCE AMO
                    </span>
                    <HeartPulse className="w-5 h-5 text-[#009FE3]" />
                  </div>
                  <div className="text-base font-black text-[#005596] uppercase mb-2">
                    {rightsResult.amoEligible
                      ? 'Éligible à l’AMO Étudiant (CNSS)'
                      : 'Plus de 30 ans (Régime non étudiant)'}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    {rightsResult.amoDetails}
                  </p>
                </div>
                <div className="bg-white p-3 border border-[#009FE3]/30 text-[11px] text-slate-700 space-y-1">
                  <div className="font-black text-[#005596] uppercase">Conditions officielles :</div>
                  <div>• Être inscrit dans un établissement OFPPT</div>
                  <div>• Âge ne dépassant pas 30 ans au maximum</div>
                  <div>• Remboursement consultations, médicaments et hospitalisation</div>
                </div>
              </div>

              {/* Validation & Passerelles Card */}
              <div className="sm:col-span-2 bg-[#E8F7F2] border-2 border-[#139A74] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#139A74] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase text-[#139A74]">
                      RÉSULTAT DE FIN D’ANNÉE & PASSERELLES :
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                      {rightsResult.passerelleStatus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan des 15 Heures du Module M101 */}
        <div className="bg-white border-2 border-slate-300 p-6">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#EA5B0C] mb-2">
            <Clock className="w-4 h-4" />
            ORGANISATION HORAIRE DU MODULE M101 (15 HEURES AU TOTAL)
          </div>
          <h3 className="text-lg font-black uppercase text-slate-900 mb-4">
            Comment se répartissent vos 15 heures dans ce module d’introduction ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {PLAN_15_HEURES.map((seq) => (
              <div
                key={seq.id}
                className="bg-[#F4F8FB] border-2 p-4 flex flex-col justify-between"
                style={{ borderColor: seq.color }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-white px-2.5 py-0.5 text-xs font-black uppercase"
                      style={{ backgroundColor: seq.color }}
                    >
                      {seq.hours}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black uppercase text-slate-900 mb-1.5">
                    {seq.title}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    {seq.pedagogicalGoal}
                  </p>
                </div>
                <div className="text-[11px] font-black text-[#139A74] bg-[#E8F7F2] p-2 border-l-4 border-[#139A74]">
                  Livrable : {seq.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
