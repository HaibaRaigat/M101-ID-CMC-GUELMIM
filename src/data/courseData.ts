import { OptionId } from '../utils/courseLogic';

export const BROCHURE_COLORS = {
  orange: '#EA5B0C',
  cyan: '#009FE3',
  royal: '#005596',
  emerald: '#139A74',
  lime: '#84BD00',
  purple: '#66437A',
  slateGray: '#647D8B',
};

export interface InfraOptionDetail {
  id: OptionId;
  codeNumber: string;
  shortName: string;
  fullName: string;
  colorHex: string;
  lightBgHex: string;
  simpleDefinition: string;
  everydayAnalogy: {
    title: string;
    comparison: string;
  };
  coreMissions: {
    category: string;
    tasks: string[];
  }[];
  modernTools2026: {
    name: string;
    role: string;
  }[];
  careerRoles: string[];
}

export const INFRA_OPTIONS: InfraOptionDetail[] = [
  {
    id: 'sysres',
    codeNumber: '01',
    shortName: 'Systèmes et Réseaux',
    fullName: 'Option 1 : Systèmes et Réseaux',
    colorHex: '#009FE3',
    lightBgHex: '#EAF6FC',
    simpleDefinition:
      'Ce professionnel installe, relie, sécurise et répare les ordinateurs, les serveurs et le réseau de l’entreprise. Il aide aussi les utilisateurs chaque fois qu’ils ont un problème technique.',
    everydayAnalogy: {
      title: 'Exemple concret du quotidien',
      comparison:
        'Dans une grande ferme moderne, les câbles et le Wi-Fi sont comme les tuyaux d’eau qui relient le puits (le Serveur) à chaque arbre (les Ordinateurs). S’il y a une coupure, ce technicien répare la conduite et rétablit le service.',
    },
    coreMissions: [
      {
        category: 'Support technique',
        tasks: [
          'Aider les utilisateurs quand un ordinateur ou un logiciel bloque',
          'Gérer le parc informatique (ordinateurs, imprimantes, équipements)',
          'Suivre et faire évoluer le matériel informatique',
          'Chercher la cause des pannes et les réparer sur les postes et serveurs',
        ],
      },
      {
        category: 'Maintenance et Système',
        tasks: [
          'Dépanner les micro-ordinateurs, les serveurs et le réseau',
          'Installer et configurer les postes de travail (Windows, Linux)',
          'Installer un système d’exploitation réseau',
          'Administrer les serveurs de messagerie (emails) et les serveurs Web',
        ],
      },
      {
        category: 'Réseau informatique',
        tasks: [
          'Dessiner le plan et installer le réseau local de l’entreprise (LAN)',
          'Participer au câblage du réseau (Fibre optique, câbles RJ45)',
          'Surveiller le réseau et réparer les coupures de connexion',
          'Installer et sécuriser les routeurs et switchs d’un réseau étendu (WAN)',
        ],
      },
    ],
    modernTools2026: [
      { name: 'Cisco Packet Tracer & Wi-Fi 7', role: 'Création et test de réseaux rapides' },
      { name: 'Linux & Windows Server', role: 'Gestion des ordinateurs et serveurs' },
      { name: 'Fibre Optique & Routeurs', role: 'Connexion très haut débit entre bâtiments' },
      { name: 'Zabbix & Supervision IA', role: 'Alerte automatique avant une panne' },
    ],
    careerRoles: [
      'Technicien Support et Parc Informatique',
      'Administrateur Systèmes et Réseaux',
      'Technicien Réseaux et Télécoms',
      'Superviseur d’Infrastructure',
    ],
  },
  {
    id: 'cyber',
    codeNumber: '02',
    shortName: 'Cybersécurité',
    fullName: 'Option 2 : Cybersécurité',
    colorHex: '#EA5B0C',
    lightBgHex: '#FEF2EB',
    simpleDefinition:
      'Ce professionnel protège les données et le réseau de l’entreprise. Il empêche les pirates informatiques (hackers) d’entrer dans le système et applique le plan de défense en cas d’attaque.',
    everydayAnalogy: {
      title: 'Exemple concret du quotidien',
      comparison:
        'Dans un port ou une banque, il installe les caméras, contrôle les portes d’entrée (Pare-feu), met les documents précieux dans un coffre codé (Cryptologie) et apprend aux employés à reconnaître les voleurs.',
    },
    coreMissions: [
      {
        category: 'Prévention et Protection',
        tasks: [
          'Repérer les risques et les failles de sécurité du système',
          'Installer les outils de protection : pare-feu, antivirus, cryptologie (chiffrement)',
          'Limiter les accès avec des mots de passe et des permissions strictes',
        ],
      },
      {
        category: 'Détection et Défense',
        tasks: [
          'Détecter les virus et bloquer les attaques des pirates informatiques',
          'Analyser les logiciels dangereux (malwares)',
          'Appliquer le plan d’action d’urgence pour protéger le système pendant une attaque',
        ],
      },
      {
        category: 'Veille et Formation',
        tasks: [
          'Suivre les nouvelles menaces chaque jour (veille technologique)',
          'Mettre à jour le système de protection',
          'Former les employés aux bonnes règles de sécurité',
        ],
      },
    ],
    modernTools2026: [
      { name: 'Pare-feu Fortinet & Palo Alto', role: 'Barrière qui filtre les connexions' },
      { name: 'Kali Linux & Wireshark', role: 'Recherche de failles et test de sécurité' },
      { name: 'Radar SIEM & Wazuh', role: 'Surveillance des attaques 24h/24' },
      { name: 'Chiffrement & Double Code (MFA)', role: 'Protection des comptes et fichiers' },
    ],
    careerRoles: [
      'Technicien en Cybersécurité',
      'Analyste Sécurité (SOC)',
      'Technicien Protection des Données',
      'Assistant Auditeur Sécurité',
    ],
  },
  {
    id: 'cloud',
    codeNumber: '03',
    shortName: 'Cloud Computing',
    fullName: 'Option 3 : Cloud Computing',
    colorHex: '#005596',
    lightBgHex: '#EBF2F8',
    simpleDefinition:
      'Ce professionnel stocke et gère les données de l’entreprise sur de grands serveurs sécurisés accessibles par Internet (le Cloud). Il permet aux équipes de travailler en sécurité depuis un ordinateur ou un téléphone.',
    everydayAnalogy: {
      title: 'Exemple concret du quotidien',
      comparison:
        'Au lieu de garder ses récoltes dans un petit local fragile, une coopérative utilise un grand entrepôt moderne ultra-sécurisé, accessible à tout moment depuis n’importe quelle ville.',
    },
    coreMissions: [
      {
        category: 'Étude et Choix des Solutions',
        tasks: [
          'Étudier les différentes solutions Cloud selon les besoins de l’entreprise',
          'Participer à la préparation des appels d’offres pour choisir un fournisseur',
        ],
      },
      {
        category: 'Mise en place et Virtualisation',
        tasks: [
          'Suivre l’installation des nouveaux systèmes Cloud dans l’entreprise',
          'Créer et gérer des machines virtuelles et le stockage externe',
          'Sécuriser l’accès aux données depuis les PC de bureau et les téléphones mobiles',
        ],
      },
      {
        category: 'Accompagnement',
        tasks: [
          'Aider les employés à utiliser les nouveaux outils Cloud au quotidien',
          'Accompagner l’entreprise dans sa transformation numérique',
        ],
      },
    ],
    modernTools2026: [
      { name: 'AWS, Microsoft Azure & Google Cloud', role: 'Grandes plateformes Cloud mondiales' },
      { name: 'Docker & Kubernetes', role: 'Lancement rapide d’applications' },
      { name: 'VMware & Proxmox', role: 'Création de plusieurs serveurs virtuels' },
      { name: 'Sauvegarde Cloud Automatique', role: 'Zéro perte de fichiers en cas de panne' },
    ],
    careerRoles: [
      'Technicien Cloud Computing',
      'Administrateur Systèmes Virtualisés',
      'Technicien Support Cloud & Microsoft 365',
      'Opérateur d’Infrastructure Cloud',
    ],
  },
  {
    id: 'iot',
    codeNumber: '04',
    shortName: 'IoT (Objets Connectés)',
    fullName: 'Option 4 : IoT (Internet des Objets)',
    colorHex: '#139A74',
    lightBgHex: '#E8F7F2',
    simpleDefinition:
      'Ce professionnel installe et programme des capteurs électroniques sur des objets (machines, serres agricoles, véhicules, bâtiments) pour envoyer leurs mesures vers une application sur smartphone via Internet.',
    everydayAnalogy: {
      title: 'Exemple concret du quotidien',
      comparison:
        'Un capteur planté dans la terre mesure l’humidité sous un palmier. Dès que la terre est sèche, il envoie un message au téléphone de l’agriculteur et ouvre le robinet d’eau solaire automatiquement.',
    },
    coreMissions: [
      {
        category: 'Capteurs et Installation',
        tasks: [
          'Participer à l’installation complète d’une solution d’objets connectés (IoT)',
          'Choisir, adapter et brancher les capteurs électroniques (température, eau, GPS)',
          'Assurer l’entretien et la réparation des composants électroniques',
        ],
      },
      {
        category: 'Programmation et Données',
        tasks: [
          'Programmer les fonctions des capteurs et des boîtiers connectés',
          'Capturer et récupérer les mesures envoyées par les capteurs',
        ],
      },
      {
        category: 'Communication vers le Mobile',
        tasks: [
          'Relier les objets au réseau Internet (Wi-Fi, 4G/5G, LoRa) et au Cloud',
          'Afficher les résultats sur un smartphone ou un écran connecté',
        ],
      },
    ],
    modernTools2026: [
      { name: 'Cartes Arduino, ESP32 & Raspberry Pi', role: 'Petits cerveaux électroniques des objets' },
      { name: 'Capteurs Intelligents (Eau, Air, GPS)', role: 'Mesure automatique sur le terrain' },
      { name: 'Réseaux sans fil LoRaWAN, 5G & MQTT', role: 'Envoi des données à longue distance' },
      { name: 'Tableaux de bord Smartphone', role: 'Suivi et commande à distance en direct' },
    ],
    careerRoles: [
      'Technicien en Solutions IoT',
      'Installateur d’Objets et Capteurs Connectés',
      'Technicien Smart Agriculture / Smart Building',
      'Technicien Maintenance Systèmes Connectés',
    ],
  },
];

