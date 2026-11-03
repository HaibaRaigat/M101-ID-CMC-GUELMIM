export type OptionId =
  | 'systemes-reseaux'
  | 'cybersecurite'
  | 'cloud-computing'
  | 'iot'
  | 'sysres'
  | 'cyber'
  | 'cloud';

export type CanonicalOptionId = 'systemes-reseaux' | 'cybersecurite' | 'cloud-computing' | 'iot';

export interface CareerScore {
  id: OptionId;
  title: string;
  percentage: number;
  points: number;
  tagline: string;
  recommendedRole: string;
}

export interface CareerSimulationInput {
  answers: OptionId[];
  preferences?: Record<string, number>; // 1 to 5
}

const OPTION_META: Record<
   string,
  { title: string; tagline: string; recommendedRole: string }
> = {
  sysres: {
    title: 'Option Systèmes et Réseaux',
    tagline: 'Le Bâtisseur et Mécanicien des autoroutes de l’information',
    recommendedRole: 'Administrateur Systèmes & Réseaux / Ingénieur Support Réseau',
  },
  'systemes-reseaux': {
    title: 'Option Systèmes et Réseaux',
    tagline: 'Le Bâtisseur et Mécanicien des autoroutes de l’information',
    recommendedRole: 'Administrateur Systèmes & Réseaux / Ingénieur Support Réseau',
  },
  cyber: {
    title: 'Option Cybersécurité',
    tagline: 'Le Gardien Numérique contre les pirates et les pannes de sécurité',
    recommendedRole: 'Analyste Cybersécurité SOC / Technicien Sécurité des Données',
  },
  cybersecurite: {
    title: 'Option Cybersécurité',
    tagline: 'Le Gardien Numérique contre les pirates et les pannes de sécurité',
    recommendedRole: 'Analyste Cybersécurité SOC / Technicien Sécurité des Données',
  },
  cloud: {
    title: 'Option Cloud Computing',
    tagline: 'L’Architecte des grands serveurs virtuels accessibles partout',
    recommendedRole: 'Administrateur Cloud & Virtualisation / Spécialiste DevOps Junior',
  },
  'cloud-computing': {
    title: 'Option Cloud Computing',
    tagline: 'L’Architecte des grands serveurs virtuels accessibles partout',
    recommendedRole: 'Administrateur Cloud & Virtualisation / Spécialiste DevOps Junior',
  },
  iot: {
    title: 'Option IoT (Internet des Objets)',
    tagline: 'L’Inventeur qui connecte le monde réel (agriculture, mer, usine) à Internet',
    recommendedRole: 'Technicien Solutions IoT & Capteurs Connectés',
  },
};

export function calculateCareerMatch(input: CareerSimulationInput): CareerScore[] {
  const rawPoints: Record<'sysres' | 'cyber' | 'cloud' | 'iot', number> = {
    sysres: 0,
    cyber: 0,
    cloud: 0,
    iot: 0,
  };

  for (const ans of input.answers) {
    const key =
      ans === 'systemes-reseaux'
        ? 'sysres'
        : ans === 'cybersecurite'
        ? 'cyber'
        : ans === 'cloud-computing'
        ? 'cloud'
        : (ans as 'sysres' | 'cyber' | 'cloud' | 'iot');
    if (rawPoints[key] !== undefined) {
      rawPoints[key] += 15;
    }
  }

  if (input.preferences) {
    (Object.keys(rawPoints) as ('sysres' | 'cyber' | 'cloud' | 'iot')[]).forEach((key) => {
      const pref = input.preferences?.[key] ?? 3;
      rawPoints[key] += Math.max(1, Math.min(5, pref)) * 5;
    });
  } else {
    (Object.keys(rawPoints) as ('sysres' | 'cyber' | 'cloud' | 'iot')[]).forEach((key) => {
      rawPoints[key] += 10;
    });
  }

  const totalPoints = Object.values(rawPoints).reduce((acc, v) => acc + v, 0) || 1;

  const scores: CareerScore[] = (Object.keys(rawPoints) as ('sysres' | 'cyber' | 'cloud' | 'iot')[]).map((id) => ({
    id,
    title: OPTION_META[id].title,
    tagline: OPTION_META[id].tagline,
    recommendedRole: OPTION_META[id].recommendedRole,
    points: rawPoints[id],
    percentage: Math.round((rawPoints[id] / totalPoints) * 100),
  }));

  scores.sort((a, b) => b.points - a.points);
  return scores;
}

export interface CareerRecommendationResult {
  recommendedOption: CanonicalOptionId;
  percentages: Record<CanonicalOptionId, number>;
}

