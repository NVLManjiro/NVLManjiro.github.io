/* TOUTES les données des projets et compétences SISR */
const SKL = {
  "B1.1": "Gérer le patrimoine informatique",
  "B1.2": "Répondre aux incidents et aux demandes d'assistance",
  "B1.4": "Travailler en mode projet",
  "B1.6": "Organiser son développement professionnel",
  "B2.1": "Concevoir une solution d'infrastructure réseau",
  "B2.2": "Installer, tester et déployer une solution d'infrastructure réseau",
  "B2.3":
    "Exploiter, dépanner et superviser une solution d'infrastructure réseau",
  "B3.1": "Protéger les données à caractère personnel",
  "B3.3": "Sécuriser les équipements et les usages des utilisateurs",
  "B3.4": "Garantir la disponibilité, l'intégrité et la confidentialité",
};
const P = [
  {
    id: "infra",
    cat: ["sys", "net", "sec", "obs"],
    tag: "Projet principal",
    title: "Infrastructure complète SOC",
    short:
      "Réseau d'entreprise segmenté, AD, pare-feu, VPN, SIEM, audit de vulnérabilités et PRA.",
    stack: "Cisco · VMware · pfSense · Windows Server · Linux · Wazuh · Veeam",
    skills: ["B1.1", "B1.2", "B2.1", "B2.2", "B2.3", "B3.1", "B3.3", "B3.4"],
    intro:
      "Conception et déploiement d'une infrastructure d'entreprise de A à Z : segmentation réseau, annuaire Active Directory, durcissement des postes, accès distant, supervision de sécurité et plan de reprise d'activité.",
    goal: "Simuler le système d'information d'une entreprise avec tous ses services réseau et sécurité, et documenter chaque brique pour qu'elle soit reproductible.",
    env: "Hyperviseur VMware, équipements Cisco, pare-feu pfSense, serveurs Windows et Linux, postes clients Windows.",
    concepts: [
      [
        "VLAN",
        "Réseau local virtuel : sépare logiquement des machines sur un même switch pour limiter la propagation d'une attaque.",
      ],
      [
        "DMZ",
        "Zone tampon qui héberge les serveurs exposés à Internet, isolée du réseau interne.",
      ],
      [
        "Router-on-a-stick",
        "Un seul lien trunk entre switch et routeur/pare-feu qui porte tous les VLANs, avec routage inter-VLAN par sous-interfaces.",
      ],
      [
        "Liste blanche",
        "Politique du « tout est interdit sauf ce qui est explicitement autorisé » appliquée aux règles du pare-feu.",
      ],
      [
        "GPO",
        "Stratégies de groupe Active Directory qui appliquent une configuration de sécurité à tous les postes du domaine.",
      ],
      [
        "LAPS",
        "Génère un mot de passe administrateur local unique par poste, stocké dans l'AD et renouvelé automatiquement.",
      ],
      [
        "SIEM",
        "Centralise et corrèle les journaux de tous les systèmes pour détecter les incidents de sécurité.",
      ],
      [
        "PRA",
        "Plan de reprise d'activité : procédures et sauvegardes pour redémarrer les services après un sinistre.",
      ],
    ],
    steps: [
      [
        "Topologie et plan d'adressage",
        "Segmentation en trois VLANs (DMZ, LAN serveurs, LAN clients) avec routage inter-VLAN en router-on-a-stick. La DMZ isole les serveurs exposés des données internes. Chaque zone reçoit son propre sous-réseau pour faciliter le filtrage.",
      ],
      [
        "Pare-feu pfSense",
        "Création des interfaces par VLAN et des règles de filtrage en liste blanche : seul le trafic nécessaire est autorisé entre zones. Chaque règle est ordonnée et documentée.",
      ],
      [
        "Active Directory",
        "Promotion du contrôleur de domaine AD DS, installation du DNS, création de l'arborescence d'OU et des utilisateurs, puis jonction des postes au domaine.",
      ],
      [
        "Hardening : GPO et LAPS",
        "GPO restrictives (blocage des périphériques USB) et Microsoft LAPS : un mot de passe administrateur local différent sur chaque poste, ce qui empêche le mouvement latéral en cas de compromission.",
      ],
      [
        "Accès distant OpenVPN",
        "Serveur OpenVPN sur pfSense pour un accès distant chiffré aux ressources internes, avec authentification des utilisateurs.",
      ],
      [
        "SIEM Wazuh",
        "Déploiement de Wazuh, enrôlement des agents, corrélation des journaux (détection de force brute SSH) et alertes envoyées par webhook Discord.",
      ],
      [
        "Audit OpenVAS",
        "Scans de vulnérabilités du parc avec OpenVAS / Greenbone, lecture du rapport et priorisation des correctifs selon la criticité.",
      ],
      [
        "Sauvegarde et PRA Veeam",
        "Sauvegarde des machines virtuelles et test de restauration à chaud (Hot Restore) pour valider le plan de reprise d'activité.",
      ],
    ],
    imgs: [
      [0, "image/11.png", "Topologie du réseau (Packet Tracer)"],
      [1, "image/2.png", "Console pfSense — Vue d'ensemble des interfaces"],
      [
        1,
        "image/5.png",
        "Configuration du VLAN ID sur la carte réseau virtuelle",
      ],
      [
        1,
        "image/7.png",
        "Tableau de bord pfSense (Statistiques et statut système)",
      ],
      [1, "image/10.png", "Règles de filtrage pare-feu pfSense (Clients)"],
      [
        2,
        "image/4.png",
        "Configuration et sélection d'installation Microsoft Server 2022",
      ],
      [
        2,
        "image/1.png",
        "Utilisateurs et ordinateurs Active Directory (OU et PCs)",
      ],
      [
        2,
        "image/6.png",
        "Écran de connexion au domaine PROJET\\Administrateur",
      ],
      [2, "image/12.png", "Jonction de la station au domaine PROJET.AD"],
      [
        3,
        "image/8.png",
        "Attribut LAPS (ms-Mcs-AdmPwd) dans l'Active Directory",
      ],
      [4, "image/14.png", "Configuration du serveur OpenVPN sur pfSense"],
      [6, "image/9.png", "OpenVAS : Synchronisation du feed en cours"],
      [6, "image/13.png", "Tableau de bord OpenVAS / Greenbone (NVTs et SCAP)"],
      [
        6,
        "image/15.png",
        "Gestion des erreurs d'authentification OpenVAS (GMP)",
      ],
      [7, "image/3.png", "Sauvegarde système Veeam Agent"],
    ],
    pbs: [
      [
        "Disque du serveur saturé (LVM)",
        "Extension du disque virtuel puis du volume logique à chaud.",
      ],
      [
        "Agent Wazuh refusé par le manager",
        "Résolution d'une asymétrie de clés entre agent et manager, puis ré-enrôlement.",
      ],
    ],
    result: [
      "Réseau segmenté et filtré en liste blanche entre les trois zones.",
      "Domaine opérationnel avec postes durcis (GPO, LAPS).",
      "Détection d'une attaque par force brute et alerte en temps réel.",
      "Restauration d'une machine validée par Veeam.",
    ],
    recos: [
      "Documenter chaque règle de pare-feu et la tenir à jour.",
      "Tester les restaurations Veeam régulièrement, pas seulement les sauvegardes.",
      "Limiter et tracer les accès administrateur (LAPS, VPN).",
    ],
  },
  {
    id: "veille",
    cat: ["sec"],
    tag: "Automatisation",
    title: "Bot de veille cyber",
    short:
      "Script Python et GitHub Actions qui envoie chaque matin les alertes CERT-FR, Zataz et The Hacker News.",
    stack: "Python · GitHub Actions · RSS · SMTP",
    skills: ["B1.6"],
    gh: "https://github.com/NVLManjiro/Ma-Veille-Cyber",
    intro:
      "Bot Python serverless qui interroge des flux RSS, filtre les alertes critiques par mots-clés et envoie un email formaté tous les jours à 7h UTC (9h en été en France).",
    goal: "Rester informé des menaces sans y penser : automatiser la collecte, le tri et la livraison de la veille.",
    env: "Python 3, dépôt GitHub, exécuteur GitHub Actions (ubuntu-latest), compte email pour l'envoi SMTP.",
    concepts: [
      [
        "Flux RSS",
        "Format XML standard qui publie la liste des derniers articles d'un site, facile à lire par un programme.",
      ],
      [
        "Cron",
        "Syntaxe de planification. '0 7 * * *' signifie tous les jours à 07h00.",
      ],
      [
        "Serverless",
        "Aucun serveur à maintenir : GitHub démarre une machine temporaire pour exécuter le script, puis la supprime.",
      ],
      [
        "Secrets GitHub",
        "Variables chiffrées injectées au runtime, pour ne jamais écrire un mot de passe dans le code.",
      ],
    ],
    steps: [
      [
        "Récupération et parsing",
        "Interrogation des flux RSS/XML du CERT-FR, de Zataz et de The Hacker News, puis extraction des titres, liens et dates de publication.",
      ],
      [
        "Filtrage",
        "Sélection des alertes critiques par mots-clés pour éviter le bruit et garder l'essentiel.",
      ],
      [
        "Envoi par SMTP",
        "Génération d'un email formaté et envoi via SMTP. Le mot de passe est lu depuis les secrets GitHub.",
      ],
      [
        "Orchestration GitHub Actions",
        "Un workflow planifié exécute le script chaque jour, sans serveur à maintenir.\n\nname: Veille Quotidienne\non:\n  schedule:\n    - cron: '0 7 * * *'\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Lancer le script de veille\n        env:\n          GMAIL_PASSWORD: ${{ secrets.GMAIL_PASSWORD }}\n        run: python veille_cyber.py",
      ],
    ],
    imgs: [],
    pbs: [
      [
        "Le cron est en UTC",
        "L'email arrive à 9h en été et 8h en hiver en France ; à ajuster si besoin.",
      ],
      [
        "Risque de fuite d'identifiants",
        "Mot de passe stocké uniquement dans les secrets du dépôt, jamais dans le code.",
      ],
    ],
    result: [
      "Veille cyber quotidienne reçue automatiquement par email.",
      "Aucun serveur à administrer, coût nul.",
      "Code public et réutilisable sur GitHub.",
    ],
    recos: [
      "Utiliser un mot de passe d'application et les secrets GitHub.",
      "Varier les sources pour réduire les biais.",
    ],
  },
  {
    id: "glpi",
    cat: ["sys"],
    tag: "ITSM & Helpdesk",
    title: "GLPI et gestion des tickets",
    short:
      "Plateforme ITSM GLPI 11 sur Linux avec rôles technicien et utilisateur et cycle de vie complet d'un ticket.",
    stack: "GLPI 11 · Apache · MariaDB · PHP · Linux",
    skills: ["B1.2", "B1.4"],
    intro:
      "Mise en place d'un centre de services : installation de la pile LAMP, déploiement de GLPI 11, configuration des profils et traitement d'un incident de sa création à sa clôture.",
    steps: [
      [
        "Préparation du serveur",
        "Installation d'Apache, MariaDB et PHP sur Linux, création de la base de données MySQL/MariaDB et configuration du VirtualHost Apache.",
      ],
      [
        "Côté technicien",
        "Tableau de bord et traitement des incidents : prise en charge du ticket, qualification (urgence/impact), échange avec l'utilisateur et clôture du ticket.",
        null,
      ],
      [
        "Côté utilisateur",
        "Portail Self-Service : ouverture d'une demande d'assistance via le catalogue de services et suivi en temps réel de l'état d'avancement.",
        null,
      ],
    ],
    imgs: [
      [
        1,
        "image/glpi_tech_tickets.png",
        "Dashboard Technicien — File d'attente et tri par priorité",
      ],
      [
        1,
        "image/glpi_tech_detail.png",
        "Prise en charge et résolution d'un ticket par l'équipe support",
      ],
      [
        2,
        "image/glpi_user_home.png",
        "Portail d'accueil Self-Service (Vue Utilisateur)",
      ],
      [
        2,
        "image/glpi_user_tickets.png",
        "Suivi des tickets et statuts en temps réel côté demandeur",
      ],
    ],
    result: [
      "Centre de services (Helpdesk) 100 % opérationnel avec séparation stricte des rôles.",
      "Traçabilité intégrale des tickets, de la déclaration d'incident à la solution apportée.",
    ],
    recos: [
      "Séparer rigoureusement les profils utilisateurs et techniciens.",
      "Définir des catégories et des niveaux d'impact clairs pour prioriser le traitement des demandes.",
    ],
  },
  {
    id: "wazuh",
    cat: ["sec"],
    tag: "SOC / SIEM",
    title: "Déploiement du SIEM Wazuh",
    short:
      "Installation, dépannage LVM/APT et détection d'une attaque par force brute SSH.",
    stack: "Wazuh · Ubuntu · LVM · Kali Linux",
    skills: ["B1.2", "B3.4"],
    intro:
      "Déploiement d'un SIEM Wazuh, avec les difficultés rencontrées (ressources, paquets corrompus) et la validation par une attaque simulée.",
    steps: [
      [
        "Redimensionnement LVM",
        "L'installation a échoué par manque de RAM et de disque. Extension du disque dans VMware puis du volume logique.",
        "sudo growpart /dev/sda 3\nsudo pvresize /dev/sda3\nsudo lvextend -l +100%FREE -r /dev/mapper/ubuntu--vg-ubuntu--lv",
      ],
      [
        "Dépannage APT",
        "Gestionnaire de paquets corrompu : isolation des scripts défaillants et purge avant réinstallation.",
        "sudo mv /var/lib/dpkg/info/wazuh-manager.* /tmp/\nsudo dpkg --remove --force-remove-reinstreg wazuh-manager\nsudo rm -rf /var/ossec\nsudo bash wazuh-install.sh -a -i -o",
      ],
      [
        "Simulation de force brute",
        "Enrôlement d'un agent Debian puis attaque SSH depuis Kali : Wazuh corrèle les événements et lève une alerte de niveau 10 (critique).",
        "sudo /var/ossec/bin/agent-auth -m 192.168.91.128 -A Debian-Cible",
      ],
    ],
    imgs: [[2, "image/wazuh_alert.jpg", "Dashboard Wazuh et état des agents"]],
    pbs: [
      [
        "Saturation de la RAM et du disque",
        "Extension du disque VMware puis du LVM.",
      ],
      [
        "Base APT corrompue",
        "Isolation des scripts cassés, purge de /var/ossec puis réinstallation propre.",
      ],
    ],
    result: [
      "SIEM opérationnel avec agent enrôlé.",
      "Attaque détectée et alerte critique visible sur le dashboard.",
    ],
    recos: [
      "Dimensionner la RAM et le disque avant l'installation.",
      "Brancher les alertes sur une messagerie pour réagir vite.",
    ],
  },
  {
    id: "monitoring",
    cat: ["obs", "sys"],
    tag: "Observabilité",
    title: "Monitoring Prometheus et Grafana",
    short:
      "Stack Docker de supervision avec authentification bcrypt et agents Linux/Windows.",
    stack: "Docker · Prometheus · Grafana · Node Exporter",
    skills: ["B2.3"],
    intro:
      "Plateforme de monitoring centralisée sous Docker, avec API Prometheus protégée par authentification de base.",
    steps: [
      [
        "Préparation du socle",
        "Mise à jour du serveur et installation de Docker.",
        "sudo apt update && sudo apt upgrade -y\nsudo apt install -y docker.io docker-compose-v2 python3-bcrypt\nsudo mkdir -p /monitoring/prometheus/rules && cd /monitoring",
      ],
      [
        "Sécurisation de l'API (bcrypt)",
        "Génération d'un hash à placer dans web.yml.",
        "python3 -c \"import getpass,bcrypt;print(bcrypt.hashpw(getpass.getpass('Password:').encode(),bcrypt.gensalt()).decode())\"\n\n# /monitoring/prometheus/web.yml\nbasic_auth_users:\n  admin: <TON_HASH_BCRYPT>",
      ],
      [
        "Déploiement Docker Compose",
        "Prometheus et Grafana orchestrés. Le mot de passe passe par un fichier .env plutôt qu'en clair.",
        'services:\n  prometheus:\n    image: prom/prometheus:latest\n    command:\n      - "--config.file=/etc/prometheus/prometheus.yml"\n      - "--web.config.file=/etc/prometheus/web.yml"\n    ports: ["9090:9090"]\n    volumes:\n      - ./prometheus/web.yml:/etc/prometheus/web.yml:ro\n      - prometheus-data:/prometheus\n  grafana:\n    image: grafana/grafana:latest\n    ports: ["3000:3000"]\n    environment:\n      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}\nvolumes:\n  prometheus-data:',
      ],
      [
        "Agents Node Exporter",
        "Installation de l'agent sur les machines Linux et Windows pour remonter CPU, RAM, disque et réseau (captures à ajouter).",
      ],
    ],
    imgs: [],
    pbs: [
      [
        "Mot de passe en clair dans le compose",
        "Remplacé par une variable d'environnement lue depuis .env.",
      ],
    ],
    result: [
      "Plateforme de supervision centralisée et protégée.",
      "Dashboards Grafana exploitables pour le MCO.",
    ],
    recos: [
      "Figer les versions d'images plutôt que latest.",
      "Placer Grafana derrière un reverse proxy HTTPS.",
    ],
  },
  {
    id: "wireshark",
    cat: ["net", "sec"],
    tag: "Audit réseau",
    title: "Analyse HTTP avec Wireshark",
    short: "Démonstration de l'interception d'identifiants en clair sur HTTP.",
    stack: "Wireshark · HTTP · POST/GET",
    skills: ["B3.4"],
    intro:
      "Démonstration de l'absence de confidentialité du protocole HTTP : le mot de passe d'un formulaire de connexion est lisible en clair dans une capture.",
    steps: [
      [
        "Formulaire vulnérable",
        "Page de connexion HTML envoyant ses données en POST sur HTTP.",
        '<form method="POST" action="/">\n  <input type="text" name="username" required>\n  <input type="password" name="password" required>\n  <input type="submit" value="Se connecter">\n</form>',
      ],
      [
        "Analyse de la requête",
        "Les données sont dans le corps de la requête au format application/x-www-form-urlencoded. Le filtre d'affichage Wireshark isole les requêtes POST.",
        'http.request.method == "POST"',
      ],
    ],
    imgs: [
      [
        1,
        "image/wireshark_post.png",
        "Mot de passe visible en clair dans les trames HTTP",
      ],
    ],
    result: [
      "Identifiants récupérés en clair dans la capture.",
      "Mesures correctives identifiées.",
    ],
    recos: [
      "Passer à HTTPS avec un certificat TLS valide.",
      "Ne jamais transmettre de données sensibles via GET.",
      "Rediriger tout le HTTP vers HTTPS.",
    ],
  },
  {
    id: "luks",
    cat: ["sys", "sec"],
    tag: "Sysadmin Linux",
    title: "Chiffrement de disque LUKS",
    short:
      "Partitionnement, formatage et chiffrement de bas niveau d'un disque sous Linux.",
    stack: "Linux · fdisk · ext4 · LUKS · cryptsetup",
    skills: ["B1.1", "B3.4"],
    intro:
      "Cycle de vie d'un disque : identification, partitionnement, formatage puis chiffrement avec LUKS.",
    goal: "Protéger la confidentialité des données au repos : un disque volé reste illisible sans la phrase de passe.",
    env: "Machine virtuelle Linux avec un disque virtuel supplémentaire de 100 Mo.",
    concepts: [
      ["LUKS", "Standard Linux de chiffrement de disque, basé sur dm-crypt."],
      [
        "Mapper",
        "Le volume déchiffré apparaît comme périphérique virtuel dans /dev/mapper.",
      ],
      [
        "ext4",
        "Système de fichiers journalisé utilisé sur le volume une fois ouvert.",
      ],
    ],
    steps: [
      [
        "Partitionnement et formatage",
        "Ajout d'un disque virtuel de 100 Mo, partitionnement avec fdisk, formatage en ext4 et montage.",
        "lsblk\nsudo fdisk /dev/sdb      # n, p, 1, Entrée, Entrée, w\nsudo mkfs.ext4 /dev/sdb1\nsudo mkdir -p /mnt/disque_TP && sudo mount /dev/sdb1 /mnt/disque_TP",
      ],
      [
        "Chiffrement LUKS",
        "LUKS écrase la structure existante : sauvegarde, démontage, chiffrement, puis nouveau formatage du volume ouvert.",
        "sudo cp -a /mnt/disque_TP/* /tmp/ && sudo umount /mnt/disque_TP\nsudo cryptsetup luksFormat /dev/sdb1\nsudo cryptsetup luksOpen /dev/sdb1 mon_luks\nsudo mkfs.ext4 /dev/mapper/mon_luks",
      ],
      [
        "Utilisation et fermeture",
        "Montage du volume chiffré, restauration des données, puis fermeture du conteneur quand on a terminé.",
        "sudo mount /dev/mapper/mon_luks /mnt/disque_TP\nsudo cp -a /tmp/* /mnt/disque_TP/\nsudo umount /mnt/disque_TP\nsudo cryptsetup luksClose mon_luks",
      ],
    ],
    imgs: [],
    pbs: [
      [
        "Le chiffrement détruit les données existantes",
        "Sauvegarde temporaire dans /tmp avant luksFormat, puis restauration.",
      ],
    ],
    result: [
      "Volume chiffré fonctionnel et données restaurées.",
      "Procédure complète d'ouverture et de fermeture maîtrisée.",
    ],
    recos: [
      "Sauvegarder l'en-tête LUKS (luksHeaderBackup).",
      "Conserver la phrase de passe dans un gestionnaire sécurisé.",
      "Supprimer les copies en clair après restauration.",
    ],
  },
  {
    id: "raid",
    cat: ["sys"],
    tag: "Hardware",
    title: "RAID sur HPE ProLiant",
    short: "Création d'un volume RAID via les System Utilities du BIOS.",
    stack: "HPE ProLiant · BIOS · RAID 0/1/5/10",
    skills: ["B1.1"],
    intro:
      "Le RAID regroupe plusieurs disques en un volume logique pour la vitesse, la capacité ou la tolérance aux pannes. Ce TP documente la création d'un volume sur un serveur HPE.",
    goal: "Configurer le stockage d'un serveur physique en choisissant le niveau de RAID adapté au besoin.",
    env: "Serveur HPE ProLiant, utilitaire BIOS System Utilities.",
    table: [
      ["Niveau", "Disques min.", "Capacité utile", "Tolérance", "Usage"],
      ["RAID 0", "2", "100 %", "Aucune", "Performance pure"],
      ["RAID 1", "2", "50 %", "1 disque", "Miroir, système"],
      [
        "RAID 5",
        "3",
        "n − 1 disque",
        "1 disque",
        "Compromis capacité/sécurité",
      ],
      ["RAID 10", "4", "50 %", "1 par miroir", "Performance et sécurité"],
    ],
    concepts: [
      [
        "Volume logique",
        "Ensemble de disques physiques présenté au système comme un seul disque.",
      ],
      [
        "Parité",
        "Information de contrôle répartie qui permet de reconstruire les données d'un disque défaillant.",
      ],
    ],
    steps: [
      [
        "Accès aux System Utilities",
        "Au démarrage du serveur, appuyer sur F9 pour entrer dans les System Utilities.",
      ],
      [
        "System Configuration",
        "Choisir System Configuration pour accéder à la configuration matérielle et au contrôleur de stockage.",
      ],
    ],
    imgs: [
      [0, "image/HPEF9.png", "Écran de démarrage HPE ProLiant (touche F9)"],
      [
        1,
        "image/HPESC.png",
        "Menu System Configuration (Contrôleur de stockage)",
      ],
    ],
    result: ["Procédure de création de volume documentée pas à pas."],
    recos: [
      "Choisir le niveau selon le besoin : performance, capacité ou sécurité.",
      "RAID ne remplace pas une sauvegarde.",
    ],
  },
];
const CATS = {
  all: "Tous",
  sys: "Systèmes",
  net: "Réseaux",
  sec: "Cybersécurité",
  obs: "Observabilité",
};
function docMd(p) {
  let s =
    "# " +
    p.title +
    "\n\n**Auteur :** Mathys Policarpe — BTS SIO SISR\n**Technologies :** " +
    p.stack +
    "\n**Compétences :** " +
    p.skills.map((k) => k + " " + SKL[k]).join(" ; ") +
    "\n\n" +
    p.intro +
    "\n\n";
  if (p.goal) s += "## Objectif\n\n" + p.goal + "\n\n";
  if (p.env) s += "## Environnement\n\n" + p.env + "\n\n";
  if (p.concepts)
    s +=
      "## Notions clés\n\n" +
      p.concepts.map((c) => "- **" + c[0] + "** : " + c[1]).join("\n") +
      "\n\n";
  if (p.table)
    s +=
      "## Comparatif\n\n" +
      p.table
        .map(
          (r, i) =>
            "| " +
            r.join(" | ") +
            " |" +
            (i ? "" : "\n|" + r.map(() => "---").join("|") + "|"),
        )
        .join("\n") +
      "\n\n";
  p.steps.forEach((t, i) => {
    s += "## Étape " + (i + 1) + " : " + t[0] + "\n\n" + t[1] + "\n\n";
    if (t[2]) s += "```\n" + t[2] + "\n```\n\n";
  });
  if (p.pbs)
    s +=
      "## Problèmes rencontrés\n\n" +
      p.pbs.map((b) => "- **" + b[0] + "** → " + b[1]).join("\n") +
      "\n\n";
  if (p.result)
    s += "## Résultats\n\n" + p.result.map((r) => "- " + r).join("\n") + "\n\n";
  if (p.recos)
    s +=
      "## Bonnes pratiques\n\n" +
      p.recos.map((r) => "- " + r).join("\n") +
      "\n";
  return s;
}