export const SIX_APTITUDES_GUIDE = [
  {
    number: '01',
    title: 'Esprit de logique',
    color: '#009FE3',
    description:
      'C’est la base : l’informatique demande de la logique, un peu de calcul simple et l’envie de comprendre comment les choses fonctionnent.',
  },
  {
    number: '02',
    title: 'Esprit d’analyse',
    color: '#EA5B0C',
    description:
      'Devant un problème compliqué, on le découpe en petites étapes simples. On réfléchit au calme avant de toucher au clavier.',
  },
  {
    number: '03',
    title: 'Esprit d’équipe',
    color: '#139A74',
    description:
      'Savoir travailler avec les autres, partager les informations et viser la réussite de tout le groupe.',
  },
  {
    number: '04',
    title: 'Curiosité et auto-formation',
    color: '#005596',
    description:
      'Aimer la technologie et continuer à apprendre chaque semaine les nouveaux outils du marché.',
  },
  {
    number: '05',
    title: 'La communication',
    color: '#84BD00',
    description:
      'Savoir écouter les collègues et les clients, et parler clairement avec chaque personne.',
  },
  {
    number: '06',
    title: 'Méthode et rigueur',
    color: '#66437A',
    description:
      'Être organisé, précis et vérifier son travail étape par étape pour éviter les erreurs.',
  },
];

