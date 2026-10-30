const translations = {
  es: {
    language: "Idioma",
    title: "Un campo de batalla para tus historias",
    description: "WikiMockup fue creado para permitir a los escritores de historia alternativa crear infoboxes para sus ucronías.",
    guideEyebrow: "GUÍA RÁPIDA",
    guideTitle: "Cómo usar el editor",
    guide: [
      "Completa los datos del acontecimiento. Los campos opcionales que dejes vacíos no aparecerán en la vista previa.",
      "Añade una imagen desde tu dispositivo o pega una dirección web. La imagen se ajusta sin recortarse.",
      "Para la imagen de la infobox, prueba con un ancho de 220–300 px; conserva la proporción y evita estirarla.",
      "Puedes incluir enlaces con <code>&lt;a href=\"https://…\"&gt;texto&lt;/a&gt;</code>, saltos con <code>&lt;br&gt;</code> y banderas con <code>&lt;img src=\"…\" width=\"15px\"&gt;</code>. También puedes seleccionar texto y resaltarlo en azul.",
      "Cambia los nombres de las secciones y agrega las filas que necesites. Pulsa «Aplicar», copia el HTML o descarga la infobox como imagen de alta resolución."
    ],
    editorEyebrow: "EDICIÓN",
    editorTitle: "Datos del mockup",
    reset: "Restablecer ejemplo",
    previewEyebrow: "VISTA PREVIA",
    previewTitle: "Tu infobox",
    live: "Vista en vivo",
    previewNote: "La vista previa es una maqueta visual: no está afiliada a Wikipedia.",
    addSectionTitle: "Secciones adicionales",
    addSectionHelp: "Añade una sección y elige dónde colocarla; usa las flechas para cambiar su orden.",
    customPosition: "Ubicación de la sección",
    positions: { result: "Después del resultado", belligerents: "Después de los bandos", commanders: "Después de los comandantes", strength: "Después de las fuerzas", casualties: "Después de las bajas" },
    addRow: "+ Añadir fila",
    moveUp: "Mover sección hacia arriba",
    moveDown: "Mover sección hacia abajo",
    highlight: "Resaltar selección en azul",
    highlightHelp: "Selecciona un texto en cualquier campo y pulsa este botón para darle estilo de enlace azul, sin crear un enlace real.",
    apply: "Aplicar cambios",
    copy: "Copiar HTML",
    copied: "HTML copiado al portapapeles.",
    copyError: "No se pudo copiar. Revisa los permisos del navegador.",
    download: "Descargar imagen HD",
    downloadSuccess: "Infobox descargada como PNG en alta resolución.",
    downloadError: "No se pudo crear el PNG. Si usas imágenes externas, prueba con un archivo local o una URL que permita acceso CORS.",
    footer: "© {year} Ivanmori. Todos los derechos reservados.",
    nonprofit: "Proyecto sin fines de lucro; no se busca ganar dinero.",
    sections: {
      identity: "Identificación",
      image: "Imágenes y tamaños",
      details: "Detalles",
      sides: "Bandos y participantes",
      people: "Comandantes y líderes",
      forces: "Fuerzas y bajas",
      customize: "Personalizar secciones"
    },
    fields: {
      name: "Nombre del acontecimiento",
      campaign: "Guerra o campaña",
      imageUrl: "URL de la imagen de la infobox",
      imageFile: "O elige una imagen para la infobox",
      imageFileHint: "La imagen seleccionada solo se muestra en este navegador.",
      imageCaption: "Descripción de la imagen de la infobox",
      imageWidth: "Ancho de imagen en la infobox (px)",
      boxWidth: "Ancho de la infobox (px)",
      date: "Fecha",
      location: "Lugar",
      result: "Resultado",
      consequencesTitle: "Nombre de la sección: consecuencias",
      consequences: "Consecuencias (un punto por línea)",
      belligerents: "Nombre de la sección: bandos",
      sideOne: "Nombre del bando 1",
      sideTwo: "Nombre del bando 2",
      sideOneContent: "Participantes del bando 1",
      sideTwoContent: "Participantes del bando 2",
      leaders: "Nombre de la sección: comandantes",
      leadersOne: "Comandantes del bando 1",
      leadersTwo: "Comandantes del bando 2",
      strength: "Nombre de la sección: fuerzas",
      strengthOne: "Fuerzas del bando 1",
      strengthTwo: "Fuerzas del bando 2",
      losses: "Nombre de la sección: bajas",
      lossesOne: "Bajas del bando 1",
      lossesTwo: "Bajas del bando 2",
      customLabel: "Nombre de la sección",
      customOne: "Dato del bando 1",
      customTwo: "Dato del bando 2",
      remove: "Eliminar fila"
    },
    sample: {
      name: "Batalla de Lützen",
      campaign: "Parte de la Guerra de los Treinta Años",
      imageCaption: "La batalla de Lützen, una escena decisiva de la Guerra de los Treinta Años.",
      date: "6 / 16 de noviembre de 1632",
      location: "Cerca de Lützen, actual Alemania",
      result: "Victoria protestante",
      sideOne: "Suecia y aliados",
      sideTwo: "Sacro Imperio Romano",
      leadersOne: "Gustavo Adolfo<br>Bernardo de Sajonia-Weimar",
      leadersTwo: "Albrecht von Wallenstein<br>Gottfried zu Pappenheim",
      strengthOne: "19.000 soldados",
      strengthTwo: "18.000 soldados",
      lossesOne: "3.400 muertos",
      lossesTwo: "Pérdidas importantes",
      consequences: "Muerte de Gustavo Adolfo en combate\nLa guerra continuó bajo nuevos líderes"
    },
    labels: {
      belligerents: "Bandos",
      commanders: "Comandantes y líderes",
      strength: "Fuerzas",
      casualties: "Bajas",
      sideOne: "Bando 1",
      sideTwo: "Bando 2",
      date: "Fecha",
      location: "Lugar",
      result: "Resultado",
      consequences: "Consecuencias",
      yourImage: "Imagen del acontecimiento"
    }
  },
  en: {
    language: "Language",
    title: "A battlefield for your stories",
    description: "WikiMockup was created to let alternate-history writers create infoboxes for their alternate timelines.",
    guideEyebrow: "QUICK GUIDE",
    guideTitle: "How to use the editor",
    guide: [
      "Fill in the event details. Optional fields left blank will not appear in the preview.",
      "Choose an image from your device or paste a web address. Images are scaled without cropping.",
      "For the infobox image, try 220–300 px wide; preserve its aspect ratio and avoid stretching it.",
      "Add links with <code>&lt;a href=\"https://…\"&gt;text&lt;/a&gt;</code>, line breaks with <code>&lt;br&gt;</code>, and flags with <code>&lt;img src=\"…\" width=\"15px\"&gt;</code>. You can also select text and highlight it blue.",
      "Rename section headings and add custom rows. Apply changes, copy the HTML, or download a high-resolution image."
    ],
    editorEyebrow: "EDITOR",
    editorTitle: "Mockup details",
    reset: "Reset example",
    previewEyebrow: "PREVIEW",
    previewTitle: "Your infobox",
    live: "Live preview",
    previewNote: "This is a visual mockup and is not affiliated with Wikipedia.",
    addSectionTitle: "Additional sections",
    addSectionHelp: "Add a section and choose where it belongs; use the arrows to change its order.",
    customPosition: "Section position",
    positions: { result: "After result", belligerents: "After belligerents", commanders: "After commanders", strength: "After strength", casualties: "After casualties" },
    addRow: "+ Add row",
    moveUp: "Move section up",
    moveDown: "Move section down",
    highlight: "Highlight selection in blue",
    highlightHelp: "Select text in any field and click this button to style it like a blue link, without creating an actual link.",
    apply: "Apply changes",
    copy: "Copy HTML",
    copied: "HTML copied to clipboard.",
    copyError: "Could not copy. Check your browser permissions.",
    download: "Download HD image",
    downloadSuccess: "Infobox downloaded as a high-resolution PNG.",
    downloadError: "Could not create the PNG. For external images, try a local file or a URL that allows CORS access.",
    footer: "© {year} Ivanmori. All rights reserved.",
    nonprofit: "Non-profit project; no money is being made.",
    sections: { identity: "Identification", image: "Images and sizing", details: "Details", sides: "Sides and participants", people: "Commanders and leaders", forces: "Strength and losses", customize: "Customize sections" },
    fields: {
      name: "Event name", campaign: "War or campaign", imageUrl: "Infobox image URL", imageFile: "Or choose an infobox image from your device", imageFileHint: "The selected image is only displayed in this browser.", imageCaption: "Infobox image caption", imageWidth: "Infobox image width (px)", boxWidth: "Infobox width (px)", date: "Date", location: "Location", result: "Result", consequencesTitle: "Section name: consequences", consequences: "Consequences (one item per line)", belligerents: "Section name: belligerents", sideOne: "Side 1 name", sideTwo: "Side 2 name", sideOneContent: "Side 1 participants", sideTwoContent: "Side 2 participants", leaders: "Section name: commanders", leadersOne: "Side 1 commanders", leadersTwo: "Side 2 commanders", strength: "Section name: strength", strengthOne: "Side 1 strength", strengthTwo: "Side 2 strength", losses: "Section name: casualties", lossesOne: "Side 1 casualties", lossesTwo: "Side 2 casualties", customLabel: "Section name", customOne: "Side 1 detail", customTwo: "Side 2 detail", remove: "Remove row"
    },
    sample: {
      name: "Battle of Lützen", campaign: "Part of the Thirty Years' War", imageCaption: "The Battle of Lützen, a decisive scene from the Thirty Years' War.", date: "6 / 16 November 1632", location: "Near Lützen, present-day Germany", result: "Protestant victory", sideOne: "Sweden and allies", sideTwo: "Holy Roman Empire", leadersOne: "Gustavus Adolphus<br>Bernhard of Saxe-Weimar", leadersTwo: "Albrecht von Wallenstein<br>Gottfried zu Pappenheim", strengthOne: "19,000 soldiers", strengthTwo: "18,000 soldiers", lossesOne: "3,400 dead", lossesTwo: "Heavy losses", consequences: "Death of Gustavus Adolphus in battle\nThe war continued under new leaders"
    },
    labels: { belligerents: "Belligerents", commanders: "Commanders and leaders", strength: "Strength", casualties: "Casualties", sideOne: "Side 1", sideTwo: "Side 2", date: "Date", location: "Location", result: "Result", consequences: "Consequences", yourImage: "Event image" }
  },
  ru: {
    language: "Язык",
    title: "Поле битвы для ваших историй",
    description: "WikiMockup создан, чтобы авторы альтернативной истории могли создавать инфобоксы для своих альтернативных хронологий.",
    guideEyebrow: "КРАТКОЕ РУКОВОДСТВО",
    guideTitle: "Как пользоваться редактором",
    guide: [
      "Заполните сведения о событии. Пустые необязательные поля не появятся в предпросмотре.",
      "Выберите изображение на устройстве или вставьте веб-адрес. Изображения масштабируются без обрезки.",
      "Для изображения в инфобоксе попробуйте ширину 220–300 px; сохраняйте пропорции и не растягивайте его.",
      "Добавляйте ссылки через <code>&lt;a href=\"https://…\"&gt;текст&lt;/a&gt;</code>, переносы строк через <code>&lt;br&gt;</code>, а флаги через <code>&lt;img src=\"…\" width=\"15px\"&gt;</code>. Текст также можно выделить синим цветом.",
      "Переименуйте заголовки разделов и добавьте собственные строки. Примените изменения, скопируйте HTML или скачайте инфобокс как изображение высокого разрешения."
    ],
    editorEyebrow: "РЕДАКТОР",
    editorTitle: "Данные макета",
    reset: "Сбросить пример",
    previewEyebrow: "ПРЕДПРОСМОТР",
    previewTitle: "Ваш инфобокс",
    live: "Предпросмотр",
    previewNote: "Это визуальный макет; он не связан с Википедией.",
    addSectionTitle: "Дополнительные разделы",
    addSectionHelp: "Добавьте раздел и выберите его расположение; стрелки меняют порядок разделов.",
    customPosition: "Положение раздела",
    positions: { result: "После результата", belligerents: "После сторон", commanders: "После командиров", strength: "После сил", casualties: "После потерь" },
    addRow: "+ Добавить строку",
    moveUp: "Переместить раздел вверх",
    moveDown: "Переместить раздел вниз",
    highlight: "Выделить синим цветом",
    highlightHelp: "Выберите текст в любом поле и нажмите эту кнопку, чтобы оформить его как синюю ссылку без создания настоящей ссылки.",
    apply: "Применить",
    copy: "Скопировать HTML",
    copied: "HTML скопирован в буфер обмена.",
    copyError: "Не удалось скопировать. Проверьте разрешения браузера.",
    download: "Скачать HD-изображение",
    downloadSuccess: "Инфобокс скачан в PNG высокого разрешения.",
    downloadError: "Не удалось создать PNG. Для внешних изображений попробуйте локальный файл или URL с поддержкой CORS.",
    footer: "© {year} Ivanmori. Все права защищены.",
    nonprofit: "Некоммерческий проект; цель — не получение прибыли.",
    sections: { identity: "Основные сведения", image: "Изображения и размеры", details: "Подробности", sides: "Стороны и участники", people: "Командиры и лидеры", forces: "Силы и потери", customize: "Настройка разделов" },
    fields: {
      name: "Название события", campaign: "Война или кампания", imageUrl: "URL изображения для инфобокса", imageFile: "Или выберите изображение для инфобокса", imageFileHint: "Выбранное изображение отображается только в этом браузере.", imageCaption: "Подпись к изображению в инфобоксе", imageWidth: "Ширина изображения в инфобоксе (px)", boxWidth: "Ширина инфобокса (px)", date: "Дата", location: "Место", result: "Итог", consequencesTitle: "Название раздела: последствия", consequences: "Последствия (по одному пункту в строке)", belligerents: "Название раздела: стороны", sideOne: "Название стороны 1", sideTwo: "Название стороны 2", sideOneContent: "Участники стороны 1", sideTwoContent: "Участники стороны 2", leaders: "Название раздела: командиры", leadersOne: "Командиры стороны 1", leadersTwo: "Командиры стороны 2", strength: "Название раздела: силы", strengthOne: "Силы стороны 1", strengthTwo: "Силы стороны 2", losses: "Название раздела: потери", lossesOne: "Потери стороны 1", lossesTwo: "Потери стороны 2", customLabel: "Название раздела", customOne: "Данные стороны 1", customTwo: "Данные стороны 2", remove: "Удалить строку"
    },
    sample: {
      name: "Битва при Лютцене", campaign: "Тридцатилетняя война", imageCaption: "Битва при Лютцене — решающее сражение Тридцатилетней войны.", date: "6 / 16 ноября 1632 года", location: "Окрестности Лютцена, Германия", result: "Победа протестантов", sideOne: "Швеция и союзники", sideTwo: "Священная Римская империя", leadersOne: "Густав II Адольф<br>Бернгард Саксен-Веймарский", leadersTwo: "Альбрехт фон Валленштейн<br>Готфрид цу Паппенгейм", strengthOne: "19 000 солдат", strengthTwo: "18 000 солдат",       lossesOne: "3 400 погибших", lossesTwo: "Тяжёлые потери", consequences: "Гибель Густава II Адольфа в бою\nВойна продолжилась под руководством новых лидеров"
    },
    labels: { belligerents: "Стороны", commanders: "Командиры и лидеры", strength: "Силы", casualties: "Потери", sideOne: "Сторона 1", sideTwo: "Сторона 2", date: "Дата", location: "Место", result: "Итог", consequences: "Последствия", yourImage: "Изображение события" }
  },
  de: {
    language: "Sprache",
    title: "Ein Schlachtfeld für deine Geschichten",
    description: "WikiMockup wurde entwickelt, damit Alternate-History-Autorinnen und -Autoren Infoboxen für ihre alternativen Zeitlinien erstellen können.",
    guideEyebrow: "KURZANLEITUNG",
    guideTitle: "So funktioniert der Editor",
    guide: [
      "Trage die Angaben zum Ereignis ein. Leere optionale Felder werden in der Vorschau ausgeblendet.",
      "Wähle ein Bild von deinem Gerät oder füge eine Webadresse ein. Bilder werden ohne Beschnitt skaliert.",
      "Für das Infobox-Bild eignen sich etwa 220–300 px Breite; Seitenverhältnis beibehalten und nicht verzerren.",
      "Links kannst du mit <code>&lt;a href=\"https://…\"&gt;Text&lt;/a&gt;</code>, Zeilenumbrüche mit <code>&lt;br&gt;</code> und Flaggen mit <code>&lt;img src=\"…\" width=\"15px\"&gt;</code> einfügen. Text lässt sich außerdem blau hervorheben.",
      "Benenne Abschnittsüberschriften um und füge eigene Zeilen hinzu. Übernimm Änderungen, kopiere das HTML oder lade die Infobox als hochauflösendes Bild herunter."
    ],
    editorEyebrow: "EDITOR",
    editorTitle: "Mockup-Daten",
    reset: "Beispiel zurücksetzen",
    previewEyebrow: "VORSCHAU",
    previewTitle: "Deine Infobox",
    live: "Live-Vorschau",
    previewNote: "Dies ist ein visuelles Mockup und steht nicht mit Wikipedia in Verbindung.",
    addSectionTitle: "Zusätzliche Abschnitte",
    addSectionHelp: "Füge einen Abschnitt hinzu und wähle seine Position; mit den Pfeilen änderst du die Reihenfolge.",
    customPosition: "Position des Abschnitts",
    positions: { result: "Nach dem Ergebnis", belligerents: "Nach den Parteien", commanders: "Nach den Befehlshabern", strength: "Nach der Stärke", casualties: "Nach den Verlusten" },
    addRow: "+ Zeile hinzufügen",
    moveUp: "Abschnitt nach oben",
    moveDown: "Abschnitt nach unten",
    highlight: "Auswahl blau hervorheben",
    highlightHelp: "Wähle Text in einem beliebigen Feld aus und klicke hier, um ihn blau wie einen Link darzustellen – ohne echten Link.",
    apply: "Änderungen übernehmen",
    copy: "HTML kopieren",
    copied: "HTML wurde in die Zwischenablage kopiert.",
    copyError: "Kopieren fehlgeschlagen. Prüfe die Browserberechtigungen.",
    download: "HD-Bild herunterladen",
    downloadSuccess: "Infobox als hochauflösendes PNG heruntergeladen.",
    downloadError: "PNG konnte nicht erstellt werden. Verwende für externe Bilder eine lokale Datei oder eine URL mit CORS-Zugriff.",
    footer: "© {year} Ivanmori. Alle Rechte vorbehalten.",
    nonprofit: "Gemeinnütziges Projekt; es wird kein Gewinn angestrebt.",
    sections: { identity: "Angaben", image: "Bilder und Größen", details: "Einzelheiten", sides: "Parteien und Beteiligte", people: "Befehlshaber und Anführer", forces: "Stärke und Verluste", customize: "Abschnitte anpassen" },
    fields: {
      name: "Name des Ereignisses", campaign: "Krieg oder Feldzug", imageUrl: "URL des Infobox-Bildes", imageFile: "Oder Infobox-Bild vom Gerät auswählen", imageFileHint: "Das ausgewählte Bild wird nur in diesem Browser angezeigt.", imageCaption: "Bildunterschrift im Infobox", imageWidth: "Breite des Infobox-Bildes (px)", boxWidth: "Infobox-Breite (px)", date: "Datum", location: "Ort", result: "Ergebnis", consequencesTitle: "Abschnittsname: Folgen", consequences: "Folgen (ein Punkt pro Zeile)", belligerents: "Abschnittsname: Parteien", sideOne: "Name der Partei 1", sideTwo: "Name der Partei 2", sideOneContent: "Beteiligte der Partei 1", sideTwoContent: "Beteiligte der Partei 2", leaders: "Abschnittsname: Befehlshaber", leadersOne: "Befehlshaber der Partei 1", leadersTwo: "Befehlshaber der Partei 2", strength: "Abschnittsname: Stärke", strengthOne: "Stärke der Partei 1", strengthTwo: "Stärke der Partei 2", losses: "Abschnittsname: Verluste", lossesOne: "Verluste der Partei 1", lossesTwo: "Verluste der Partei 2", customLabel: "Abschnittsname", customOne: "Angabe für Partei 1", customTwo: "Angabe für Partei 2", remove: "Zeile entfernen"
    },
    sample: {
      name: "Schlacht bei Lützen", campaign: "Teil des Dreißigjährigen Krieges", imageCaption: "Die Schlacht bei Lützen, ein entscheidendes Gefecht des Dreißigjährigen Krieges.", date: "6. / 16. November 1632", location: "Bei Lützen, heutiges Deutschland", result: "Sieg der Protestanten", sideOne: "Schweden und Verbündete", sideTwo: "Heiliges Römisches Reich", leadersOne: "Gustav II. Adolf<br>Bernhard von Sachsen-Weimar", leadersTwo: "Albrecht von Wallenstein<br>Gottfried zu Pappenheim", strengthOne: "19.000 Soldaten", strengthTwo: "18.000 Soldaten", lossesOne: "3.400 Tote", lossesTwo: "Schwere Verluste", consequences: "Gustav II. Adolf fiel in der Schlacht\nDer Krieg wurde unter neuer Führung fortgesetzt"
    },
    labels: { belligerents: "Parteien", commanders: "Befehlshaber und Anführer", strength: "Stärke", casualties: "Verluste", sideOne: "Partei 1", sideTwo: "Partei 2", date: "Datum", location: "Ort", result: "Ergebnis", consequences: "Folgen", yourImage: "Bild des Ereignisses" }
  },
  it: {
    language: "Lingua",
    title: "Un campo di battaglia per le tue storie",
    description: "WikiMockup è stato creato per permettere agli autori di storia alternativa di creare infobox per le proprie ucronie.",
    guideEyebrow: "GUIDA RAPIDA",
    guideTitle: "Come usare l'editor",
    guide: [
      "Inserisci i dettagli dell'evento. I campi facoltativi lasciati vuoti non appariranno nell'anteprima.",
      "Scegli un'immagine dal dispositivo o incolla un indirizzo web. Le immagini vengono ridimensionate senza ritagli.",
      "Per l'immagine dell'infobox prova una larghezza di 220–300 px; mantieni le proporzioni e non deformarla.",
      "Aggiungi link con <code>&lt;a href=\"https://…\"&gt;testo&lt;/a&gt;</code>, interruzioni con <code>&lt;br&gt;</code> e bandiere con <code>&lt;img src=\"…\" width=\"15px\"&gt;</code>. Puoi anche evidenziare il testo in blu.",
      "Rinomina i titoli delle sezioni e aggiungi righe personalizzate. Applica le modifiche, copia l'HTML o scarica l'infobox come immagine ad alta risoluzione."
    ],
    editorEyebrow: "MODIFICA",
    editorTitle: "Dati del mockup",
    reset: "Ripristina esempio",
    previewEyebrow: "ANTEPRIMA",
    previewTitle: "La tua infobox",
    live: "Anteprima live",
    previewNote: "Questa è una simulazione visiva e non è affiliata a Wikipedia.",
    addSectionTitle: "Sezioni aggiuntive",
    addSectionHelp: "Aggiungi una sezione e scegli dove inserirla; usa le frecce per cambiarne l'ordine.",
    customPosition: "Posizione della sezione",
    positions: { result: "Dopo l'esito", belligerents: "Dopo gli schieramenti", commanders: "Dopo i comandanti", strength: "Dopo le forze", casualties: "Dopo le perdite" },
    addRow: "+ Aggiungi riga",
    moveUp: "Sposta la sezione in alto",
    moveDown: "Sposta la sezione in basso",
    highlight: "Evidenzia la selezione in blu",
    highlightHelp: "Seleziona un testo in un campo e premi questo pulsante per mostrarlo come un link blu, senza creare un link reale.",
    apply: "Applica modifiche",
    copy: "Copia HTML",
    copied: "HTML copiato negli appunti.",
    copyError: "Impossibile copiare. Controlla i permessi del browser.",
    download: "Scarica immagine HD",
    downloadSuccess: "Infobox scaricata in PNG ad alta risoluzione.",
    downloadError: "Impossibile creare il PNG. Per le immagini esterne, prova un file locale o un URL che consenta l'accesso CORS.",
    footer: "© {year} Ivanmori. Tutti i diritti riservati.",
    nonprofit: "Progetto senza scopo di lucro; non si cerca di guadagnare.",
    sections: { identity: "Identificazione", image: "Immagini e dimensioni", details: "Dettagli", sides: "Schieramenti e partecipanti", people: "Comandanti e capi", forces: "Forze e perdite", customize: "Personalizza le sezioni" },
    fields: {
      name: "Nome dell'evento", campaign: "Guerra o campagna", imageUrl: "URL dell'immagine per l'infobox", imageFile: "Oppure scegli un'immagine per l'infobox", imageFileHint: "L'immagine selezionata è visibile solo in questo browser.", imageCaption: "Didascalia dell'immagine nell'infobox", imageWidth: "Larghezza dell'immagine nell'infobox (px)", boxWidth: "Larghezza dell'infobox (px)", date: "Data", location: "Luogo", result: "Esito", consequencesTitle: "Nome della sezione: conseguenze", consequences: "Conseguenze (un punto per riga)", belligerents: "Nome sezione: schieramenti", sideOne: "Nome dello schieramento 1", sideTwo: "Nome dello schieramento 2", sideOneContent: "Partecipanti dello schieramento 1", sideTwoContent: "Partecipanti dello schieramento 2", leaders: "Nome sezione: comandanti", leadersOne: "Comandanti dello schieramento 1", leadersTwo: "Comandanti dello schieramento 2", strength: "Nome sezione: forze", strengthOne: "Forze dello schieramento 1", strengthTwo: "Forze dello schieramento 2", losses: "Nome sezione: perdite", lossesOne: "Perdite dello schieramento 1", lossesTwo: "Perdite dello schieramento 2", customLabel: "Nome della sezione", customOne: "Dettaglio schieramento 1", customTwo: "Dettaglio schieramento 2", remove: "Rimuovi riga"
    },
    sample: {
      name: "Battaglia di Lützen", campaign: "Parte della Guerra dei Trent'anni", imageCaption: "La battaglia di Lützen, uno scontro decisivo della Guerra dei Trent'anni.", date: "6 / 16 novembre 1632", location: "Vicino a Lützen, nell'odierna Germania", result: "Vittoria protestante", sideOne: "Svezia e alleati", sideTwo: "Sacro Romano Impero", leadersOne: "Gustavo Adolfo<br>Bernardo di Sassonia-Weimar", leadersTwo: "Albrecht von Wallenstein<br>Gottfried zu Pappenheim", strengthOne: "19.000 soldati", strengthTwo: "18.000 soldati", lossesOne: "3.400 morti", lossesTwo: "Perdite ingenti", consequences: "Morte di Gustavo Adolfo in battaglia\nLa guerra proseguì sotto una nuova leadership"
    },
    labels: { belligerents: "Schieramenti", commanders: "Comandanti e capi", strength: "Forze", casualties: "Perdite", sideOne: "Schieramento 1", sideTwo: "Schieramento 2", date: "Data", location: "Luogo", result: "Esito", consequences: "Conseguenze", yourImage: "Immagine dell'evento" }
  },
  fr: {
    language: "Langue",
    title: "Un champ de bataille pour vos histoires",
    description: "WikiMockup a été créé pour permettre aux auteurs d'histoire alternative de créer des infobox pour leurs uchronies.",
    guideEyebrow: "GUIDE RAPIDE",
    guideTitle: "Comment utiliser l'éditeur",
    guide: [
      "Saisissez les informations sur l'événement. Les champs facultatifs laissés vides n'apparaîtront pas dans l'aperçu.",
      "Choisissez une image sur votre appareil ou collez une adresse web. Les images sont redimensionnées sans être recadrées.",
      "Pour l'image de l'infobox, essayez une largeur de 220–300 px ; gardez les proportions et ne l'étirez pas.",
      "Ajoutez des liens avec <code>&lt;a href=\"https://…\"&gt;texte&lt;/a&gt;</code>, des sauts de ligne avec <code>&lt;br&gt;</code> et des drapeaux avec <code>&lt;img src=\"…\" width=\"15px\"&gt;</code>. Vous pouvez aussi surligner le texte en bleu.",
      "Renommez les titres des sections et ajoutez vos propres lignes. Appliquez les modifications, copiez le HTML ou téléchargez l'infobox en image haute résolution."
    ],
    editorEyebrow: "ÉDITION",
    editorTitle: "Données de la maquette",
    reset: "Réinitialiser l'exemple",
    previewEyebrow: "APERÇU",
    previewTitle: "Votre infobox",
    live: "Aperçu en direct",
    previewNote: "Cette maquette visuelle n'est pas affiliée à Wikipédia.",
    addSectionTitle: "Sections supplémentaires",
    addSectionHelp: "Ajoutez une section et choisissez sa position ; utilisez les flèches pour modifier l'ordre.",
    customPosition: "Position de la section",
    positions: { result: "Après le résultat", belligerents: "Après les belligérants", commanders: "Après les commandants", strength: "Après les effectifs", casualties: "Après les pertes" },
    addRow: "+ Ajouter une ligne",
    moveUp: "Monter la section",
    moveDown: "Descendre la section",
    highlight: "Surligner la sélection en bleu",
    highlightHelp: "Sélectionnez un texte dans un champ et cliquez ici pour lui donner le style d'un lien bleu, sans créer de lien réel.",
    apply: "Appliquer les modifications",
    copy: "Copier le HTML",
    copied: "HTML copié dans le presse-papiers.",
    copyError: "Impossible de copier. Vérifiez les autorisations du navigateur.",
    download: "Télécharger l'image HD",
    downloadSuccess: "Infobox téléchargée en PNG haute résolution.",
    downloadError: "Impossible de créer le PNG. Pour les images externes, essayez un fichier local ou une URL autorisant l'accès CORS.",
    footer: "© {year} Ivanmori. Tous droits réservés.",
    nonprofit: "Projet à but non lucratif ; aucun gain financier n'est recherché.",
    sections: { identity: "Identification", image: "Images et dimensions", details: "Détails", sides: "Belligérants et participants", people: "Commandants et chefs", forces: "Effectifs et pertes", customize: "Personnaliser les sections" },
    fields: {
      name: "Nom de l'événement", campaign: "Guerre ou campagne", imageUrl: "URL de l'image de l'infobox", imageFile: "Ou choisir une image pour l'infobox", imageFileHint: "L'image choisie est affichée uniquement dans ce navigateur.", imageCaption: "Légende de l'image de l'infobox", imageWidth: "Largeur de l'image de l'infobox (px)", boxWidth: "Largeur de l'infobox (px)", date: "Date", location: "Lieu", result: "Résultat", consequencesTitle: "Nom de section : conséquences", consequences: "Conséquences (un point par ligne)", belligerents: "Nom de section : belligérants", sideOne: "Nom du camp 1", sideTwo: "Nom du camp 2", sideOneContent: "Participants du camp 1", sideTwoContent: "Participants du camp 2", leaders: "Nom de section : commandants", leadersOne: "Commandants du camp 1", leadersTwo: "Commandants du camp 2", strength: "Nom de section : effectifs", strengthOne: "Effectifs du camp 1", strengthTwo: "Effectifs du camp 2", losses: "Nom de section : pertes", lossesOne: "Pertes du camp 1", lossesTwo: "Pertes du camp 2", customLabel: "Nom de la section", customOne: "Détail du camp 1", customTwo: "Détail du camp 2", remove: "Supprimer la ligne"
    },
    sample: {
      name: "Bataille de Lützen", campaign: "Guerre de Trente Ans", imageCaption: "La bataille de Lützen, un affrontement décisif de la guerre de Trente Ans.", date: "6 / 16 novembre 1632", location: "Près de Lützen, dans l'actuelle Allemagne", result: "Victoire protestante", sideOne: "Suède et alliés", sideTwo: "Saint-Empire romain germanique", leadersOne: "Gustave II Adolphe<br>Bernard de Saxe-Weimar", leadersTwo: "Albrecht von Wallenstein<br>Gottfried zu Pappenheim", strengthOne: "19 000 soldats", strengthTwo: "18 000 soldats", lossesOne: "3 400 morts", lossesTwo: "Pertes importantes", consequences: "Mort de Gustave II Adolphe au combat\nLa guerre se poursuivit sous une nouvelle direction"
    },
    labels: { belligerents: "Belligérants", commanders: "Commandants et chefs", strength: "Effectifs", casualties: "Pertes", sideOne: "Camp 1", sideTwo: "Camp 2", date: "Date", location: "Lieu", result: "Résultat", consequences: "Conséquences", yourImage: "Image de l'événement" }
  },
  pt: {
    language: "Idioma",
    title: "Um campo de batalha para as suas histórias",
    description: "WikiMockup foi criado para permitir que escritores de história alternativa criem infoboxes para suas ucronias.",
    guideEyebrow: "GUIA RÁPIDO",
    guideTitle: "Como usar o editor",
    guide: [
      "Preencha os dados do acontecimento. Campos opcionais vazios não aparecerão na prévia.",
      "Escolha uma imagem do seu dispositivo ou cole um endereço da web. As imagens são redimensionadas sem cortes.",
      "Para a imagem da infobox, experimente 220–300 px de largura; mantenha a proporção e não estique a imagem.",
      "Adicione links com <code>&lt;a href=\"https://…\"&gt;texto&lt;/a&gt;</code>, quebras de linha com <code>&lt;br&gt;</code> e bandeiras com <code>&lt;img src=\"…\" width=\"15px\"&gt;</code>. Também é possível destacar o texto em azul.",
      "Renomeie os títulos das seções e adicione linhas personalizadas. Aplique as alterações, copie o HTML ou baixe a infobox como imagem em alta resolução."
    ],
    editorEyebrow: "EDIÇÃO",
    editorTitle: "Dados do mockup",
    reset: "Restaurar exemplo",
    previewEyebrow: "PRÉVIA",
    previewTitle: "Sua infobox",
    live: "Prévia ao vivo",
    previewNote: "Esta é uma maquete visual e não tem afiliação com a Wikipédia.",
    addSectionTitle: "Seções adicionais",
    addSectionHelp: "Adicione uma seção e escolha onde colocá-la; use as setas para mudar a ordem.",
    customPosition: "Posição da seção",
    positions: { result: "Após o resultado", belligerents: "Após os lados", commanders: "Após os comandantes", strength: "Após as forças", casualties: "Após as baixas" },
    addRow: "+ Adicionar linha",
    moveUp: "Mover seção para cima",
    moveDown: "Mover seção para baixo",
    highlight: "Destacar seleção em azul",
    highlightHelp: "Selecione um texto em qualquer campo e clique neste botão para dar a ele o estilo de um link azul, sem criar um link real.",
    apply: "Aplicar alterações",
    copy: "Copiar HTML",
    copied: "HTML copiado para a área de transferência.",
    copyError: "Não foi possível copiar. Verifique as permissões do navegador.",
    download: "Baixar imagem HD",
    downloadSuccess: "Infobox baixada em PNG de alta resolução.",
    downloadError: "Não foi possível criar o PNG. Para imagens externas, tente um arquivo local ou um URL que permita acesso CORS.",
    footer: "© {year} Ivanmori. Todos os direitos reservados.",
    nonprofit: "Projeto sem fins lucrativos; não há intenção de ganhar dinheiro.",
    sections: { identity: "Identificação", image: "Imagens e dimensões", details: "Detalhes", sides: "Lados e participantes", people: "Comandantes e líderes", forces: "Forças e baixas", customize: "Personalizar seções" },
    fields: {
      name: "Nome do acontecimento", campaign: "Guerra ou campanha", imageUrl: "URL da imagem da infobox", imageFile: "Ou escolha uma imagem para a infobox", imageFileHint: "A imagem selecionada é exibida apenas neste navegador.", imageCaption: "Legenda da imagem da infobox", imageWidth: "Largura da imagem da infobox (px)", boxWidth: "Largura da infobox (px)", date: "Data", location: "Local", result: "Resultado", consequencesTitle: "Nome da seção: consequências", consequences: "Consequências (um item por linha)", belligerents: "Nome da seção: lados", sideOne: "Nome do lado 1", sideTwo: "Nome do lado 2", sideOneContent: "Participantes do lado 1", sideTwoContent: "Participantes do lado 2", leaders: "Nome da seção: comandantes", leadersOne: "Comandantes do lado 1", leadersTwo: "Comandantes do lado 2", strength: "Nome da seção: forças", strengthOne: "Forças do lado 1", strengthTwo: "Forças do lado 2", losses: "Nome da seção: baixas", lossesOne: "Baixas do lado 1", lossesTwo: "Baixas do lado 2", customLabel: "Nome da seção", customOne: "Detalhe do lado 1", customTwo: "Detalhe do lado 2", remove: "Remover linha"
    },
    sample: {
      name: "Batalha de Lützen", campaign: "Parte da Guerra dos Trinta Anos", imageCaption: "A Batalha de Lützen, um confronto decisivo da Guerra dos Trinta Anos.", date: "6 / 16 de novembro de 1632", location: "Perto de Lützen, atual Alemanha", result: "Vitória protestante", sideOne: "Suécia e aliados", sideTwo: "Sacro Império Romano-Germânico", leadersOne: "Gustavo Adolfo<br>Bernardo de Saxe-Weimar", leadersTwo: "Albrecht von Wallenstein<br>Gottfried zu Pappenheim", strengthOne: "19.000 soldados", strengthTwo: "18.000 soldados", lossesOne: "3.400 mortos", lossesTwo: "Perdas significativas", consequences: "Morte de Gustavo Adolfo em combate\nA guerra continuou sob uma nova liderança"
    },
    labels: { belligerents: "Lados", commanders: "Comandantes e líderes", strength: "Forças", casualties: "Baixas", sideOne: "Lado 1", sideTwo: "Lado 2", date: "Data", location: "Local", result: "Resultado", consequences: "Consequências", yourImage: "Imagem do acontecimento" }
  }
};

