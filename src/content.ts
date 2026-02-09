export type Locale = 'de' | 'en'

const baseUrl = import.meta.env.BASE_URL

export const logoUrl = `${baseUrl}firmenlogo.svg`

export const stockImages = {
  homeHero:
    'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1800&q=80',
  certificationHero:
    'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1800&q=80',
  educationHero:
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=80',
  consultationHero:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80',
  newsHero:
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80',
  aboutHero:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=80',
  contactHero:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80',
  impressumHero:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80',
}

const shared = {
  company: {
    name: 'QMRM GmbH',
    addressLines: ['Musterstraße 12', '68161 Mannheim', 'Deutschland'],
    phone: '+49 621 123 45 67',
    email: 'kontakt@kaiser-mrt-zertifizierung.de',
  },
  professor: {
    name: 'Prof. Dr. med. Clemens Kaiser',
    affiliation: 'Universitätsmedizin Mannheim',
    titleDe: 'Sektionsleiter Mammadiagnostik UMM',
    titleEn: 'Head of Breast Imaging, UMM',
    credentials: 'Dipl. Kfm. (EMA), B.A.',
    phone: '0621-383-8694',
    email: 'mmz@umm.de',
    imageUrl: `${baseUrl}clemens-portrait.jpg`,
    linkedinUrl:
      'https://linkedin.com/in/prof-dr-med-clemens-kaiser-1b765212a?trk=people-guest_people_search-card',
    quoteDe:
      'Brustkrebs rechtzeitig zu detektieren bedeutet Leben retten.',
    quoteEn:
      'Detecting breast cancer early means saving lives.',
  },
}