export interface SimulatorQuestion {
  id: number;
  question: string;
  contextHint: string;
  choices: {
    optionId: OptionId;
    label: string;
    example: string;
  }[];
}

export const SIMULATOR_QUESTIONS: SimulatorQuestion[] = [
  {
    id: 1,
    question: 'Quelle activité vous plaît le plus dans la vie de tous les jours ?',
    contextHint: 'Choisissez la réponse qui ressemble le plus à votre caractère.',
    choices: [
      {
        optionId: 'sysres',
        label: 'Brancher les appareils, construire le réseau et dépanner les gens',
        example: 'Quand un appareil tombe en panne, j’aime chercher la cause et le réparer.',
      },
      {
        optionId: 'cyber',
        label: 'Protéger, surveiller et bloquer les voleurs et les arnaques',
        example: 'J’aime sécuriser les comptes et empêcher les intrus d’entrer.',
      },
      {
        optionId: 'cloud',
        label: 'Organiser de grands espaces en ligne accessibles depuis partout',
        example: 'J’aime que les fichiers soient sauvegardés et disponibles sur téléphone et PC.',
      },
      {
        optionId: 'iot',
        label: 'Créer des objets intelligents avec des capteurs automatiques',
        example: 'J’aime les systèmes automatiques : arrosage solaire, radar, maison connectée.',
      },
    ],
  },
  {
    id: 2,
    question: 'Une grande entreprise vous recrute. Quelle mission choisissez-vous ?',
    contextHint: 'Chaque mission correspond à l’une des 4 options de 2ème année.',
    choices: [
      {
        optionId: 'sysres',
        label: 'Relier tous les bureaux par Fibre Optique et Wi-Fi rapide',
        example: 'Pour que les 100 employés travaillent ensemble sans coupure.',
      },
      {
        optionId: 'cyber',
        label: 'Installer un pare-feu et protéger les données secrètes contre les hackers',
        example: 'Pour bloquer les virus et les attaques venues d’Internet.',
      },
      {
        optionId: 'cloud',
        label: 'Mettre les serveurs et les logiciels de l’entreprise dans le Cloud',
        example: 'Pour travailler à distance en toute sécurité depuis n’importe quelle ville.',
      },
      {
        optionId: 'iot',
        label: 'Poser des capteurs connectés pour suivre la température et l’énergie sur mobile',
        example: 'Pour recevoir une alerte sur smartphone dès qu’une machine chauffe.',
      },
    ],
  },
  {
    id: 3,
    question: 'Quels équipements voulez-vous utiliser en atelier pratique ?',
    contextHint: 'Vous découvrirez les bases en 1ère année avant de vous spécialiser.',
    choices: [
      {
        optionId: 'sysres',
        label: 'Routeurs, switchs, câbles réseau et serveurs Windows / Linux',
        example: 'Toucher le matériel et construire le cœur du réseau.',
      },
      {
        optionId: 'cyber',
        label: 'Outils de détection d’intrusion, pare-feu, antivirus et chiffrement',
        example: 'Tester la sécurité du système et bloquer les failles.',
      },
      {
        optionId: 'cloud',
        label: 'Plateformes Cloud (AWS, Azure) et ordinateurs virtuels',
        example: 'Créer plusieurs serveurs virtuels en quelques clics sur l’écran.',
      },
      {
        optionId: 'iot',
        label: 'Cartes électroniques (Arduino, ESP32), capteurs et applications mobiles',
        example: 'Relier un capteur réel à un écran de téléphone.',
      },
    ],
  },
  {
    id: 4,
    question: 'Quelle est votre plus grande force au travail ?',
    contextHint: 'Toutes ces qualités sont très recherchées par les entreprises.',
    choices: [
      {
        optionId: 'sysres',
        label: 'Le sens du service : j’aime aider les collègues et résoudre leurs pannes',
        example: 'Patience, écoute et rapidité de diagnostic.',
      },
      {
        optionId: 'cyber',
        label: 'La vigilance : je remarque les détails cachés et je respecte les règles',
        example: 'Précision, discrétion et sang-froid.',
      },
      {
        optionId: 'cloud',
        label: 'L’organisation : j’aime les systèmes modernes, propres et automatiques',
        example: 'Logique, vision globale et efficacité.',
      },
      {
        optionId: 'iot',
        label: 'L’invention : j’aime fabriquer des solutions utiles sur le terrain',
        example: 'Curiosité, créativité et pratique.',
      },
    ],
  },
  {
    id: 5,
    question: 'Dans quel domaine aimeriez-vous travailler après votre diplôme ?',
    contextHint: 'Toutes les entreprises ont besoin de techniciens en infrastructure digitale.',
    choices: [
      {
        optionId: 'sysres',
        label: 'Opérateurs télécoms, banques, hôpitaux et administrations',
        example: 'Gérer et maintenir les grands réseaux informatiques.',
      },
      {
        optionId: 'cyber',
        label: 'Banques, centres de sécurité numérique et grandes sociétés',
        example: 'Protéger les informations sensibles contre le piratage.',
      },
      {
        optionId: 'cloud',
        label: 'Entreprises technologiques, multinationales et travail à distance',
        example: 'Gérer des serveurs dans le Cloud pour des clients partout dans le monde.',
      },
      {
        optionId: 'iot',
        label: 'Agriculture moderne, pêche maritime, énergie solaire et industrie',
        example: 'Connecter les équipements du terrain à Internet.',
      },
    ],
  },
];