export function calculateCareerRecommendation(answers: OptionId[]): CareerRecommendationResult {
  const counts: Record<CanonicalOptionId, number> = {
    'systemes-reseaux': 0,
    cybersecurite: 0,
    'cloud-computing': 0,
    iot: 0,
  };

  for (const ans of answers) {
    if (ans === 'systemes-reseaux' || ans === 'sysres') counts['systemes-reseaux'] += 1;
    else if (ans === 'cybersecurite' || ans === 'cyber') counts.cybersecurite += 1;
    else if (ans === 'cloud-computing' || ans === 'cloud') counts['cloud-computing'] += 1;
    else if (ans === 'iot') counts.iot += 1;
  }

  const total = answers.length;
  const percentages: Record<CanonicalOptionId, number> = {
    'systemes-reseaux': total > 0 ? Math.round((counts['systemes-reseaux'] / total) * 100) : 25,
    cybersecurite: total > 0 ? Math.round((counts.cybersecurite / total) * 100) : 25,
    'cloud-computing': total > 0 ? Math.round((counts['cloud-computing'] / total) * 100) : 25,
    iot: total > 0 ? Math.round((counts.iot / total) * 100) : 25,
  };

  const ordered: CanonicalOptionId[] = [
    'systemes-reseaux',
    'cybersecurite',
    'cloud-computing',
    'iot',
  ];
  ordered.sort((a, b) => counts[b] - counts[a]);

  return {
    recommendedOption: ordered[0],
    percentages,
  };
}

export interface NetworkNodeState {
  fiberConnected: boolean;
  routerConfigured: boolean;
  switchPowered: boolean;
  wifiSecured: boolean;
}

export interface NetworkDiagnosticResult {
  status: 'NOMINAL' | 'DÉGRADÉ' | 'PANNE CRITIQUE';
  connectedUsers: number;
  bandwidthMbps: number;
  latencyMs: number;
  message: string;
}

export function evaluateNetworkTopology(state: NetworkNodeState): NetworkDiagnosticResult {
  if (!state.fiberConnected) {
    return {
      status: 'PANNE CRITIQUE',
      connectedUsers: 0,
      bandwidthMbps: 0,
      latencyMs: 999,
      message: 'Câble Fibre Optique débranché : aucun signal Internet n’arrive à la coopérative.',
    };
  }
  if (!state.routerConfigured) {
    return {
      status: 'PANNE CRITIQUE',
      connectedUsers: 0,
      bandwidthMbps: 0,
      latencyMs: 500,
      message: 'Le Routeur n’a pas d’adresse IP : les ordinateurs ne trouvent pas la sortie vers Internet.',
    };
  }
  if (!state.switchPowered) {
    return {
      status: 'DÉGRADÉ',
      connectedUsers: state.wifiSecured ? 10 : 5,
      bandwidthMbps: 150,
      latencyMs: 42,
      message: 'Le Switch câblé est éteint : seuls les téléphones en Wi-Fi fonctionnent, les PC de bureau sont coupés.',
    };
  }
  if (!state.wifiSecured) {
    return {
      status: 'DÉGRADÉ',
      connectedUsers: 22,
      bandwidthMbps: 400,
      latencyMs: 28,
      message: 'Le réseau câble marche, mais le Wi-Fi est ouvert aux inconnus et ralentit toute l’entreprise.',
    };
  }
  return {
    status: 'NOMINAL',
    connectedUsers: 30,
    bandwidthMbps: 1000,
    latencyMs: 8,
    message: 'Parfait ! Les 30 employés et le serveur sont connectés à 1 Gbps avec une sécurité optimale.',
  };
}

export function evaluateNetworkLab(state: NetworkNodeState): {
  score: number;
  isOnline: boolean;
  statusLabel: string;
  diagnosticMessage: string;
} {
  const diag = evaluateNetworkTopology(state);
  const activeCount = [
    state.fiberConnected,
    state.routerConfigured,
    state.switchPowered,
    state.wifiSecured,
  ].filter(Boolean).length;

  return {
    score: activeCount * 25,
    isOnline: diag.status === 'NOMINAL',
    statusLabel: diag.status,
    diagnosticMessage: diag.message,
  };
}

export interface CyberDefenseInput {
  firewallActive?: boolean;
  antivirusActive?: boolean;
  encryptionActive?: boolean;
  phishingTrainingActive?: boolean;
}

export interface CyberDefenseState {
  firewallEnabled: boolean;
  mfaEnabled: boolean;
  backupOffline: boolean;
  patchApplied: boolean;
}

export interface CyberDefenseResult {
  score: number;
  protectionScore: number;
  blockedAttacks: number;
  totalAttacks: number;
  status: 'PROTÉGÉ' | 'VULNÉRABLE' | 'DANGER CRITIQUE';
  riskLevel: string;
  summary: string;
  remainingVulnerabilities: string[];
}