const fieldSections = {
  identity: ["name", "campaign"],
  image: ["imageUrl", "imageFile", "imageWidth", "imageCaption", "boxWidth"],
  details: ["date", "location", "result", "consequencesTitle", "consequences"],
  sides: ["belligerents", "sideOne", "sideTwo", "sideOneContent", "sideTwoContent"],
  people: ["leaders", "leadersOne", "leadersTwo"],
  forces: ["strength", "strengthOne", "strengthTwo", "losses", "lossesOne", "lossesTwo"]
};
const textFields = new Set(["sideOneContent", "sideTwoContent", "leadersOne", "leadersTwo", "strengthOne", "strengthTwo", "lossesOne", "lossesTwo", "consequences"]);
const languageSelect = document.querySelector("#language-select");
const state = { locale: languageSelect.value, imageObjectUrl: "", customRows: [], nextRowId: 1, editedValues: Object.create(null), lastTextField: null };
const form = document.querySelector("#mockup-form");
const editorFields = document.querySelector("#editor-fields");
const customRows = document.querySelector("#custom-rows");
const preview = document.querySelector("#preview");

function currentText(id) {
  const element = form.elements.namedItem(id);
  return element && "value" in element ? element.value : "";
}

function makeInput(id, label, options = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = `field${options.full ? " full" : ""}`;
  const labelElement = document.createElement("label");
  labelElement.htmlFor = id;
  labelElement.textContent = label;
  wrapper.append(labelElement);

  let input;
  if (options.type === "file") {
    input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
  } else if (options.multiline) {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
    input.type = options.type || "text";
  }
  input.id = id;
  input.name = id;
  if (options.value !== undefined) input.value = options.value;
  if (options.min !== undefined) input.min = String(options.min);
  if (options.max !== undefined) input.max = String(options.max);
  if (options.step !== undefined) input.step = String(options.step);
  if (options.placeholder) input.placeholder = options.placeholder;
  wrapper.append(input);
  if (options.hint) {
    const hint = document.createElement("span");
    hint.className = "field-hint";
    hint.textContent = options.hint;
    wrapper.append(hint);
  }
  return wrapper;
}