export const content = {
  de: {
    meta: {
      siteTitle: 'QMRM GmbH',
      siteTagline: 'Zertifizierung · Zweitmeinung · Ausbildung',
    },
    footer: {
      navigation: 'Navigation',
      newsletterTitle: 'Newsletter',
      newsletterText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel semper lorem.',
      newsletterCta: 'Lorem ipsum',
      impressumLabel: 'Impressum',
      taxNumberLabel: 'Steuernummer',
    },
    nav: {
      home: 'MR-Max (Mr Ausbildungssoftware)',
      certification: 'Zertifizierung',
      education: 'Kurse',
      consultation: 'Zweitmeinungsportal',
      news: 'News',
      about: 'Wir über uns',
      contact: 'Kontakt',
      impressum: 'Impressum',
    },
    home: {
      hero: {
        eyebrow: 'Kompetenzzentrum Mamma-MRT',
        title: 'QMRM – Qualität und Sicherheit in der Brustbildgebung.',
        subtitle:
          'Wir verbinden MR-Max Ausbildungssoftware, Zweitmeinungsportal, Zertifizierung und Kurse, damit Radiologien Mamma-MRT zuverlässig, effizient und evidenzbasiert anbieten können.',
        primaryCta: 'Zertifizierung starten',
        secondaryCta: 'Zweitmeinung anfragen',
        badges: ['Evidenzbasiert', 'Qualitätsgesichert', 'Interdisziplinär', 'Fortbildung inklusive'],
        portraitLabel: 'Medizinische Leitung',
      },
      highlights: {
        title: 'Leistungsfelder',
        subtitle:
          'Unsere Angebote rund um Mamma-MRT, Qualitätssicherung und Weiterbildung.',
        items: [
          {
            title: 'MR-Max Ausbildungssoftware',
            text: 'Interaktive Fallbibliothek, strukturierte Prüfungen und Protokollwissen für eine sichere Befundung.',
          },
          {
            title: 'Zweitmeinungsportal',
            text: 'Standardisierte Zweitbefundung durch erfahrene Expert:innen mit nachvollziehbaren Empfehlungen.',
          },
          {
            title: 'Zertifizierung',
            text: 'Auditierung von Zentren, definierte Qualitätskriterien und kontinuierliches Monitoring.',
          },
          {
            title: 'Kurse & Workshops',
            text: 'Fortbildungen für Radiolog:innen und MTR – praxisnah, modular und evidenzbasiert.',
          },
          {
            title: 'Protokolle & Technik',
            text: 'Optimierte MR-Protokolle, DWI und Kontrastmittelstrategien für hohe Bildqualität.',
          },
          {
            title: 'Beratung & Implementierung',
            text: 'Begleitung beim Aufbau oder der Optimierung eines Mamma-MRT-Angebots.',
          },
        ],
      },
      pathways: {
        title: 'So arbeiten wir zusammen',
        subtitle:
          'Ein klarer Ablauf von der Bestandsaufnahme bis zur laufenden Qualitätssicherung.',
        steps: [
          'Kick-off & Bestandsaufnahme: Technik, Personal, Prozesse.',
          'Schulung & MR-Max Training für Ärzt:innen und MTR.',
          'Zertifizierung und Audits nach QMRM-Standard.',
          'Kontinuierliche Qualitätssicherung & Zweitmeinungen.',
        ],
      },
      quote: {
        title: 'Stimmen aus der Praxis',
      },
      news: {
        title: 'Aktuelles & Wissen',
        subtitle:
          'Updates aus Forschung, Kursprogramm und Qualitätsstandards.',
      },
    },
    certification: {
      hero: {
        eyebrow: 'Zertifizierung',
        title: 'Mamma-MRT Zertifizierung mit System.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ligula et.',
      },
      sections: [
        {
          title: 'Programmübersicht',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet turpis eu velit tempus sagittis.',
        },
        {
          title: 'Kriterien & Dokumentation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien sed lorem cursus vestibulum.',
        },
        {
          title: 'Audit & Begleitung',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra, massa sed faucibus.',
        },
      ],
    },
    education: {
      hero: {
        eyebrow: 'Weiterbildung',
        title: 'Fortbildung für eine neue Qualitätsstufe.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at justo sed.',
      },
      tracks: [
        {
          title: 'Grundlagenmodul',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim augue.',
        },
        {
          title: 'Praxisworkshops',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt.',
        },
        {
          title: 'Peer-Review Sessions',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet, elit at.',
        },
      ],
    },
    consultation: {
      hero: {
        eyebrow: 'Beratung',
        title: 'Strategische Beratung rund um Mamma-MRT.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim.',
      },
      offerings: [
        {
          title: 'Standortanalyse',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed lorem.',
        },
        {
          title: 'Prozessdesign',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros.',
        },
        {
          title: 'Qualitätsmonitoring',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant.',
        },
      ],
    },
    news: {
      hero: {
        eyebrow: 'News',
        title: 'Neuigkeiten & Veröffentlichungen',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in mi at.',
      },
      items: [
        {
          title: 'Neue Kursreihe: Mamma-MRT kompakt',
          date: '02.02.2026',
          text: 'Praxisnahe Module für Radiolog:innen und MTR mit Fokus auf Bildqualität und Befundung.',
        },
        {
          title: 'QMRM-Standard aktualisiert',
          date: '20.01.2026',
          text: 'Neue Empfehlungen zu Protokollen, DWI und Qualitätsindikatoren.',
        },
        {
          title: 'Zweitmeinungsportal mit strukturierter Rückmeldung',
          date: '05.01.2026',
          text: 'Standardisierte Befundung und klare Empfehlungen für klinische Entscheidungen.',
        },
      ],
    },
    about: {
      hero: {
        eyebrow: 'Prof. Kaiser',
        title: 'Erfahrung, Forschung, Verantwortung.',
        subtitle:
          'Sektionsleiter Mammadiagnostik UMM und Oberarzt in der Klinik für Radiologie und Nuklearmedizin, Universitätsmedizin Mannheim.',
      },
      profile: {
        title: 'Profil',
        roleLabel: 'Position',
        credentialsLabel: 'Qualifikation',
        phoneLabel: 'Telefon',
        emailLabel: 'E-Mail',
        linkedinLabel: 'LinkedIn',
      },
      timeline: {
        person: {
          name: 'Prof. Dr. med. Clemens Kaiser',
          yearsOrTagline: 'Sektionsleiter Mammadiagnostik UMM',
          subtitleLine: 'Oberarzt, Klinik fuer Radiologie und Nuklearmedizin',
          subtitleLine2: 'Universitaetsmedizin Mannheim',
        },
        // Timeline events: edit or replace these items as needed.
        events: [
          {
            year: '2010',
            title: 'Dissertation',
            text:
              'Duct-Obstruction-Sign: DCIS vs. Papillom in der MR-Mammographie (FSU Jena).',
          },
          {
            year: '2011',
            title: 'Fachgesellschaften',
            text: 'Mitgliedschaften: DRG, RSNA und ESR.',
          },
          {
            year: '2013',
            title: 'Research Rotation',
            text: 'Radiologie, Universitaetsklinikum Jena.',
          },
          {
            year: '2014',
            title: 'Mamma-MRT Standards',
            text:
              'Schwerpunkt auf standardisierter Befundung und Protokollqualitaet.',
          },
          {
            year: '2015',
            title: 'Qualitaet & Befundung',
            text:
              'Fokus auf diagnostische Zeichen und strukturierte Befundung.',
          },
          {
            year: '2016',
            title: 'Erste Publikation',
            text: 'Erste wissenschaftliche Publikation zur MR-Mammographie angenommen.',
          },
          {
            year: '2016',
            title: 'Gutachtertaetigkeit',
            text: 'Beginn als Reviewer fuer Fachzeitschriften.',
          },
          {
            year: '2016',
            title: 'Hochschuldidaktik',
            text: 'Baden-Wuerttemberg Zertifikat (MQ 1 & 2).',
          },
          {
            year: '2017',
            title: 'Research Rotation',
            text: 'DKFZ Heidelberg, Abteilung Radiologie.',
          },
          {
            year: '2019',
            title: 'Habilitation',
            text:
              'Optimierung der MR-Mammographie auf dem Weg zur Screening-Methode.',
          },
          {
            year: '2019',
            title: 'Studienleitung',
            text: 'Principal investigator: USCT und MA-DETECT.',
          },
          {
            year: '2020',
            title: 'Mamma-MRT Oekonomie',
            text:
              'Kosten-Nutzen-Analysen der MR-Mammographie (u.a. TK-Study).',
          },
          {
            year: '2021',
            title: 'Screening & Dichte Brueste',
            text:
              'Evidenz zu Abbreviated MRI und Screening bei dichtem Gewebe.',
          },
          {
            year: '2021',
            title: 'Technik & Sequenzen',
            text:
              'Arbeiten zu beschleunigten Sequenzen und Bildqualitaet in der Mamma-MRT.',
          },
          {
            year: 'Heute',
            title: 'Leitung & Expertise',
            text:
              'Sektionsleiter Mammadiagnostik, >10.000 Mamma-MRT Befundungen.',
          },
        ],
      },
      team: {
        title: 'Team',
        subtitle:
          'Ein spezialisiertes Team aus medizinischer Leitung, Radiolog:innen und administrativer Assistenz.',
        leadLabel: 'Medizinische Leitung',
        assistantLabel: 'Administrative Assistenz (Platzhalter)',
        radiologistsLabel: 'Fachradiolog:innen (Platzhalter)',
        partnersTitle: 'Kooperationspartner',
        partnersSubtitle:
          'Kooperationspartner aus Forschung und klinischer Praxis.',
        leadHighlights: [
          'Langjaehrige Erfahrung in der Mamma-MRT',
          'Qualitaetssicherung und Befundungsstandards',
          'Forschung und Lehre in der Mammadiagnostik',
          'Interdisziplinaere Beratung',
        ],
        assistantHighlights: [
          'Koordination von Terminen und Kommunikation',
          'Unterstuetzung von Kursen und Veranstaltungen',
          'Organisation von Zertifizierungsunterlagen',
        ],
        radiologistHighlights: [
          'Spezialisierte Befundung der Mamma-MRT',
          'Zweitmeinungen mit strukturierter Rueckmeldung',
          'Training und Supervision in MR-Max',
        ],
        partners: [
          {
            name: 'Prof. Dr. med. Ulrike Attenberger',
            role: 'Direktorin, Institut fuer Klinische Radiologie und Nuklearmedizin',
            affiliation: 'Universitaetsmedizin Mannheim',
            focus: [
              'Leitung klinischer Radiologie und Nuklearmedizin',
              'Schwerpunkt in onkologischer Bildgebung',
              'Kooperation in der Mamma-MRT',
            ],
            linkLabel: 'Wikipedia',
            linkUrl: 'https://de.wikipedia.org/wiki/Ulrike_Attenberger',
          },
        ],
        detailsTitle: 'Vita & Publikationen',
        detailsIntro:
          'Vollstaendige Vita-Informationen sind aufklappbar. Platzhalter werden spaeter ersetzt.',
        detailsLeadSummary: 'Vollstaendige Vita von Prof. Kaiser anzeigen',
        detailsAssistantSummary: 'Vita Administrative Assistenz (Platzhalter)',
        detailsRadiologistsSummary: 'Vita Fachradiolog:innen (Platzhalter)',
        detailsPlaceholderText:
          'Platzhalter fuer Ausbildung, Stationen, Schwerpunkte und Publikationen.',
      },
      sectionsTitle: 'Curriculum Vitae & Publikationen',
      sections: [
        {
          title: 'Curriculum Vitae',
          entries: [
            'Prof. Dr. med. Clemens Kaiser',
            'Dipl. Kfm. (EMA), B.A.',
            'Sektionsleiter Mammadiagnostik',
            'Oberarzt in der Klinik für Radiologie und Nuklearmedizin, Universitätsmedizin Mannheim',
          ],
        },
        {
          title: 'Klinische Schwerpunkte',
          entries: ['Multimodale Mammadiagnostik', 'MR-Mammographie'],
        },
        {
          title: 'Wissenschaftliche Tätigkeit',
          entries: [
            'Juni 2019: Habilitation im Fach Radiologie zum Thema „Optimierung der MR-Mammographie auf ihrem Weg zur Screening-Methode“ (Venia legendi)',
            'Januar 2017 – Mai 2017: Research rotation an der Abteilung für Radiologie, Deutsches Krebsforschungszentrum (DKFZ), Heidelberg',
            'Juli 2013 – Oktober 2013: Research rotation in der radiologischen Abteilung, Universitätsklinikum Jena',
            'November 2010: Dissertation an der Friedrich-Schiller-Universität Jena (09.11.2010). Thema „Duct-Obstruction-Sign – Gangektasie zur Abklärung der Differentialdiagnose DCIS versus Papillom in der MR-Mammographie“. Doktorvater: Prof. Dr. med. Pascal Baltzer (Gesamtprädikat: Magna cum laude).',
          ],
        },
        {
          title: 'Weitere Tätigkeiten und Qualifikationen',
          entries: [
            'Dezember 2016: Baden-Württemberg Zertifikat für Hochschuldidaktik in der Medizin (MQ 1 & 2)',
          ],
        },
        {
          title: 'Tätigkeit als Gutachter von wissenschaftlichen Fachzeitschriften',
          entries: [
            'European Radiology',
            'Investigative Radiology',
            'Academic Radiology',
            'European Journal of Radiology',
          ],
        },
        {
          title: 'Mitgliedschaften in Fachgesellschaften',
          entries: [
            'Seit 2016: Deutsche Gesellschaft für Ultraschall in der Medizin (Degum)',
            'Seit 2011: Deutsche Röntgengesellschaft (DRG)',
            'Seit 2011: Radiological Society of North America (RSNA)',
            'Seit 2011: European Society of Radiology (ESR)',
          ],
        },
        {
          title: 'Erfahrungen in klinischen Studien',
          entries: ['Principal investigator: USCT', 'Principal investigator: MA-DETECT'],
        },
        {
          title: 'Publikationen',
          variant: 'long',
          entries: [
            '1. Axillary lymph node characterization in breast cancer patients using magnetic resonance mammography: a prospective comparative study with FDG PET-CT and healthy women. J. Krammer, K. Wasser, A. Schnitzer, T. Henzler, S. Schoenberg, Kaiser CG. Eur J Radiol. 2013;82:2194-2198. Impact factor: 2,518',
            '2. Is "prepectoral edema" a morphologic sign for malignant breast tumors? C.G. Kaiser, M. Herold, P. Baltzer, M. Dietzel, J. Krammer, M. Gajda, O. Camara, S.O. Schoenberg, W.A. Kaiser, K. Wasser. Acad Radiol. 22 (2015) 684-689. Impact factor: 1,966',
            '3. Magnetic resonance imaging of intraductal papillomas: typical findings and differential diagnosis. M. Dietzel, C.G. Kaiser*, P. Baltzer. J Comput Assist Tomogr. 39 (2015) 176-184. Impact factor: 1,470',
            '4. DCE-MRI of the breast in a stand-alone setting outside a complementary strategy results of the TK-study. C.G. Kaiser, C. Reich, M. Dietzel, P.A.T. Baltzer, J. Krammer, K. Wasser, S.O. Schoenberg, W.A. Kaiser. Eur Radiol. 25 (2015) 1793-1800. Impact factor: 3,64',
            '5. Focal transitional mastitis in MR-mammography: preliminary findings. C.G. Kaiser*, M. Dietzel, P. Baltzer, A. Kaiser, T. Henzler, W.A. Kaiser, J. Krammer. European Journal of Radiology Open 3 (2016): 117-22. Impact factor: 3,528',
            '6. The value of "constant sharpness" as a diagnostic sign in MR-Mammography. C.G. Kaiser, P. Baltzer, A.K. Kaiser, J. Krammer, M. Uder, W.A. Kaiser, M. Dietzel. Eur J Radiol Open. 3 (2016) 236-238. Impact factor: 3,52',
            '7. Differentiation of ductal carcinoma in situ versus fibrocystic changes by magnetic resonance imaging: are there pathognomonic imaging features? M. Dietzel, C.G. Kaiser*, E. Wenkel, P. Clauser, M. Uder, R. Schulz-Wendtland, P.A. Baltzer. Acta Radiol. (2017) 284185117690420. Impact factor: 2,009',
            '8. Prognostic Value of "Prepectoral Edema" in MR-Mammography. C.G. Kaiser, M. Herold, J. Krammer, P. Baltzer, M. Gajda, O. Camara, S. Schoenberg, W.A. Kaiser, M. Dietzel. Anticancer Res. 37 (2017) 1989-1995. Impact factor: 1.895',
            '9. The Assessment of Background Parenchymal Enhancement (BPE) in a High-Risk Population: What Causes BPE? C. You, A. K. Kaiser, P. Baltzer, J. Krammer, Y. Gu, W. Peng, S. Schoenberg, C.G. Kaiser. Translational Oncology 11, No. 2 (2018): 243-49. Impact factor: 3,025',
            '10. Value of ductal obstruction sign in the differentiation of benign and malignant breast lesions at MR imaging. P.A.T. Baltzer, C.G. Kaiser, M. Dietzel, T. Vag, A.B. Herzog, M. Gajda, O. Camara, W.A. Kaiser. Eur J Radiol. 2010;75:e18-e21. Impact factor: 2,518',
            '11. Combined reading of Contrast Enhanced and Diffusion Weighted Magnetic Resonance Imaging by using a simple sum score. A. Baltzer, M. Dietzel, C.G. Kaiser, P.A. Baltzer. Eur Radiol. (2015). Impact factor: 3,64',
            '12. Perirenal Edema as a potential hint towards primary hypertension-Preliminary findings in MRI breast cancer staging. C.G. Kaiser, P. Baltzer, A.K. Kaiser, J. Knaudt, T. Henzler, W.A. Kaiser, M. Dietzel. Eur J Radiol Open. 3 (2016) 123-126. Impact factor: 3,528',
            '13. Cost-effectiveness of MR-mammography as a solitary imaging technique in women with dense breasts: an economic evaluation of the prospective TK-Study. Froelich MF, Kaiser CG (2020) Eur Radiol 31:967-974. Impact factor: 5.315',
            '14. Cost-effectiveness of MR-Mammography vs. conventional Mammography in screening patients at intermediate risk of breast cancer - A model-based economic evaluation. Kaiser CG, Dietzel M, Vag T, Froelich MF (2020) Eur J Radiol 136:109355. Impact factor: 2.687',
            '15. Impact of specificity on cost-effectiveness of screening women at high risk of breast cancer with magnetic resonance imaging, mammography and ultrasound. Kaiser CG, Dietzel M, Vag T, Ruebenthaler J, Froelich M, Tollens F (2021) Eur J Radiol 137:109576. Impact factor: 2.687',
            '16. Cost-Effectiveness of Digital Breast Tomosynthesis vs. Abbreviated Breast MRI for Screening Women with Intermediate Risk of Breast Cancer-How Low-Cost Must MRI Be? Tollens F, Baltzer PAT, Dietzel M, Ruebenthaler J, Froelich M, Kaiser CG (2021) Cancers 13:1241. Impact factor: 6.639',
            '17. T2-weighted Imaging of the Breast at 1.5T Using Simultaneous Multi-slice Acceleration. Riffel J, Kannengiesser S, Schoenberg SO, Overhoff D, Riffel P, Kaiser CG (2021) Anticancer Res 41:4423-4429. Impact factor: 2.480',
            '18. Cost-Effectiveness of MR-Mammography in Breast Cancer Screening of Women With Extremely Dense Breasts After Two Rounds of Screening. Tollens F, Baltzer PAT, Dietzel M, Kunz W, Ruebenthaler J, Froelich M, Kaiser CG (2021) Frontiers in Oncology 11:3449. Impact factor: 6.244',
            '19. Motion artifacts, lesion type, and parenchymal enhancement in breast MRI: what does really influence diagnostic accuracy? Clauser P, Dietzel M, Weber M, Kaiser CG, Baltzer PAT (2019) Acta Radiol 60:19-27. Impact factor: 1,603',
            '20. Cost-effectiveness analysis in radiology: methods, results and implications. Froelich MF, Kunz WG, Tollens F, Schnitzer ML, Schoenberg SO, Kaiser CG, Ruebenthaler J, Rofo. (2021) Impact factor: 1,867',
          ],
        },
      ],
    },
    contact: {
      hero: {
        eyebrow: 'Kontakt',
        title: 'Wir freuen uns auf Ihre Anfrage.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta.',
      },
      form: {
        name: 'Name',
        email: 'E-Mail',
        organization: 'Organisation',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis.',
      },
      badges: ['Zertifizierung', 'Weiterbildung', 'Beratung'],
    },
    impressum: {
      hero: {
        eyebrow: 'Impressum',
        title: 'Rechtliche Angaben',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus.',
      },
      legal: {
        sections: [
          {
            title: 'Angaben gemäß § 5 TMG',
            text: 'QMRM GmbH\nMusterstraße 12\n68161 Mannheim\nDeutschland',
          },
          {
            title: 'Vertreten durch',
            text: 'Prof. Dr. med. Clemens Kaiser',
          },
          {
            title: 'Kontakt',
            text: 'Telefon: +49 621 123 45 67\nE-Mail: kontakt@kaiser-mrt-zertifizierung.de',
          },
          {
            title: 'Registereintrag',
            text: 'Registergericht: Amtsgericht Mannheim\nRegisternummer: HRB 000000',
          },
          {
            title: 'Umsatzsteuer-ID',
            text: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE000000000',
          },
          {
            title: 'Steuernummer',
            text: 'Steuernummer: 000/000/00000',
          },
          {
            title: 'Verantwortlich für den Inhalt',
            text: 'Prof. Dr. med. Clemens Kaiser\nMusterstraße 12\n68161 Mannheim',
          },
        ],
      },
    },
  },
  en: {
    meta: {
      siteTitle: 'QMRM GmbH',
      siteTagline: 'Certification · Second Opinion · Training',
    },
    footer: {
      navigation: 'Navigation',
      newsletterTitle: 'Newsletter',
      newsletterText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel semper lorem.',
      newsletterCta: 'Lorem ipsum',
      impressumLabel: 'Imprint',
      taxNumberLabel: 'Tax number',
    },
    nav: {
      home: 'MR-Max (Mr Ausbildungssoftware)',
      certification: 'Certification',
      education: 'Courses',
      consultation: 'Second opinion portal',
      news: 'News',
      about: 'About us',
      contact: 'Contact',
      impressum: 'Imprint',
    },
    home: {
      hero: {
        eyebrow: 'Breast MRI Center of Excellence',
        title: 'QMRM – Quality and confidence in breast imaging.',
        subtitle:
          'We combine MR-Max training software, second-opinion services, certification, and courses so radiology teams can deliver breast MRI reliably, efficiently, and evidence-based.',
        primaryCta: 'Start certification',
        secondaryCta: 'Request second opinion',
        badges: ['Evidence-based', 'Quality assured', 'Interdisciplinary', 'Training included'],
        portraitLabel: 'Medical leadership',
      },
      highlights: {
        title: 'Core services',
        subtitle:
          'Everything around breast MRI, quality assurance, and education.',
        items: [
          {
            title: 'MR-Max training software',
            text: 'Interactive case library, structured assessments, and protocol knowledge for confident reporting.',
          },
          {
            title: 'Second-opinion portal',
            text: 'Structured second reads by experienced experts with clear recommendations.',
          },
          {
            title: 'Certification',
            text: 'Center audits, defined quality criteria, and continuous monitoring.',
          },
          {
            title: 'Courses & workshops',
            text: 'Practical training for radiologists and technologists — modular and evidence-based.',
          },
          {
            title: 'Protocols & technology',
            text: 'Optimized MRI protocols, DWI and contrast strategies for high image quality.',
          },
          {
            title: 'Consulting & implementation',
            text: 'Guidance to set up or optimize a breast MRI service.',
          },
        ],
      },
      pathways: {
        title: 'How we work together',
        subtitle:
          'A clear workflow from assessment to continuous quality assurance.',
        steps: [
          'Kick-off & baseline review: technology, staff, processes.',
          'Training & MR-Max education for radiologists and technologists.',
          'Certification and audits based on the QMRM standard.',
          'Ongoing quality assurance & second opinions.',
        ],
      },
      quote: {
        title: 'From the field',
      },
      news: {
        title: 'Updates & insights',
        subtitle:
          'Updates from research, course program, and quality standards.',
      },
    },
    certification: {
      hero: {
        eyebrow: 'Certification',
        title: 'Breast MRI certification with clarity.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ligula et.',
      },
      sections: [
        {
          title: 'Program overview',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet turpis eu velit tempus sagittis.',
        },
        {
          title: 'Criteria & documentation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien sed lorem cursus vestibulum.',
        },
        {
          title: 'Audit & guidance',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra, massa sed faucibus.',
        },
      ],
    },
    education: {
      hero: {
        eyebrow: 'Education',
        title: 'Training for a new level of quality.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at justo sed.',
      },
      tracks: [
        {
          title: 'Foundations module',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim augue.',
        },
        {
          title: 'Hands-on workshops',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt.',
        },
        {
          title: 'Peer review sessions',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet, elit at.',
        },
      ],
    },
    consultation: {
      hero: {
        eyebrow: 'Consulting',
        title: 'Strategic guidance for breast MRI.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim.',
      },
      offerings: [
        {
          title: 'Site analysis',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed lorem.',
        },
        {
          title: 'Process design',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros.',
        },
        {
          title: 'Quality monitoring',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant.',
        },
      ],
    },
    news: {
      hero: {
        eyebrow: 'News',
        title: 'Updates & publications',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in mi at.',
      },
      items: [
        {
          title: 'New course series: Breast MRI essentials',
          date: '02 Feb 2026',
          text: 'Hands-on modules for radiologists and technologists focused on quality and reporting.',
        },
        {
          title: 'QMRM standard updated',
          date: '20 Jan 2026',
          text: 'New recommendations for protocols, DWI, and quality indicators.',
        },
        {
          title: 'Second-opinion portal with structured feedback',
          date: '05 Jan 2026',
          text: 'Standardized reporting and clear recommendations for clinical decisions.',
        },
      ],
    },
    about: {
      hero: {
        eyebrow: 'Prof. Kaiser',
        title: 'Experience, research, responsibility.',
        subtitle:
          'Head of Breast Imaging and senior physician in the Department of Radiology and Nuclear Medicine at Mannheim University Medical Center.',
      },
      profile: {
        title: 'Profile',
        roleLabel: 'Position',
        credentialsLabel: 'Qualification',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
      },
      timeline: {
        person: {
          name: 'Prof. Dr. med. Clemens Kaiser',
          yearsOrTagline: 'Head of Breast Imaging, UMM',
          subtitleLine: 'Senior Physician, Department of Radiology and Nuclear Medicine',
          subtitleLine2: 'Mannheim University Medical Center',
        },
        // Timeline events: edit or replace these items as needed.
        events: [
          {
            year: '2010',
            title: 'Doctoral thesis',
            text:
              'Duct-Obstruction-Sign: DCIS vs papilloma in breast MRI (FSU Jena).',
          },
          {
            year: '2011',
            title: 'Professional societies',
            text: 'Memberships: DRG, RSNA, and ESR.',
          },
          {
            year: '2013',
            title: 'Research rotation',
            text: 'Radiology, University Hospital Jena.',
          },
          {
            year: '2014',
            title: 'Breast MRI standards',
            text: 'Focus on standardized reporting and protocol quality.',
          },
          {
            year: '2015',
            title: 'Quality & reporting',
            text: 'Focus on diagnostic signs and structured reporting.',
          },
          {
            year: '2016',
            title: 'First publication',
            text: 'First scientific paper on breast MRI accepted.',
          },
          {
            year: '2016',
            title: 'Reviewer roles',
            text: 'Started reviewing for peer‑reviewed journals.',
          },
          {
            year: '2016',
            title: 'Teaching qualification',
            text: 'Baden-Wuerttemberg certificate (MQ 1 & 2).',
          },
          {
            year: '2017',
            title: 'Research rotation',
            text: 'DKFZ Heidelberg, Department of Radiology.',
          },
          {
            year: '2019',
            title: 'Habilitation',
            text: 'Optimizing breast MRI on its way to a screening method.',
          },
          {
            year: '2019',
            title: 'Clinical studies lead',
            text: 'Principal investigator: USCT and MA-DETECT.',
          },
          {
            year: '2020',
            title: 'Breast MRI economics',
            text: 'Cost-effectiveness work on MR-mammography (incl. TK-Study).',
          },
          {
            year: '2021',
            title: 'Screening evidence',
            text: 'Abbreviated MRI and dense-breast screening evidence.',
          },
          {
            year: '2021',
            title: 'Technology & sequences',
            text: 'Work on accelerated sequences and breast MRI image quality.',
          },
          {
            year: 'Today',
            title: 'Leadership & expertise',
            text: 'Head of Breast Imaging, 10,000+ breast MRI reads.',
          },
        ],
      },
      team: {
        title: 'Team',
        subtitle:
          'A specialized team spanning medical leadership, radiologists, and administrative support.',
        leadLabel: 'Medical leadership',
        assistantLabel: 'Administrative assistant (Placeholder)',
        radiologistsLabel: 'Specialist radiologists (Placeholder)',
        partnersTitle: 'Cooperation partners',
        partnersSubtitle:
          'Partners from research and clinical practice.',
        leadHighlights: [
          'Extensive experience in breast MRI',
          'Quality assurance and reporting standards',
          'Research and teaching in breast imaging',
          'Interdisciplinary consulting',
        ],
        assistantHighlights: [
          'Scheduling and communication coordination',
          'Support for courses and events',
          'Organization of certification materials',
        ],
        radiologistHighlights: [
          'Specialist breast MRI reporting',
          'Second opinions with structured feedback',
          'Training and supervision in MR-Max',
        ],
        partners: [
          {
            name: 'Prof. Dr. med. Ulrike Attenberger',
            role: 'Director, Institute of Clinical Radiology and Nuclear Medicine',
            affiliation: 'Mannheim University Medical Center',
            focus: [
              'Leadership in clinical radiology and nuclear medicine',
              'Focus on oncologic imaging',
              'Collaboration in breast MRI',
            ],
            linkLabel: 'Wikipedia',
            linkUrl: 'https://de.wikipedia.org/wiki/Ulrike_Attenberger',
          },
        ],
        detailsTitle: 'Vita & Publications',
        detailsIntro:
          'Full vita information is available in expandable sections. Placeholders will be updated later.',
        detailsLeadSummary: 'Show full vita for Prof. Kaiser',
        detailsAssistantSummary: 'Administrative assistant vita (Placeholder)',
        detailsRadiologistsSummary: 'Specialist radiologists vita (Placeholder)',
        detailsPlaceholderText:
          'Placeholder for education, positions, focus areas, and publications.',
      },
      sectionsTitle: 'Curriculum Vitae & Publications',
      sections: [
        {
          title: 'Curriculum Vitae',
          entries: [
            'Prof. Dr. med. Clemens Kaiser',
            'Dipl. Kfm. (EMA), B.A.',
            'Head of Breast Imaging',
            'Senior Physician, Department of Radiology and Nuclear Medicine, Mannheim University Medical Center',
          ],
        },
        {
          title: 'Clinical focus',
          entries: ['Multimodal breast imaging', 'Breast MRI'],
        },
        {
          title: 'Scientific activity',
          entries: [
            'June 2019: Habilitation in Radiology on the topic “Optimizing breast MRI on its way to a screening method” (Venia legendi)',
            'January 2017 – May 2017: Research rotation at the Department of Radiology, German Cancer Research Center (DKFZ), Heidelberg',
            'July 2013 – October 2013: Research rotation in the radiology department, University Hospital Jena',
            'November 2010: Dissertation at Friedrich Schiller University Jena (09.11.2010). Topic “Duct-Obstruction-Sign – duct ectasia for differential diagnosis of DCIS versus papilloma in breast MRI”. Supervisor: Prof. Dr. med. Pascal Baltzer (overall grade: magna cum laude).',
          ],
        },
        {
          title: 'Additional activities and qualifications',
          entries: [
            'December 2016: Baden-Württemberg certificate for higher education didactics in medicine (MQ 1 & 2)',
          ],
        },
        {
          title: 'Reviewer for scientific journals',
          entries: [
            'European Radiology',
            'Investigative Radiology',
            'Academic Radiology',
            'European Journal of Radiology',
          ],
        },
        {
          title: 'Memberships in professional societies',
          entries: [
            'Since 2016: Deutsche Gesellschaft für Ultraschall in der Medizin (Degum)',
            'Since 2011: Deutsche Röntgengesellschaft (DRG)',
            'Since 2011: Radiological Society of North America (RSNA)',
            'Since 2011: European Society of Radiology (ESR)',
          ],
        },
        {
          title: 'Clinical studies experience',
          entries: ['Principal investigator: USCT', 'Principal investigator: MA-DETECT'],
        },
        {
          title: 'Publications',
          variant: 'long',
          entries: [
            '1. Axillary lymph node characterization in breast cancer patients using magnetic resonance mammography: a prospective comparative study with FDG PET-CT and healthy women. J. Krammer, K. Wasser, A. Schnitzer, T. Henzler, S. Schoenberg, Kaiser CG. Eur J Radiol. 2013;82:2194-2198. Impact factor: 2,518',
            '2. Is "prepectoral edema" a morphologic sign for malignant breast tumors? C.G. Kaiser, M. Herold, P. Baltzer, M. Dietzel, J. Krammer, M. Gajda, O. Camara, S.O. Schoenberg, W.A. Kaiser, K. Wasser. Acad Radiol. 22 (2015) 684-689. Impact factor: 1,966',
            '3. Magnetic resonance imaging of intraductal papillomas: typical findings and differential diagnosis. M. Dietzel, C.G. Kaiser*, P. Baltzer. J Comput Assist Tomogr. 39 (2015) 176-184. Impact factor: 1,470',
            '4. DCE-MRI of the breast in a stand-alone setting outside a complementary strategy results of the TK-study. C.G. Kaiser, C. Reich, M. Dietzel, P.A.T. Baltzer, J. Krammer, K. Wasser, S.O. Schoenberg, W.A. Kaiser. Eur Radiol. 25 (2015) 1793-1800. Impact factor: 3,64',
            '5. Focal transitional mastitis in MR-mammography: preliminary findings. C.G. Kaiser*, M. Dietzel, P. Baltzer, A. Kaiser, T. Henzler, W.A. Kaiser, J. Krammer. European Journal of Radiology Open 3 (2016): 117-22. Impact factor: 3,528',
            '6. The value of "constant sharpness" as a diagnostic sign in MR-Mammography. C.G. Kaiser, P. Baltzer, A.K. Kaiser, J. Krammer, M. Uder, W.A. Kaiser, M. Dietzel. Eur J Radiol Open. 3 (2016) 236-238. Impact factor: 3,52',
            '7. Differentiation of ductal carcinoma in situ versus fibrocystic changes by magnetic resonance imaging: are there pathognomonic imaging features? M. Dietzel, C.G. Kaiser*, E. Wenkel, P. Clauser, M. Uder, R. Schulz-Wendtland, P.A. Baltzer. Acta Radiol. (2017) 284185117690420. Impact factor: 2,009',
            '8. Prognostic Value of "Prepectoral Edema" in MR-Mammography. C.G. Kaiser, M. Herold, J. Krammer, P. Baltzer, M. Gajda, O. Camara, S. Schoenberg, W.A. Kaiser, M. Dietzel. Anticancer Res. 37 (2017) 1989-1995. Impact factor: 1.895',
            '9. The Assessment of Background Parenchymal Enhancement (BPE) in a High-Risk Population: What Causes BPE? C. You, A. K. Kaiser, P. Baltzer, J. Krammer, Y. Gu, W. Peng, S. Schoenberg, C.G. Kaiser. Translational Oncology 11, No. 2 (2018): 243-49. Impact factor: 3,025',
            '10. Value of ductal obstruction sign in the differentiation of benign and malignant breast lesions at MR imaging. P.A.T. Baltzer, C.G. Kaiser, M. Dietzel, T. Vag, A.B. Herzog, M. Gajda, O. Camara, W.A. Kaiser. Eur J Radiol. 2010;75:e18-e21. Impact factor: 2,518',
            '11. Combined reading of Contrast Enhanced and Diffusion Weighted Magnetic Resonance Imaging by using a simple sum score. A. Baltzer, M. Dietzel, C.G. Kaiser, P.A. Baltzer. Eur Radiol. (2015). Impact factor: 3,64',
            '12. Perirenal Edema as a potential hint towards primary hypertension-Preliminary findings in MRI breast cancer staging. C.G. Kaiser, P. Baltzer, A.K. Kaiser, J. Knaudt, T. Henzler, W.A. Kaiser, M. Dietzel. Eur J Radiol Open. 3 (2016) 123-126. Impact factor: 3,528',
            '13. Cost-effectiveness of MR-mammography as a solitary imaging technique in women with dense breasts: an economic evaluation of the prospective TK-Study. Froelich MF, Kaiser CG (2020) Eur Radiol 31:967-974. Impact factor: 5.315',
            '14. Cost-effectiveness of MR-Mammography vs. conventional Mammography in screening patients at intermediate risk of breast cancer - A model-based economic evaluation. Kaiser CG, Dietzel M, Vag T, Froelich MF (2020) Eur J Radiol 136:109355. Impact factor: 2.687',
            '15. Impact of specificity on cost-effectiveness of screening women at high risk of breast cancer with magnetic resonance imaging, mammography and ultrasound. Kaiser CG, Dietzel M, Vag T, Ruebenthaler J, Froelich M, Tollens F (2021) Eur J Radiol 137:109576. Impact factor: 2.687',
            '16. Cost-Effectiveness of Digital Breast Tomosynthesis vs. Abbreviated Breast MRI for Screening Women with Intermediate Risk of Breast Cancer-How Low-Cost Must MRI Be? Tollens F, Baltzer PAT, Dietzel M, Ruebenthaler J, Froelich M, Kaiser CG (2021) Cancers 13:1241. Impact factor: 6.639',
            '17. T2-weighted Imaging of the Breast at 1.5T Using Simultaneous Multi-slice Acceleration. Riffel J, Kannengiesser S, Schoenberg SO, Overhoff D, Riffel P, Kaiser CG (2021) Anticancer Res 41:4423-4429. Impact factor: 2.480',
            '18. Cost-Effectiveness of MR-Mammography in Breast Cancer Screening of Women With Extremely Dense Breasts After Two Rounds of Screening. Tollens F, Baltzer PAT, Dietzel M, Kunz W, Ruebenthaler J, Froelich M, Kaiser CG (2021) Frontiers in Oncology 11:3449. Impact factor: 6.244',
            '19. Motion artifacts, lesion type, and parenchymal enhancement in breast MRI: what does really influence diagnostic accuracy? Clauser P, Dietzel M, Weber M, Kaiser CG, Baltzer PAT (2019) Acta Radiol 60:19-27. Impact factor: 1,603',
            '20. Cost-effectiveness analysis in radiology: methods, results and implications. Froelich MF, Kunz WG, Tollens F, Schnitzer ML, Schoenberg SO, Kaiser CG, Ruebenthaler J, Rofo. (2021) Impact factor: 1,867',
          ],
        },
      ],
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        title: 'We look forward to your request.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta.',
      },
      form: {
        name: 'Name',
        email: 'Email',
        organization: 'Organization',
        message: 'Message',
        submit: 'Send message',
        hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis.',
      },
      badges: ['Certification', 'Education', 'Consulting'],
    },
    impressum: {
      hero: {
        eyebrow: 'Imprint',
        title: 'Legal information',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus.',
      },
      legal: {
        sections: [
          {
            title: 'Information according to § 5 TMG',
            text: 'QMRM GmbH\nMusterstraße 12\n68161 Mannheim\nGermany',
          },
          {
            title: 'Represented by',
            text: 'Prof. Dr. med. Clemens Kaiser',
          },
          {
            title: 'Contact',
            text: 'Phone: +49 621 123 45 67\nEmail: kontakt@kaiser-mrt-zertifizierung.de',
          },
          {
            title: 'Register entry',
            text: 'Register court: Amtsgericht Mannheim\nRegister number: HRB 000000',
          },
          {
            title: 'VAT ID',
            text: 'VAT identification number according to § 27 a Umsatzsteuergesetz: DE000000000',
          },
          {
            title: 'Tax number',
            text: 'Tax number: 000/000/00000',
          },
          {
            title: 'Responsible for content',
            text: 'Prof. Dr. med. Clemens Kaiser\nMusterstraße 12\n68161 Mannheim',
          },
        ],
      },
    },
  },
} as const

export const sharedContent = shared