export interface ModuleItem {
  code: string;
  title: string;
  hours: number;
  type: 'technique' | 'transversal';
  simpleExplanation: string;
  concreteExample: string;
}

export const TRONC_COMMUN_MODULES: ModuleItem[] = [
  {
    code: 'M101',
    title: 'Métier et formation en infrastructure digitale',
    hours: 15,
    type: 'technique',
    simpleExplanation: 'Découvrir les 4 options du métier, le programme des 2 ans et les règles de l’OFPPT.',
    concreteExample: 'Choisir son objectif professionnel parmi Systèmes & Réseaux, Cybersécurité, Cloud ou IoT.',
  },
  {
    code: 'M102',
    title: 'Les enjeux d’un système d’information',
    hours: 75,
    type: 'technique',
    simpleExplanation: 'Comprendre comment une entreprise utilise l’informatique pour organiser son travail et ses données.',
    concreteExample: 'Voir comment les ordinateurs de la vente, du stock et de la direction travaillent ensemble.',
  },
  {
    code: 'M103',
    title: 'Conception d’un réseau informatique',
    hours: 120,
    type: 'technique',
    simpleExplanation: 'Apprendre à relier plusieurs ordinateurs avec des câbles, du Wi-Fi, des switchs et des routeurs.',
    concreteExample: 'Créer le plan réseau complet d’une entreprise et donner une adresse IP à chaque poste.',
  },
  {
    code: 'M104',
    title: 'Fonctionnement du système d’exploitation',
    hours: 135,
    type: 'technique',
    simpleExplanation: 'Installer, régler et utiliser Windows et Linux sur les ordinateurs et les serveurs.',
    concreteExample: 'Créer des comptes utilisateurs et gérer les fichiers et la mémoire sur Linux et Windows.',
  },
  {
    code: 'M105',
    title: 'Gestion de l’infrastructure virtualisée',
    hours: 90,
    type: 'technique',
    simpleExplanation: 'Faire fonctionner plusieurs ordinateurs virtuels à l’intérieur d’une seule machine physique.',
    concreteExample: 'Démarrer 3 serveurs virtuels sur un seul PC pour tester un réseau.',
  },
  {
    code: 'M106',
    title: 'Automatisation des tâches d’administration',
    hours: 105,
    type: 'technique',
    simpleExplanation: 'Écrire des scripts simples pour que l’ordinateur fasse les tâches répétitives tout seul.',
    concreteExample: 'Programmer une copie de sauvegarde automatique chaque soir.',
  },
  {
    code: 'M107',
    title: 'Sécurité des systèmes d’information',
    hours: 90,
    type: 'technique',
    simpleExplanation: 'Protéger les ordinateurs et le réseau avec des mots de passe, un pare-feu et un antivirus.',
    concreteExample: 'Bloquer les connexions interdites et sécuriser les dossiers importants.',
  },
  {
    code: 'M108',
    title: 'Processus et outils de veille technologique',
    hours: 75,
    type: 'technique',
    simpleExplanation: 'Suivre les nouveautés de l’informatique pour rester toujours à jour dans son métier.',
    concreteExample: 'Rechercher les nouveaux outils Cloud, Cybersécurité et IoT sur Internet.',
  },
  {
    code: 'EGTS101',
    title: 'Arabe',
    hours: 20,
    type: 'transversal',
    simpleExplanation: 'Communication professionnelle écrite et orale en langue arabe.',
    concreteExample: 'Rédiger un compte-rendu clair.',
  },
  {
    code: 'EGTS102',
    title: 'Français',
    hours: 115,
    type: 'transversal',
    simpleExplanation: 'Améliorer son français pour comprendre les cours, écrire des emails et réussir ses entretiens.',
    concreteExample: 'Expliquer son travail technique avec des phrases simples.',
  },
  {
    code: 'EGTS103',
    title: 'Anglais technique',
    hours: 50,
    type: 'transversal',
    simpleExplanation: 'Apprendre les mots d’anglais utilisés dans les logiciels et le matériel informatique.',
    concreteExample: 'Comprendre les menus d’un routeur ou d’un serveur en anglais.',
  },
  {
    code: 'EGTS104',
    title: 'Culture entrepreneuriale partie 1',
    hours: 30,
    type: 'transversal',
    simpleExplanation: 'Comprendre comment fonctionne une entreprise et comment lancer une idée de projet.',
    concreteExample: 'Découvrir les étapes pour créer sa propre société.',
  },
  {
    code: 'EGTS105',
    title: 'Compétences comportementales et sociales',
    hours: 30,
    type: 'transversal',
    simpleExplanation: 'Développer le travail en équipe, l’écoute, la gestion du temps et la confiance en soi.',
    concreteExample: 'Bien communiquer avec ses collègues et les clients.',
  },
  {
    code: 'EGTS108',
    title: 'Entreprenariat PIE 1',
    hours: 72,
    type: 'transversal',
    simpleExplanation: 'Travailler sur un projet concret de création d’entreprise étape par étape.',
    concreteExample: 'Préparer un projet de service informatique utile dans la région.',
  },
  {
    code: 'EGTS106',
    title: 'Culture et techniques avancées du numérique',
    hours: 40,
    type: 'transversal',
    simpleExplanation: 'Utiliser efficacement les outils numériques de travail et de collaboration en ligne.',
    concreteExample: 'Organiser son travail avec Microsoft Teams, Word, Excel et le partage en ligne.',
  },
];