function renderEditor() {
  const t = translations[state.locale];
  const sample = t.sample;
  editorFields.replaceChildren();
  for (const [sectionKey, keys] of Object.entries(fieldSections)) {
    const heading = document.createElement("h3");
    heading.className = "field-section";
    heading.textContent = t.sections[sectionKey];
    editorFields.append(heading);
    for (const key of keys) {
      let value = "";
      let options = {};
      if (key === "imageFile") {
        options = { type: "file", full: true, hint: t.fields.imageFileHint };
      } else if (key === "imageWidth") {
        value = "260";
        options = { type: "number", min: 120, max: 700, full: true };
      } else if (key === "boxWidth") {
        value = "312";
        options = { type: "number", min: 280, max: 700, full: true };
      } else {
        const labelDefaults = {
          belligerents: t.labels.belligerents,
          leaders: t.labels.commanders,
          strength: t.labels.strength,
          losses: t.labels.casualties,
          consequencesTitle: t.labels.consequences
        };
        value = Object.hasOwn(state.editedValues, key)
          ? state.editedValues[key]
          : sample[key] || labelDefaults[key] || t.labels[key] || "";
        options = { full: textFields.has(key), multiline: textFields.has(key) };
      }
      editorFields.append(makeInput(key, t.fields[key], { ...options, value }));
    }
  }
  renderCustomRows();
  renderPreview();
}