export function evaluateCyberDefense(
  input: CyberDefenseInput & Partial<CyberDefenseState>
): CyberDefenseResult {
  const f1 = input.firewallActive ?? input.firewallEnabled ?? false;
  const f2 = input.antivirusActive ?? input.mfaEnabled ?? false;
  const f3 = input.encryptionActive ?? input.backupOffline ?? false;
  const f4 = input.phishingTrainingActive ?? input.patchApplied ?? false;

  const remainingVulnerabilities: string[] = [];
  if (!f1) remainingVulnerabilities.push('Pare-feu désactivé : les ports réseau sont ouverts aux intrusions.');
  if (!f2) remainingVulnerabilities.push('Double authentification (MFA) absente : un mot de passe volé suffit pour entrer.');
  if (!f3) remainingVulnerabilities.push('Aucune sauvegarde isolée : en cas de Ransomware, les dossiers sont perdus.');
  if (!f4) remainingVulnerabilities.push('Systèmes non mis à jour : les failles connues peuvent être exploitées.');

  const blocked = [f1, f2, f3, f4].filter(Boolean).length;
  const score = blocked * 25;
  let status: CyberDefenseResult['status'] = 'DANGER CRITIQUE';
  let summary = 'Attention : les pirates peuvent entrer et voler les données !';

  if (score === 100) {
    status = 'PROTÉGÉ';
    summary = 'Bouclier 100% actif : toutes les menaces sont bloquées.';
  } else if (score >= 50) {
    status = 'VULNÉRABLE';
    summary = `${blocked}/4 défenses actives. Certaines failles restent ouvertes aux pirates.`;
  }

  return {
    score,
    protectionScore: score,
    blockedAttacks: blocked,
    totalAttacks: 4,
    status,
    riskLevel: status,
    summary,
    remainingVulnerabilities,
  };
}

export interface OasisIoTInput {
  soilMoisturePercent: number;
  temperatureCelsius: number;
  triggerThresholdPercent: number;
  cloudConnected: boolean;
}

export interface IoTOasisState {
  soilMoisturePercent: number;
  temperatureC: number;
  autoValveEnabled: boolean;
}

export interface OasisIoTResult {
  pumpActive: boolean;
  waterSavedPercent: number;
  alertMessage: string;
  telemetryStatus: 'SYNCHRONISÉ' | 'HORS-LIGNE';
}

export function simulateOasisIoT(input: OasisIoTInput): OasisIoTResult {
  if (!input.cloudConnected) {
    return {
      pumpActive: false,
      waterSavedPercent: 0,
      alertMessage: 'Passerelle IoT déconnectée : le smartphone ne reçoit plus les mesures des palmiers.',
      telemetryStatus: 'HORS-LIGNE',
    };
  }

  const needsWater = input.soilMoisturePercent < input.triggerThresholdPercent;
  const highHeatBonus = input.temperatureCelsius > 35 ? 10 : 0;
  const waterSaved = Math.min(65, Math.max(20, 45 + highHeatBonus));

  return {
    pumpActive: needsWater,
    waterSavedPercent: waterSaved,
    alertMessage: needsWater
      ? `Sol sec (${input.soilMoisturePercent}% < ${input.triggerThresholdPercent}%) : ouverture automatique des vannes solaires !`
      : `Sol bien humide (${input.soilMoisturePercent}%) : vannes fermées, économie d'eau de ${waterSaved}% garantie.`,
    telemetryStatus: 'SYNCHRONISÉ',
  };
}

export function evaluateOasisIoT(state: IoTOasisState): {
  valveState: 'OUVERTE' | 'FERMÉE';
  waterSavedPercent: number;
  alertMessage: string;
} {
  const sim = simulateOasisIoT({
    soilMoisturePercent: state.soilMoisturePercent,
    temperatureCelsius: state.temperatureC,
    triggerThresholdPercent: 35,
    cloudConnected: state.autoValveEnabled,
  });

  return {
    valveState: sim.pumpActive ? 'OUVERTE' : 'FERMÉE',
    waterSavedPercent: sim.waterSavedPercent,
    alertMessage: sim.alertMessage,
  };
}

export interface StudentRightsInput {
  hasBac: boolean;
  livesOutsideCity: boolean;
  age: number;
  viaPasserelle: boolean;
  hasOtherHealthInsurance: boolean;
  ccScore: number; // /20
  efmScore: number; // /20
  effScore: number; // /20
  stageCompleted: boolean;
}

export interface StudentRightsResult {
  tsEligible: boolean;
  tsReason: string;
  bourseType: 'BOURSE COMPLÈTE' | 'DEMI-BOURSE' | 'NON ÉLIGIBLE';
  bourseTranches: string[];
  amoEligible: boolean;
  amoReason: string;
  finalAverage: number;
  diplomaGranted: boolean;
  diplomaStatus: string;
}