export const OFPPT_TRAINING_TYPES = [
  {
    id: 'initiale',
    title: 'La formation initiale',
    color: '#009FE3',
    description:
      'Une formation complète qui se termine par un diplôme officiel. Après le diplôme, le lauréat est prêt à exercer son métier en entreprise.',
    examples: [
      { filiere: 'Infrastructure Digitale option : Cyber sécurité', niveau: 'TS', type: 'Formation initiale' },
      { filiere: 'Développement Digital option : Mobile', niveau: 'TS', type: 'Formation initiale' },
      { filiere: 'Développement Digital option : Full Stack', niveau: 'TS', type: 'Formation initiale' },
      { filiere: 'Digital Design option : UX', niveau: 'TS', type: 'Formation initiale' },
    ],
  },
  {
    id: 'qualifiante',
    title: 'La formation qualifiante',
    color: '#EA5B0C',
    description:
      'Une formation courte de 3 à 9 mois qui complète la formation initiale et aide à entrer encore plus vite dans le marché du travail.',
    examples: [
      { filiere: 'Installateur de fibre optique', niveau: 'FQ', type: 'Formation qualifiante' },
      { filiere: 'Développement d’applications Python', niveau: 'FQ', type: 'Formation qualifiante' },
      { filiere: 'Testeur de solutions digitales', niveau: 'FQ', type: 'Formation qualifiante' },
      { filiere: 'Community Manager / Webmarketer', niveau: 'FQ', type: 'Formation qualifiante' },
    ],
  },
  {
    id: 'soir',
    title: 'Cours du soir',
    color: '#139A74',
    description:
      'La solution idéale pour les salariés et les chercheurs d’emploi qui veulent se former le soir. Elle donne un diplôme équivalent aux cours du jour.',
    examples: [
      { filiere: 'Infrastructure Digitale option : Cloud computing', niveau: 'TS', type: 'Cours du soir' },
      { filiere: 'Infrastructure Digitale option : Cyber sécurité', niveau: 'TS', type: 'Cours du soir' },
      { filiere: 'Développement Digital option : RV / RA', niveau: 'TS', type: 'Cours du soir' },
      { filiere: 'Digital Design option : UI Designer', niveau: 'TS', type: 'Cours du soir' },
    ],
  },
];