function renderCustomRows() {
  const t = translations[state.locale];
  customRows.replaceChildren();
  for (const [index, row] of state.customRows.entries()) {
    const wrapper = document.createElement("div");
    wrapper.className = "custom-row";
    wrapper.dataset.rowId = String(row.id);
    const label = document.createElement("input");
    label.type = "text";
    label.name = `custom-label-${row.id}`;
    label.placeholder = t.fields.customLabel;
    label.setAttribute("aria-label", t.fields.customLabel);
    label.value = row.label;
    const left = document.createElement("input");
    left.type = "text";
    left.name = `custom-left-${row.id}`;
    left.placeholder = t.fields.customOne;
    left.setAttribute("aria-label", t.fields.customOne);
    left.value = row.left;
    const right = document.createElement("input");
    right.type = "text";
    right.name = `custom-right-${row.id}`;
    right.placeholder = t.fields.customTwo;
    right.setAttribute("aria-label", t.fields.customTwo);
    right.value = row.right;
    const position = document.createElement("select");
    position.className = "custom-position";
    position.name = `custom-position-${row.id}`;
    position.setAttribute("aria-label", t.customPosition);
    for (const [key, label] of Object.entries(t.positions)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = label;
      position.append(option);
    }
    position.value = row.position;
    const moveUp = document.createElement("button");
    moveUp.type = "button";
    moveUp.className = "move-row";
    moveUp.textContent = "↑";
    moveUp.title = t.moveUp;
    moveUp.setAttribute("aria-label", t.moveUp);
    moveUp.disabled = index === 0;
    moveUp.addEventListener("click", () => moveCustomRow(row.id, -1));
    const moveDown = document.createElement("button");
    moveDown.type = "button";
    moveDown.className = "move-row";
    moveDown.textContent = "↓";
    moveDown.title = t.moveDown;
    moveDown.setAttribute("aria-label", t.moveDown);
    moveDown.disabled = index === state.customRows.length - 1;
    moveDown.addEventListener("click", () => moveCustomRow(row.id, 1));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-row";
    remove.textContent = "×";
    remove.title = t.fields.remove;
    remove.setAttribute("aria-label", t.fields.remove);
    remove.addEventListener("click", () => {
      state.customRows = state.customRows.filter(item => item.id !== row.id);
      renderCustomRows();
      renderPreview();
    });
    wrapper.append(label, left, right, position, moveUp, moveDown, remove);
    customRows.append(wrapper);
  }
}

