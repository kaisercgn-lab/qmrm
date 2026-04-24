import re

files = [
    ("src/content.ts", "de", 
        r"newsletterText: 'Erhalten Sie Updates.*?'", 
        r"newsletterText: 'Die Seite befindet sich aktuell im Aufbau. Melden Sie sich für den Newsletter an, um informiert zu bleiben.'",
        """      upload: {
        title: 'DICOM Upload',
        text: 'Laden Sie hier Ihre DICOM-Daten hoch.',
        requirement: 'Voraussetzung für die Zweitmeinung ist die Nutzung der QMRM-Protokolle, die unter MR-Max (Protokollwissen) heruntergeladen werden können.',
        button: 'Dateien hochladen',
      },""",
        """    download: {
      title: 'Protokollwissen',
      text: 'Laden Sie hier das aktuelle QMRM-Protokoll (.edx) herunter.',
      button: '.edx Datei herunterladen',
      fileUrl: '/protocol.edx'
    },"""
    ),
    ("src/content.ts", "en", 
        r"newsletterText: 'Receive updates.*?'", 
        r"newsletterText: 'The site is currently under construction. Sign up for the newsletter to stay informed.'",
        """      upload: {
        title: 'DICOM Upload',
        text: 'Upload your DICOM data here.',
        requirement: 'A prerequisite for the second opinion is the use of the QMRM protocols, which can be downloaded under MR-Max (Protocol Knowledge).',
        button: 'Upload Files',
      },""",
        """    download: {
      title: 'Protocol Knowledge',
      text: 'Download the current QMRM protocol (.edx) here.',
      button: 'Download .edx file',
      fileUrl: '/protocol.edx'
    },"""
    ),
    ("src/locales/ru.ts", None,
        r"newsletterText: 'Получайте обновления.*?'",
        r"newsletterText: 'Сайт находится в стадии разработки. Подпишитесь на рассылку, чтобы оставаться в курсе.'",
        """      upload: {
        title: 'Загрузка DICOM',
        text: 'Загрузите ваши данные DICOM здесь.',
        requirement: 'Обязательным условием для второго мнения является использование протоколов QMRM, которые можно скачать в разделе MR-Max (Знание протоколов).',
        button: 'Загрузить файлы',
      },""",
        """    download: {
      title: 'База протоколов',
      text: 'Скачайте актуальный протокол QMRM (.edx) здесь.',
      button: 'Скачать файл .edx',
      fileUrl: '/protocol.edx'
    },"""
    ),
    ("src/locales/tr.ts", None,
        r"newsletterText: 'Araştırmalar ve kurs.*?'",
        r"newsletterText: 'Site şu anda yapım aşamasındadır. Haberdar olmak için bültene kaydolun.'",
        """      upload: {
        title: 'DICOM Yükleme',
        text: 'DICOM verilerinizi buraya yükleyin.',
        requirement: 'İkinci bir görüş için ön koşul, MR-Max (Protokol Bilgisi) altında indirilebilen QMRM protokollerinin kullanılmasıdır.',
        button: 'Dosyaları Yükle',
      },""",
        """    download: {
      title: 'Protokol Bilgisi',
      text: 'Güncel QMRM protokolünü (.edx) buradan indirin.',
      button: '.edx Dosyasını İndir',
      fileUrl: '/protocol.edx'
    },"""
    ),
    ("src/locales/fr.ts", None,
        r"newsletterText: 'Recevez des mises à jour.*?'",
        r"newsletterText: 'Le site est actuellement en construction. Inscrivez-vous à la newsletter pour rester informé.'",
        """      upload: {
        title: 'Téléchargement DICOM',
        text: 'Téléchargez vos données DICOM ici.',
        requirement: 'Une condition préalable au deuxième avis est l\'utilisation des protocoles QMRM, qui peuvent être téléchargés sous MR-Max (Connaissance des protocoles).',
        button: 'Télécharger des fichiers',
      },""",
        """    download: {
      title: 'Connaissance des protocoles',
      text: 'Téléchargez le protocole QMRM actuel (.edx) ici.',
      button: 'Télécharger le fichier .edx',
      fileUrl: '/protocol.edx'
    },"""
    ),
    ("src/locales/es.ts", None,
        r"newsletterText: 'Reciba actualizaciones.*?'",
        r"newsletterText: 'El sitio está actualmente en construcción. Suscríbase al boletín para mantenerse informado.'",
        """      upload: {
        title: 'Subida de DICOM',
        text: 'Suba sus datos DICOM aquí.',
        requirement: 'Un requisito previo para la segunda opinión es el uso de los protocolos QMRM, que se pueden descargar en MR-Max (Conocimiento de protocolos).',
        button: 'Subir archivos',
      },""",
        """    download: {
      title: 'Conocimiento de protocolos',
      text: 'Descargue el protocolo QMRM actual (.edx) aquí.',
      button: 'Descargar archivo .edx',
      fileUrl: '/protocol.edx'
    },"""
    )
]

for item in files:
    filepath = item[0]
    lang = item[1]
    nl_old = item[2]
    nl_new = item[3]
    upload_block = item[4]
    download_block = item[5]
    
    with open(filepath, "r") as f:
        content = f.read()
        
    if lang == "de":
        # we only replace the first occurrence (DE)
        content = re.sub(nl_old, nl_new, content, count=1)
        # insert upload before the FIRST news: {
        # But wait, consultation is right before news. So look for "consultation: {" then the next "news: {"
        parts = content.split("news: {")
        if len(parts) >= 3:
            # parts[0] is home, parts[1] is consultation end. Wait, "news: {" appears 4 times in content.ts.
            # home.news (de), consultation.news(wait, consultation doesn't have news. root has news!).
            # root -> news: { is after consultation.
            pass
    elif lang == "en":
        # replace the last occurrence
        # or just find all and replace the second one
        pass

# Actually, it's much safer to just use regex to insert before `  news: {` (with exactly 2 spaces indent) because consultation is top level.