export const OFPPT_SIX_LEVELS = [
  {
    level: '1. Technicien Spécialisé (TS)',
    duration: '2 ans',
    access: 'Accessible aux Bacheliers, Licenciés ou stagiaires venant du système de passerelles (âge max 30 ans, ou 33 ans par passerelle).',
    color: '#009FE3',
  },
  {
    level: '2. Technicien (T)',
    duration: '2 ans',
    access: 'Accessible aux élèves ayant le niveau Bac (terminale) ou par le système de passerelles.',
    color: '#EA5B0C',
  },
  {
    level: '3. Qualification (Q)',
    duration: '18 ou 24 mois',
    access: 'Accessible aux élèves de la 3ème année du collège ou par le système de passerelles.',
    color: '#84BD00',
  },
  {
    level: '4. Spécialisation (S)',
    duration: '1 an',
    access: 'Accessible à partir de la 6ème année du primaire.',
    color: '#139A74',
  },
  {
    level: '5. Bac Pro (Baccalauréat Professionnel)',
    duration: '2 à 3 ans',
    access: 'Accessible aux élèves à partir de l’année du Tronc Commun du lycée.',
    color: '#005596',
  },
  {
    level: '6. Parcours collégial',
    duration: '3 ans',
    access: 'Accessible aux élèves à partir de la 6ème année du primaire.',
    color: '#66437A',
  },
];