function moveCustomRow(rowId, offset) {
  const index = state.customRows.findIndex(row => row.id === rowId);
  const targetIndex = index + offset;
  if (index < 0 || targetIndex < 0 || targetIndex >= state.customRows.length) return;
  [state.customRows[index], state.customRows[targetIndex]] = [state.customRows[targetIndex], state.customRows[index]];
  renderCustomRows();
  renderPreview();
}

function safeUrl(value) {
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function appendSafeMarkup(parent, value) {
  const parsed = new DOMParser().parseFromString(value, "text/html");
  const allowed = new Set(["A", "BR", "IMG", "B", "STRONG", "I", "EM", "U", "SMALL", "SPAN"]);
  function appendNodes(source, target) {
    for (const node of source.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        target.append(document.createTextNode(node.textContent || ""));
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (!allowed.has(node.tagName)) {
          appendNodes(node, target);
          continue;
        }
        const element = document.createElement(node.tagName.toLowerCase());
        if (node.tagName === "A") {
          const href = safeUrl(node.getAttribute("href") || "");
          if (href) {
            element.href = href;
            element.target = "_blank";
            element.rel = "noopener noreferrer";
          }
        } else if (node.tagName === "IMG") {
          const src = safeUrl(node.getAttribute("src") || "");
          if (!src) continue;
          element.src = src;
          element.alt = node.getAttribute("alt") || "";
          for (const dimension of ["width", "height"]) {
            const raw = node.getAttribute(dimension) || "";
            const parsedSize = Number.parseInt(raw, 10);
            if (/^\d+(?:px)?$/.test(raw) && parsedSize > 0 && parsedSize <= 1200) {
              element.setAttribute(dimension, String(parsedSize));
            }
          }
        } else if (node.tagName === "SPAN" && node.classList.contains("wiki-link")) {
          element.className = "wiki-link";
        }
        appendNodes(node, element);
        target.append(element);
      }
    }
  }
  appendNodes(parsed.body, parent);
}