/* ===== Enrichissement des fiches (objectifs, environnement, notions, étapes) ===== */
const X = {
  glpi: {
    goal: "Mettre en place un outil de gestion des demandes et des incidents (helpdesk) pour tracer chaque demande utilisateur, du signalement à la résolution.",
    env: "Serveur Linux avec pile LAMP (Apache, MariaDB, PHP), GLPI 11, navigateur client pour les deux profils.",
    concepts: [
      [
        "ITSM",
        "Gestion des services informatiques : processus qui organisent le support rendu aux utilisateurs.",
      ],
      [
        "Ticket",
        "Fiche qui trace une demande ou un incident : demandeur, catégorie, priorité, suivi et solution.",
      ],
      [
        "Priorité",
        "Résulte de l'urgence et de l'impact ; elle fixe l'ordre de traitement des tickets.",
      ],
      [
        "Profil",
        "Jeu de droits : utilisateur (self-service), technicien, administrateur.",
      ],
      [
        "VirtualHost",
        "Configuration Apache qui associe un nom de site à un dossier de fichiers.",
      ],
    ],
  },
  wazuh: {
    goal: "Détecter les comportements suspects en collectant et corrélant les journaux de plusieurs machines, puis valider la détection par une attaque simulée.",
    env: "Serveur Wazuh sous Ubuntu (VMware), agent sur une machine Debian cible, machine attaquante Kali Linux.",
    concepts: [
      [
        "SIEM",
        "Centralise et corrèle les journaux pour détecter les incidents de sécurité.",
      ],
      [
        "Agent",
        "Programme installé sur chaque machine surveillée qui remonte ses journaux au manager.",
      ],
      [
        "Niveau d'alerte",
        "Échelle de 0 à 15 : plus le niveau est élevé, plus l'événement est critique (ici niveau 10).",
      ],
      [
        "Force brute",
        "Essais répétés de mots de passe, ici sur SSH, détectés par corrélation d'échecs de connexion.",
      ],
      [
        "LVM",
        "Gestionnaire de volumes logiques Linux qui permet d'agrandir un volume à chaud.",
      ],
    ],
  },
  monitoring: {
    goal: "Superviser en continu CPU, RAM, disque et réseau des serveurs afin d'anticiper les pannes et assurer le maintien en condition opérationnelle (MCO).",
    env: "Serveur Linux avec Docker et Docker Compose ; agents installés sur des machines Linux et Windows.",
    concepts: [
      [
        "Prometheus",
        "Base de métriques qui interroge périodiquement (modèle « pull ») les agents et stocke les valeurs dans le temps.",
      ],
      [
        "Grafana",
        "Outil de visualisation : transforme les métriques en tableaux de bord et en alertes.",
      ],
      [
        "Node Exporter",
        "Agent qui expose les métriques système d'une machine.",
      ],
      [
        "bcrypt",
        "Algorithme de hachage de mots de passe, utilisé pour protéger l'accès à l'API Prometheus.",
      ],
      [
        "Docker Compose",
        "Décrit et lance plusieurs conteneurs dans un seul fichier YAML reproductible.",
      ],
    ],
  },
  wireshark: {
    goal: "Démontrer concrètement pourquoi HTTP ne doit pas transporter d'identifiants, et justifier le passage à HTTPS.",
    env: "Page web de test en HTTP, poste client et Wireshark en capture sur l'interface réseau, dans un laboratoire isolé.",
    concepts: [
      [
        "HTTP / HTTPS",
        "HTTP transmet en clair ; HTTPS ajoute le chiffrement TLS et l'authentification du serveur.",
      ],
      [
        "POST / GET",
        "POST place les données dans le corps de la requête, GET dans l'URL (visible partout : historique, logs).",
      ],
      [
        "Filtre d'affichage",
        "Expression Wireshark qui isole les trames utiles dans une capture volumineuse.",
      ],
      ["Sniffing", "Écoute passive du trafic réseau pour en lire le contenu."],
    ],
  },
};
Object.entries(X).forEach(([id, d]) =>
  Object.assign(
    P.find((p) => p.id === id),
    d,
  ),
);
/* La config YAML du workflow doit s'afficher en bloc de code, pas dans le paragraphe */
(() => {
  const s = P.find((p) => p.id === "veille").steps[3],
    i = s[1].indexOf("\n\nname:");
  if (i > 0) {
    s[2] = s[1].slice(i + 2);
    s[1] = s[1].slice(0, i);
  }
})();
/* RAID : l'étape de création du volume manquait */
P.find((p) => p.id === "raid").steps.push([
  "Création du volume logique",
  "Dans le menu du contrôleur de stockage, création d'une matrice : sélection des disques physiques, choix du niveau de RAID selon le besoin (voir comparatif), validation. Le système voit ensuite le volume comme un seul disque.",
]);