export function calculateStudentRights(input: StudentRightsInput): StudentRightsResult {
  const maxAge = input.viaPasserelle ? 33 : 30;
  const tsEligible = (input.hasBac || input.viaPasserelle) && input.age <= maxAge;
  const tsReason = tsEligible
    ? `Éligible au niveau Technicien Spécialisé (âge max ${maxAge} ans respecté).`
    : !input.hasBac && !input.viaPasserelle
      ? 'Nécessite le Baccalauréat ou le système de passerelles (qualification/technicien).'
      : `Âge limite dépassé (${maxAge} ans maximum). Les Formations Qualifiantes ou Cours du Soir restent ouverts !`;

  let bourseType: StudentRightsResult['bourseType'] = 'NON ÉLIGIBLE';
  let bourseTranches: string[] = [];

  if (input.hasBac && tsEligible) {
    if (input.livesOutsideCity) {
      bourseType = 'BOURSE COMPLÈTE';
      bourseTranches = ['1ère tranche : Octobre', '2ème tranche : Février', '3ème tranche : Mai'];
    } else {
      bourseType = 'DEMI-BOURSE';
      bourseTranches = ['1ère tranche : Octobre', '2ème tranche : Février', '3ème tranche : Mai'];
    }
  }

  const amoEligible = input.age <= 30 && !input.hasOtherHealthInsurance;
  const amoReason = amoEligible
    ? 'Couverture AMO Étudiant active (soins, médicaments, analyses, chirurgie).'
    : input.age > 30
      ? 'L’AMO étudiant de base est réservée aux stagiaires de 30 ans au maximum.'
      : 'Déjà couvert par une autre assurance maladie.';

  const rawAvg = input.ccScore * 0.2 + input.efmScore * 0.3 + input.effScore * 0.5;
  const finalAverage = Math.round(rawAvg * 100) / 100;
  const diplomaGranted = finalAverage >= 10 && input.stageCompleted;

  const diplomaStatus = diplomaGranted
    ? `Diplôme obtenu avec ${finalAverage.toFixed(2)}/20 (Arabe & Français) !`
    : !input.stageCompleted
      ? `Stage en entreprise obligatoire pour valider le diplôme (Moyenne actuelle : ${finalAverage.toFixed(2)}/20).`
      : `Moyenne insuffisante (${finalAverage.toFixed(2)}/20 < 10/20 exigé).`;

  return {
    tsEligible,
    tsReason,
    bourseType,
    bourseTranches,
    amoEligible,
    amoReason,
    finalAverage,
    diplomaGranted,
    diplomaStatus,
  };
}

export interface StudentProfileInput {
  hasBac: boolean;
  livesOutsideCenterCity: boolean;
  age: number;
  annualAverageOutOf20: number;
}

export function evaluateStudentRights(input: StudentProfileInput): {
  scholarshipStatus: string;
  scholarshipSchedule: string;
  amoEligible: boolean;
  amoDetails: string;
  passerelleStatus: string;
} {
  const base = calculateStudentRights({
    hasBac: input.hasBac,
    livesOutsideCity: input.livesOutsideCenterCity,
    age: input.age,
    viaPasserelle: !input.hasBac,
    hasOtherHealthInsurance: false,
    ccScore: input.annualAverageOutOf20,
    efmScore: input.annualAverageOutOf20,
    effScore: input.annualAverageOutOf20,
    stageCompleted: true,
  });

  const scholarshipSchedule =
    base.bourseType === 'BOURSE COMPLÈTE'
      ? 'Vous habitez hors de la ville du centre : vous avez droit à la Bourse Complète sur Minhaty.ma (versée en 3 tranches).'
      : base.bourseType === 'DEMI-BOURSE'
      ? 'Vous habitez dans la même ville que le centre : vous avez droit à la Demi-Bourse sur Minhaty.ma (versée en 3 tranches).'
      : 'La bourse Minhaty requiert le Baccalauréat et un âge inférieur ou égal à 30 ans.';

  const passerelleStatus =
    input.annualAverageOutOf20 >= 14
      ? `Moyenne excellente (${input.annualAverageOutOf20}/20 ≥ 10/20) : Diplôme validé + Éligible aux Passerelles vers Licence Pro et Écoles d’Ingénieurs !`
      : input.annualAverageOutOf20 >= 10
      ? `Moyenne validée (${input.annualAverageOutOf20}/20 ≥ 10/20) : Diplôme bilingue Arabe/Français obtenu !`
      : `Moyenne inférieure à 10/20 (${input.annualAverageOutOf20}/20) : Attention, il faut au moins 10/20 pour obtenir le diplôme.`;

  return {
    scholarshipStatus: base.bourseType,
    scholarshipSchedule,
    amoEligible: base.amoEligible,
    amoDetails: base.amoReason,
    passerelleStatus,
  };
}