function appendText(parent, value, emptyLabel = "") {
  const text = value.trim();
  if (text) appendSafeMarkup(parent, text);
  else if (emptyLabel) {
    const empty = document.createElement("span");
    empty.className = "wiki-empty";
    empty.textContent = emptyLabel;
    parent.append(empty);
  }
}

function addSection(parent, label) {
  const heading = document.createElement("div");
  heading.className = "wiki-section";
  heading.textContent = label;
  parent.append(heading);
}

function addColumns(parent, leftText, rightText, leftLabel, rightLabel) {
  const columns = document.createElement("div");
  columns.className = "wiki-columns";
  for (const [text, label] of [[leftText, leftLabel], [rightText, rightLabel]]) {
    const side = document.createElement("div");
    side.className = "wiki-side";
    if (label) {
      const sideHeading = document.createElement("div");
      sideHeading.className = "wiki-side-label";
      sideHeading.textContent = label;
      side.append(sideHeading);
    }
    appendText(side, text);
    columns.append(side);
  }
  parent.append(columns);
}

function addList(parent, value) {
  const items = value.split(/\r?\n/).map(item => item.trim()).filter(Boolean);
  if (!items.length) return false;
  const list = document.createElement("ul");
  list.className = "wiki-list";
  for (const item of items) {
    const listItem = document.createElement("li");
    appendText(listItem, item);
    list.append(listItem);
  }
  parent.append(list);
  return true;
}