export const EMPLOYER_SOFT_SKILLS = [
  {
    title: 'Motivation et esprit d’initiative',
    simpleDesc: 'Avoir envie d’avancer et proposer des idées utiles sans attendre.',
    color: '#139A74',
  },
  {
    title: 'Curieux et passionné de technologie',
    simpleDesc: 'Aimer découvrir les nouveaux outils et apprendre par soi-même.',
    color: '#009FE3',
  },
  {
    title: 'Capacités d’analyse et de synthèse',
    simpleDesc: 'Découper un grand problème en petites parties faciles à résoudre.',
    color: '#84BD00',
  },
  {
    title: 'Travail en équipe',
    simpleDesc: 'Aider ses collègues et avancer ensemble vers le même objectif.',
    color: '#EA5B0C',
  },
  {
    title: 'Empathie',
    simpleDesc: 'Comprendre le besoin ou le stress d’un utilisateur en panne.',
    color: '#009FE3',
  },
  {
    title: 'Bonne communication',
    simpleDesc: 'Bien écouter et expliquer les solutions avec des mots clairs.',
    color: '#E11D48',
  },
  {
    title: 'Patience et rigueur',
    simpleDesc: 'Travailler avec soin, méthode et précision jusqu’au bout.',
    color: '#005596',
  },
];

