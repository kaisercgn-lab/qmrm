import re
import os

updates = [
    {
        "file": "src/content.ts",
        "lang": "de",
        "nl_old": r"newsletterText: 'Erhalten Sie Updates.*?'",
        "nl_new": r"newsletterText: 'Unsere Website befindet sich aktuell im Aufbau. Melden Sie sich für unseren Newsletter an, um über den Start informiert zu werden.'",
        "consult_insert_after": r"offerings: \[.*?\],\n",
        "consult_new": """      upload: {
        title: 'DICOM Upload für Zweitmeinung',
        text: 'Laden Sie hier Ihre DICOM-Daten sicher hoch, um eine strukturierte Zweitmeinung von unseren Experten zu erhalten.',
        requirement: 'Voraussetzung für die Zweitmeinung ist die Nutzung unserer QMRM-Protokolle, die Sie unter MR-Max (Protokollwissen) herunterladen können.',
        button: 'Dateien hochladen',
        dropzone: 'DICOM-Dateien hier ablegen oder klicken',
      },
""",
        "mrMax_insert_after": r"features: \{[\s\S]*?\},",
        "mrMax_new": """
    download: {
      title: 'Protokollwissen Download',
      text: 'Laden Sie hier das aktuelle QMRM-Protokoll (.edx) für Ihre Systeme herunter.',
      button: '.edx Datei herunterladen',
      fileUrl: '/protocol.edx'
    },"""
    },
    {
        "file": "src/content.ts",
        "lang": "en",
        "nl_old": r"newsletterText: 'Receive updates.*?'",
        "nl_new": r"newsletterText: 'Our website is currently under construction. Sign up for our newsletter to be notified of our launch.'",
        "consult_insert_after": r"offerings: \[.*?\],\n",
        "consult_new": """      upload: {
        title: 'DICOM Upload for Second Opinion',
        text: 'Securely upload your DICOM data here to receive a structured second opinion from our experts.',
        requirement: 'A prerequisite for the second opinion is the use of our QMRM protocols, which you can download under MR-Max (Protocol Knowledge).',
        button: 'Upload Files',
        dropzone: 'Drop DICOM files here or click',
      },
""",
        "mrMax_insert_after": r"features: \{[\s\S]*?\},",
        "mrMax_new": """
    download: {
      title: 'Protocol Knowledge Download',
      text: 'Download the current QMRM protocol (.edx) for your systems here.',
      button: 'Download .edx File',
      fileUrl: '/protocol.edx'
    },"""
    },
    {
        "file": "src/locales/ru.ts",
        "nl_old": r"newsletterText: 'Получайте обновления.*?'",
        "nl_new": r"newsletterText: 'Наш сайт находится в стадии разработки. Подпишитесь на нашу рассылку, чтобы получать обновления о запуске.'",
        "consult_insert_after": r"offerings: \[.*?\],\n",
        "consult_new": """      upload: {
        title: 'Загрузка DICOM для второго мнения',
        text: 'Безопасно загрузите ваши данные DICOM здесь, чтобы получить структурированное второе мнение от наших экспертов.',
        requirement: 'Обязательным условием для получения второго мнения является использование наших протоколов QMRM, которые вы можете скачать в разделе MR-Max (Знание протоколов).',
        button: 'Загрузить файлы',
        dropzone: 'Перетащите файлы DICOM сюда или нажмите',
      },
""",
        "mrMax_insert_after": r"features: \{[\s\S]*?\},",
        "mrMax_new": """
    download: {
      title: 'Скачать базу протоколов',
      text: 'Скачайте актуальный протокол QMRM (.edx) для ваших систем здесь.',
      button: 'Скачать файл .edx',
      fileUrl: '/protocol.edx'
    },"""
    },
    {
        "file": "src/locales/tr.ts",
        "nl_old": r"newsletterText: 'Araştırmalar ve kurs.*?'",
        "nl_new": r"newsletterText: 'Sitemiz şu anda yapım aşamasındadır. Lansmanımızdan haberdar olmak için bültenimize kaydolun.'",
        "consult_insert_after": r"offerings: \[.*?\],\n",
        "consult_new": """      upload: {
        title: 'İkinci Görüş için DICOM Yükleme',
        text: 'Uzmanlarımızdan yapılandırılmış bir ikinci görüş almak için DICOM verilerinizi buraya güvenle yükleyin.',
        requirement: 'İkinci bir görüş için ön koşul, MR-Max (Protokol Bilgisi) altında indirebileceğiniz QMRM protokollerimizin kullanılmasıdır.',
        button: 'Dosyaları Yükle',
        dropzone: 'DICOM dosyalarını buraya bırakın veya tıklayın',
      },
""",
        "mrMax_insert_after": r"features: \{[\s\S]*?\},",
        "mrMax_new": """
    download: {
      title: 'Protokol Bilgisi İndir',
      text: 'Sistemleriniz için güncel QMRM protokolünü (.edx) buradan indirin.',
      button: '.edx Dosyasını İndir',
      fileUrl: '/protocol.edx'
    },"""
    },
    {
        "file": "src/locales/fr.ts",
        "nl_old": r"newsletterText: 'Recevez des mises à jour.*?'",
        "nl_new": r"newsletterText: 'Notre site Web est actuellement en construction. Inscrivez-vous à notre newsletter pour être informé de notre lancement.'",
        "consult_insert_after": r"offerings: \[.*?\],\n",
        "consult_new": """      upload: {
        title: 'Téléchargement DICOM pour un deuxième avis',
        text: 'Téléchargez vos données DICOM en toute sécurité ici pour recevoir un deuxième avis structuré de nos experts.',
        requirement: 'Une condition préalable à un deuxième avis est l\'utilisation de nos protocoles QMRM, que vous pouvez télécharger sous MR-Max (Connaissance des protocoles).',
        button: 'Télécharger des fichiers',
        dropzone: 'Déposez les fichiers DICOM ici ou cliquez',
      },
""",
        "mrMax_insert_after": r"features: \{[\s\S]*?\},",
        "mrMax_new": """
    download: {
      title: 'Téléchargement des protocoles',
      text: 'Téléchargez le protocole QMRM actuel (.edx) pour vos systèmes ici.',
      button: 'Télécharger le fichier .edx',
      fileUrl: '/protocol.edx'
    },"""
    },
    {
        "file": "src/locales/es.ts",
        "nl_old": r"newsletterText: 'Reciba actualizaciones.*?'",
        "nl_new": r"newsletterText: 'Nuestro sitio web está actualmente en construcción. Suscríbase a nuestro boletín para recibir notificaciones de nuestro lanzamiento.'",
        "consult_insert_after": r"offerings: \[.*?\],\n",
        "consult_new": """      upload: {
        title: 'Subida de DICOM para segunda opinión',
        text: 'Suba sus datos DICOM de forma segura aquí para recibir una segunda opinión estructurada de nuestros expertos.',
        requirement: 'Un requisito previo para una segunda opinión es el uso de nuestros protocolos QMRM, que puede descargar en MR-Max (Conocimiento de protocolos).',
        button: 'Subir archivos',
        dropzone: 'Suelte los archivos DICOM aquí o haga clic',
      },
""",
        "mrMax_insert_after": r"features: \{[\s\S]*?\},",
        "mrMax_new": """
    download: {
      title: 'Descarga de protocolos',
      text: 'Descargue el protocolo QMRM actual (.edx) para sus sistemas aquí.',
      button: 'Descargar archivo .edx',
      fileUrl: '/protocol.edx'
    },"""
    }
]

def process_file(file_path, lang_updates):
    with open(file_path, "r") as f:
        content = f.read()

    for u in lang_updates:
        # replace newsletter text
        if "lang" in u:
            # Need to scope replacement to the specific lang export
            pass # Too hard to regex reliably in content.ts. We'll do it manually.
        else:
            content = re.sub(u['nl_old'], u['nl_new'], content)
            
            # Insert consultation.upload after consultation.offerings
            # The structure is:
            #  consultation: { ... offerings: [ ... ], ... }
            
            # Simple approach: Find "offerings:" inside "consultation", and append.
            # But the offerings array can be multiline.
            pass

    with open(file_path, "w") as f:
        f.write(content)

# The parsing is tricky because of the nested brackets in JS. Let's just do it directly with a more robust parser or specific lines.