function renderCustomSectionsAt(position) {
  for (const row of state.customRows) {
    if (row.position !== position || (!row.label.trim() && !row.left.trim() && !row.right.trim())) continue;
    if (row.label.trim()) addSection(preview, row.label.trim());
    if (row.left.trim() || row.right.trim()) addColumns(preview, row.left, row.right, "", "");
  }
}

function renderPreview() {
  if (!form.elements.namedItem("name")) return;
  const t = translations[state.locale];
  preview.replaceChildren();
  const width = Math.max(280, Math.min(700, Number(currentText("boxWidth")) || 390));
  preview.style.width = `min(100%, ${width}px)`;

  const title = document.createElement("div");
  title.className = "wiki-title";
  appendText(title, currentText("name"), t.fields.name);
  preview.append(title);
  if (currentText("campaign").trim()) {
    const subtitle = document.createElement("div");
    subtitle.className = "wiki-subtitle";
    appendText(subtitle, currentText("campaign"));
    preview.append(subtitle);
  }

  const imageUrl = currentText("imageUrl").trim();
  const imageSrc = imageUrl ? safeUrl(imageUrl) : state.imageObjectUrl;
  if (imageSrc) {
    const imageCell = document.createElement("div");
    imageCell.className = "wiki-image-cell";
    const image = document.createElement("img");
    image.className = "wiki-image";
    image.src = imageSrc;
    image.alt = currentText("imageCaption") || t.labels.yourImage;
    const imageWidth = Math.max(120, Math.min(700, Number(currentText("imageWidth")) || 260));
    image.style.width = `min(100%, ${imageWidth}px)`;
    image.addEventListener("error", () => {
      imageCell.replaceChildren();
      const error = document.createElement("span");
      error.className = "wiki-empty";
      error.textContent = t.fields.imageUrl;
      imageCell.append(error);
    }, { once: true });
    imageCell.append(image);
    preview.append(imageCell);
  }
  if (currentText("imageCaption").trim()) {
    const caption = document.createElement("div");
    caption.className = "wiki-image-caption";
    appendText(caption, currentText("imageCaption"));
    preview.append(caption);
  }

  const meta = document.createElement("table");
  meta.className = "wiki-meta";
  const metaBody = document.createElement("tbody");
  for (const [key, label] of [["date", t.labels.date], ["location", t.labels.location], ["result", t.labels.result]]) {
    const value = currentText(key).trim();
    if (!value) continue;
    const row = document.createElement("tr");
    const heading = document.createElement("th");
    heading.scope = "row";
    heading.textContent = label;
    const cell = document.createElement("td");
    appendText(cell, value);
    row.append(heading, cell);
    metaBody.append(row);
  }
  if (metaBody.childElementCount) {
    meta.append(metaBody);
    preview.append(meta);
  }
  if (currentText("consequences").trim()) {
    const heading = currentText("consequencesTitle").trim();
    if (heading) addSection(preview, heading);
    addList(preview, currentText("consequences"));
  }
  renderCustomSectionsAt("result");

  const groups = [
    { heading: currentText("belligerents"), key: "belligerents", left: "sideOneContent", right: "sideTwoContent", labels: [currentText("sideOne"), currentText("sideTwo")], position: "belligerents" },
    { heading: currentText("leaders"), key: "commanders", left: "leadersOne", right: "leadersTwo", position: "commanders" },
    { heading: currentText("strength"), key: "strength", left: "strengthOne", right: "strengthTwo", position: "strength" },
    { heading: currentText("losses"), key: "casualties", left: "lossesOne", right: "lossesTwo", position: "casualties" }
  ];
  for (const group of groups) {
    const left = currentText(group.left);
    const right = currentText(group.right);
    const labelOne = group.labels ? group.labels[0] : "";
    const labelTwo = group.labels ? group.labels[1] : "";
    if (group.heading.trim() && (left.trim() || right.trim())) {
      addSection(preview, group.heading.trim());
      addColumns(preview, left, right, labelOne, labelTwo);
    }
    renderCustomSectionsAt(group.position);
  }
}

function copyComputedStyles(source, destination) {
  const computed = getComputedStyle(source);
  for (const property of computed) {
    destination.style.setProperty(property, computed.getPropertyValue(property));
  }
  for (let index = 0; index < source.children.length; index += 1) {
    copyComputedStyles(source.children[index], destination.children[index]);
  }
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error || new Error("Could not read an image for export.")));
    reader.readAsDataURL(blob);
  });
}

async function inlineExportImages(root) {
  const images = [...root.querySelectorAll("img")];
  await Promise.all(images.map(async image => {
    const response = await fetch(image.currentSrc || image.src, {
      mode: "cors",
      credentials: "omit"
    });
    if (!response.ok) throw new Error(`Image export failed with HTTP ${response.status}.`);
    const blob = await response.blob();
    if (!blob.type.startsWith("image/")) throw new Error("An image URL did not return an image.");
    image.src = await blobToDataUrl(blob);
  }));
}