export const OFPPT_PLATFORMS = [
  {
    name: 'OFPPT ACADEMY',
    url: 'https://ofpptcasa.sharepoint.com/sites/PortailEducation',
    role: 'Médiathèque de cours et supports',
    description: 'Contient les cours, documents PDF et vidéos de tous les modules de toutes les filières.',
    color: '#009FE3',
  },
  {
    name: 'OFPPT LANGUES (Altissia)',
    url: 'https://app.ofppt-langues.ma/',
    role: 'Apprentissage des langues en ligne',
    description: 'Pour apprendre et pratiquer le Français, l’Anglais et l’Espagnol à votre rythme.',
    color: '#EA5B0C',
  },
  {
    name: 'WEBFORCE LIFE',
    url: 'https://digital.ofppt.ma/',
    role: 'Plateforme des métiers du Digital',
    description: 'Tutoriels, fiches de révision, quiz du jour et suivi individuel avec votre formateur.',
    color: '#139A74',
  },
  {
    name: 'SCHOLARVOX OFPPT',
    url: 'https://ofppt.scholarvox.com/',
    role: 'Bibliothèque numérique 24h/24 et 7j/7',
    description: 'Des milliers de livres numériques (Dunod, Gualino, Eyrolles) accessibles à distance.',
    color: '#005596',
  },
];

export interface Session15hPlan {
  id: string;
  sessionNumber: number;
  hours: string;
  title: string;
  pedagogicalGoal: string;
  deliverable: string;
  color: string;
}

export const PLAN_15_HEURES: Session15hPlan[] = [
  {
    id: 'seance-1',
    sessionNumber: 1,
    hours: 'Séance 1 (3h)',
    title: '1. Découverte des 4 Métiers de l’Infrastructure Digitale',
    pedagogicalGoal: 'Comprendre le rôle du technicien et découvrir Systèmes & Réseaux, Cybersécurité, Cloud et IoT.',
    deliverable: 'Quiz et comparaison des 4 options.',
    color: '#009FE3',
  },
  {
    id: 'seance-2',
    sessionNumber: 2,
    hours: 'Séance 2 (3h)',
    title: '2. Exigences de l’emploi & Ateliers Réseau / Cybersécurité',
    pedagogicalGoal: 'Pratiquer les missions concrètes en entreprise sur les simulateurs Réseau et Cybersécurité.',
    deliverable: 'Atelier 1 et Atelier 2 validés.',
    color: '#EA5B0C',
  },
  {
    id: 'seance-3',
    sessionNumber: 3,
    hours: 'Séance 3 (3h)',
    title: '3. Ateliers Cloud / IoT & Compétences (Savoir, Savoir-Faire, Savoir-Être)',
    pedagogicalGoal: 'Tester le Cloud et les capteurs IoT, puis maîtriser les compétences et aptitudes du métier.',
    deliverable: 'Atelier 3, 4 et 5 validés.',
    color: '#139A74',
  },
  {
    id: 'seance-4',
    sessionNumber: 4,
    hours: 'Séance 4 (3h)',
    title: '4. Programme du Tronc Commun, Pédagogie Active & Orientation',
    pedagogicalGoal: 'Explorer les modules de 1ère année (M101 à M108, EGTS) et passer le Simulateur de Carrière.',
    deliverable: 'Choix d’orientation personnel.',
    color: '#005596',
  },
  {
    id: 'seance-5',
    sessionNumber: 5,
    hours: 'Séance 5 (3h)',
    title: '5. L’OFPPT, Mode Hybride, Plateformes, Bourse Minhaty & AMO',
    pedagogicalGoal: 'Connaître les 6 niveaux, les passerelles, le diplôme (≥10/20), les 4 plateformes et ses droits.',
    deliverable: 'Bilan final du module M101 (15h).',
    color: '#84BD00',
  },
];