function canvasToPng(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error("The browser could not encode the infographic as PNG."));
    }, "image/png");
  });
}

function triggerDownload(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
}

async function downloadPreview() {
  const button = document.querySelector("#download-button");
  const status = document.querySelector("#copy-status");
  const t = translations[state.locale];
  button.disabled = true;
  status.textContent = "";
  delete status.dataset.state;
  const name = currentText("name")
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}-]+/gu, "-")
    .replace(/^-+|-+$/g, "");

  try {
    const source = document.querySelector("#preview");
    const bounds = source.getBoundingClientRect();
    const width = Math.ceil(bounds.width);
    const height = Math.ceil(bounds.height);
    if (width < 1 || height < 1) throw new Error("The preview has no visible content to export.");

    const clone = source.cloneNode(true);
    copyComputedStyles(source, clone);
    clone.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    clone.style.setProperty("width", `${width}px`, "important");
    clone.style.setProperty("height", "auto", "important");
    clone.style.setProperty("max-width", "none", "important");
    clone.style.setProperty("overflow", "visible", "important");
    await inlineExportImages(clone);

    const scale = Math.min(
      3,
      8192 / width,
      8192 / height,
      Math.sqrt(20000000 / (width * height))
    );
    if (scale < 1) throw new Error("The preview is too large to export at a readable resolution.");

    const markup = new XMLSerializer().serializeToString(clone);
    const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="${width * scale}" height="${height * scale}" viewBox="0 0 ${width} ${height}"><foreignObject width="100%" height="100%">${markup}</foreignObject></svg>`;

    const image = new Image();
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgMarkup)}`;
    await image.decode();

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    const context = canvas.getContext("2d");
    if (!context) throw new Error("The browser could not prepare an image canvas.");
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const png = await canvasToPng(canvas);
    const downloadUrl = URL.createObjectURL(png);
    triggerDownload(downloadUrl, `wikimockup-${name || "infobox"}.png`);
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    status.textContent = t.downloadSuccess;
  } catch (error) {
    console.error("WikiMockup PNG export failed:", error);
    status.dataset.state = "error";
    status.textContent = t.downloadError;
  } finally {
    button.disabled = false;
  }
}

function applyTranslations() {
  const t = translations[state.locale];
  document.documentElement.lang = state.locale;
  document.querySelector("#language-label").textContent = t.language;
  document.querySelector("#page-title").textContent = t.title;
  document.querySelector("#description").textContent = t.description;
  document.querySelector("#guide-eyebrow").textContent = t.guideEyebrow;
  document.querySelector("#instructions-title").textContent = t.guideTitle;
  document.querySelector("#guide-list").innerHTML = t.guide.map(item => `<li>${item}</li>`).join("");
  document.querySelector("#editor-eyebrow").textContent = t.editorEyebrow;
  document.querySelector("#editor-title").textContent = t.editorTitle;
  document.querySelector("#reset-button").textContent = t.reset;
  document.querySelector("#preview-eyebrow").textContent = t.previewEyebrow;
  document.querySelector("#preview-title").textContent = t.previewTitle;
  document.querySelector("#live-label").textContent = t.live;
  document.querySelector("#preview-note").textContent = t.previewNote;
  document.querySelector("#custom-editor-title").textContent = t.addSectionTitle;
  document.querySelector("#custom-editor-help").textContent = t.addSectionHelp;
  document.querySelector("#add-row-button").textContent = t.addRow;
  document.querySelector("#apply-button").textContent = t.apply;
  document.querySelector("#copy-button").textContent = t.copy;
  document.querySelector("#download-button").textContent = t.download;
  document.querySelector("#highlight-button").textContent = t.highlight;
  document.querySelector("#highlight-help").textContent = t.highlightHelp;
  document.querySelector("#footer-copy").textContent = t.footer.replace("{year}", String(new Date().getFullYear()));
  document.querySelector("#footer-note").textContent = t.nonprofit;
  renderEditor();
}

function resetExample() {
  if (state.imageObjectUrl) URL.revokeObjectURL(state.imageObjectUrl);
  state.imageObjectUrl = "";
  state.customRows = [];
  state.editedValues = Object.create(null);
  renderEditor();
  document.querySelector("#copy-status").textContent = "";
}

languageSelect.addEventListener("change", () => {
  state.locale = languageSelect.value;
  document.querySelector("#copy-status").textContent = "";
  delete document.querySelector("#copy-status").dataset.state;
  applyTranslations();
});

document.querySelector("#add-row-button").addEventListener("click", () => {
  state.customRows.push({ id: state.nextRowId++, label: "", left: "", right: "", position: "result" });
  renderCustomRows();
  renderPreview();
});

document.querySelector("#reset-button").addEventListener("click", resetExample);
document.querySelector("#apply-button").addEventListener("click", renderPreview);

form.addEventListener("input", event => {
  const target = event.target;
  if (target.name && target.name.startsWith("custom-")) {
    const [, kind, idText] = target.name.split("-");
    const row = state.customRows.find(item => item.id === Number(idText));
    const property = { label: "label", left: "left", right: "right" }[kind];
    if (row && property) row[property] = target.value;
  } else if (target.name && target.name !== "imageFile") {
    state.editedValues[target.name] = target.value;
  }
  renderPreview();
});

form.addEventListener("focusin", event => {
  const target = event.target;
  if ((target instanceof HTMLInputElement && target.type === "text") || target instanceof HTMLTextAreaElement) {
    state.lastTextField = target;
  }
});

form.addEventListener("change", event => {
  const target = event.target;
  if (target instanceof HTMLSelectElement && target.name.startsWith("custom-position-")) {
    const rowId = Number(target.name.slice("custom-position-".length));
    const row = state.customRows.find(item => item.id === rowId);
    if (row) {
      row.position = target.value;
      renderPreview();
    }
    return;
  }
  if (target.id === "imageFile" && target.files && target.files[0]) {
    if (state.imageObjectUrl) URL.revokeObjectURL(state.imageObjectUrl);
    state.imageObjectUrl = URL.createObjectURL(target.files[0]);
    renderPreview();
  }
});

document.querySelector("#highlight-button").addEventListener("click", () => {
  const target = state.lastTextField;
  const start = target?.selectionStart;
  const end = target?.selectionEnd;
  if (!target || start === null || start === undefined || end === null || end === undefined || start === end) {
    const status = document.querySelector("#copy-status");
    status.dataset.state = "error";
    status.textContent = translations[state.locale].highlightHelp;
    return;
  }
  const selection = target.value.slice(start, end);
  const prefix = '<span class="wiki-link">';
  const wrapped = `${prefix}${selection}</span>`;
  target.setRangeText(wrapped, start, end, "select");
  target.setSelectionRange(start + prefix.length, start + prefix.length + selection.length);
  target.focus();
  target.dispatchEvent(new Event("input", { bubbles: true }));
});

document.querySelector("#copy-button").addEventListener("click", async () => {
  const t = translations[state.locale];
  try {
    await navigator.clipboard.writeText(document.querySelector("#preview-output").outerHTML);
    document.querySelector("#copy-status").textContent = t.copied;
    delete document.querySelector("#copy-status").dataset.state;
  } catch (error) {
    console.error("WikiMockup HTML copy failed:", error);
    document.querySelector("#copy-status").dataset.state = "error";
    document.querySelector("#copy-status").textContent = t.copyError;
  }
});

document.querySelector("#download-button").addEventListener("click", downloadPreview);

applyTranslations();
