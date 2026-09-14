// Turkish and German translations for every element tagged with data-i18n / data-i18n-placeholder.
// English is captured from the markup itself at load time, so it never goes stale.
(function () {
  var TR = {
    'nav.services': 'Hizmetler',
    'nav.products': 'Ürünler',
    'nav.approach': 'Yaklaşım',
    'nav.industries': 'Sektörler',
    'nav.contact': 'İletişim',
    'nav.start': 'Proje başlat',

    'hero.title': 'Dayanıklı <em>dijital ürünler</em> inşa ediyoruz.',
    'hero.desc': 'Technous küçük ve deneyimli bir mühendislik ekibidir. Güçlü mühendisliği özenli ürün anlayışıyla birleştirerek modern, güvenilir ve gerçekten size ait hissettiren yazılımlar tasarlar, geliştirir ve işletiriz.',
    'hero.explore': 'Hizmetleri keşfet',
    'hero.products': 'Ürünlerimizi görün',

    'feat.1.title': 'Hızlı teslimat',
    'feat.1.desc': 'Haftalar içinde çalışan yazılım; en baştan kalite güvencesiyle, sıkı döngülerle teslim.',
    'feat.2.title': 'Varsayılan olarak güvenli',
    'feat.2.desc': 'Akıllı varsayılanlar, en az yetki ilkesi ve her adımda inceleme; siz düşünmek zorunda kalmayın.',
    'feat.3.title': 'Büyümeye hazır',
    'feat.3.desc': 'İlk kullanıcıdan milyonlara, ürününüzle birlikte ölçeklenen bir mimari.',
    'feat.4.title': 'Uçtan uca deneyimli ekip',
    'feat.4.desc': 'Keşif, tasarım, geliştirme ve lansmanı tek bir küçük ekip üstlenir. Devir teslim yok, sürpriz yok.',

    'services.badge': 'Hizmetler',
    'services.title': 'Uçtan uca özenle geliştirilen yazılım',
    'services.desc': 'İlk fikirden tam ölçekli lansmana kadar Technous, yaratıcılığı sağlam mühendislikle birleştirir; ürününüz büyürken keskinliğini korur.',
    'services.1.title': 'Ürün mühendisliği',
    'services.1.desc': 'Temiz kod ve özenli kullanıcı deneyimiyle cilalı, hızlı ve güvenilir web veya mobil deneyimler.',
    'services.2.title': 'Ürün keşfi',
    'services.2.desc': 'Araştırma, tel çerçeveler ve hızlı prototiplerle doğru yönü erkenden doğrulayın.',
    'services.3.title': 'Bulut ve DevOps',
    'services.3.desc': 'Kod olarak altyapıdan izlemeye kadar sisteminiz kararlı, gözlemlenebilir ve kolay dağıtılabilir kalır.',
    'services.4.title': 'Ekip takviyesi',
    'services.4.desc': 'İş akışınıza sorunsuz uyum sağlayan ve ilk günden gerçek ilerleme kaydeden deneyimli bir geliştirici.',

    'products.badge': 'Ürünler',
    'products.title': 'Kalbimize yakın ürünler',
    'products.desc': 'Kendi uygulamalarımızı da müşteri işlerine gösterdiğimiz özenle geliştiriyoruz. Bu, bir ürünü her gün ayakta tutmanın ne gerektirdiğini bize hatırlatıyor.',
    'products.tact.tagline': 'Her seferinde doğru söyleyin',
    'products.tact.desc': 'Tact mesajlarınıza doğru tonu verir ve yapay zeka komutlarınızı daha etkili hale getirir. Tasarımı gereği gizli; sözleriniz asla kaydedilmez.',
    'products.nimble.tagline': 'Sizi gerçekten yataktan kaldıran alarm',
    'products.nimble.desc': "Mira, Arden, Vexo veya Kai'den birini seçin; ruh halinize, hedeflerinize ve alışkanlıklarınıza göre hazırlanmış taze bir mesajla onların sesine uyanın.",
    'products.soon': 'Yakında',

    'approach.badge': 'Yaklaşım',
    'approach.title': 'İhtiyaçlarınıza uyum sağlayan bir iş akışı',
    'approach.desc': 'Net kontrol noktaları, şeffaf iletişim ve iş birliğini zahmetsiz kılan dokümantasyon.',
    'approach.1.title': 'Şekillendir',
    'approach.1.desc': 'Neyi inşa ettiğimizi ve başarının neye benzediğini birlikte, işi karmaşıklaştırmadan tanımlarız.',
    'approach.2.title': 'Geliştir',
    'approach.2.desc': 'Her adımına kalite güvencesi işlenmiş, sıkı ve odaklı döngülerle tasarım ve geliştirme.',
    'approach.3.title': 'Yayınla',
    'approach.3.desc': 'Kontrol listeleri, izleme ve kritik dönemde destekle sorunsuz bir yayına alma.',
    'approach.4.title': 'İyileştir',
    'approach.4.desc': 'Ürünü gerçek verilerle, deneylerle ve performans iyileştirmeleriyle geliştirme.',

    'industries.badge': 'Sektörler',
    'industries.title': 'Her alana taşınan uzmanlık',
    'industries.desc': 'SaaS, yapay zeka, endüstriyel BT ve diğer hızlı sektörlerdeki ekiplerin yavaşlamadan güvenilir ürünler geliştirmesine yardımcı oluyoruz.',
    'industries.1.title': 'SaaS ve platformlar',
    'industries.1.desc': 'Çok kiracılı sistemler, kullanım analitiği ve doğal olarak ölçeklenen faturalama.',
    'industries.2.title': 'Yapay zeka ve otomasyon',
    'industries.2.desc': 'İnsan odaklı yapay zeka araçları, LLM iş akışları ve güvenilir değerlendirme düzenekleri.',
    'industries.3.title': 'Web ve mobil',
    'industries.3.desc': 'Güçlü veri pratikleri ve akıcı performansla net, tutarlı web ve mobil deneyimler.',
    'industries.4.title': 'Endüstriyel BT',
    'industries.4.desc': 'Üretim, lojistik ve endüstriyel izleme ile kontrol için özel sistemler.',

    'cta.badge': 'Birlikte inşa edelim',
    'cta.title': "Bir sonraki sürümünüzü Technous'a getirin",
    'cta.desc': 'Yol haritanızı paylaşın; onu kilometre taşları ve özel bir uygulama yaklaşımıyla net bir plana dönüştürelim.',
    'cta.reach': 'Bize ulaşın',
    'cta.terms': 'Şartlarımızı inceleyin',

    'footer.tagline': 'Technous LTD. Özenle yapıldı.',
    'footer.privacy': 'Gizlilik politikası',
    'footer.terms': 'Şartlar ve koşullar',
    'footer.contact': 'İletişim',
    'footer.home': 'Ana sayfa',

    'contact.badge': 'İletişim',
    'contact.title': 'Bir sonraki sürümünüzü konuşalım',
    'contact.desc': 'Hedeflerinizi, zaman planınızı ve çözmek istediğiniz zorlukları paylaşın. Bir iş günü içinde yanıt veriyoruz.',
    'contact.form.title': 'Proje talebi',
    'contact.form.name': 'Ad soyad',
    'contact.form.email': 'İş e-postası',
    'contact.form.company': 'Şirket',
    'contact.form.message': 'Size nasıl yardımcı olabiliriz?',
    'contact.form.send': 'Mesaj gönder',
    'contact.details.title': 'Kısa bilgiler',
    'contact.details.desc': 'Doğrudan e-posta göndermeyi mi tercih edersiniz? Yazın, notunuzu doğru ürün sorumlusuna iletelim.',
    'contact.details.remote': 'Uzaktan öncelikli, GMT çalışma saatleri',
    'contact.details.response': '1 iş günü içinde yanıt',
    'contact.include.title': 'Neleri belirtmelisiniz',
    'contact.include.1': 'Proje hedefleri ve teslim tarihleri',
    'contact.include.2': 'Ana platformlar (web, mobil, bulut)',
    'contact.include.3': 'Bütçe sınırları ve ekip büyüklüğü',
    'contact.status': 'E-posta istemciniz açılıyor. Açılmazsa bize doğrudan hello@technous.dev adresinden yazın',

    'ph.contact.form.company': 'Şirket adı',
    'ph.contact.form.message': 'Ürün geliştirme, platform modernizasyonu veya ekip takviyesi detayları'
  };

  var DE = {
    'nav.services': 'Leistungen',
    'nav.products': 'Produkte',
    'nav.approach': 'Vorgehen',
    'nav.industries': 'Branchen',
    'nav.contact': 'Kontakt',
    'nav.start': 'Projekt starten',

    'hero.title': 'Wir bauen belastbare <em>digitale Produkte</em>.',
    'hero.desc': 'Technous ist ein kleines Team erfahrener Engineers. Wir entwerfen, entwickeln und betreiben Software, die modern und zuverlässig ist und sich wirklich nach Ihnen anfühlt – starke Technik verbunden mit durchdachtem Produktverständnis.',
    'hero.explore': 'Leistungen entdecken',
    'hero.products': 'Unsere Produkte ansehen',

    'feat.1.title': 'Schnelle Lieferung',
    'feat.1.desc': 'Lauffähige Software in wenigen Wochen, in kurzen Zyklen ausgeliefert – mit QA von Anfang an.',
    'feat.2.title': 'Sicher von Haus aus',
    'feat.2.desc': 'Sinnvolle Voreinstellungen, minimale Rechte und Reviews bei jedem Schritt, damit Sie nicht daran denken müssen.',
    'feat.3.title': 'Für Wachstum gebaut',
    'feat.3.desc': 'Eine Architektur, die mit Ihrem Produkt wächst statt dagegen – vom ersten Nutzer bis zu Millionen.',
    'feat.4.title': 'Erfahren, von Anfang bis Ende',
    'feat.4.desc': 'Ein kleines Team verantwortet Discovery, Design, Entwicklung und Launch. Keine Übergaben, keine Überraschungen.',

    'services.badge': 'Leistungen',
    'services.title': 'Software, durchgängig mit Sorgfalt gebaut',
    'services.desc': 'Vom ersten Konzept bis zum vollen Launch verbindet Technous Kreativität mit solider Technik, damit Ihr Produkt auch beim Wachsen scharf bleibt.',
    'services.1.title': 'Produktentwicklung',
    'services.1.desc': 'Ausgereifte, schnelle und zuverlässige Web- und Mobile-Erlebnisse mit sauberem Code und durchdachter UX.',
    'services.2.title': 'Product Discovery',
    'services.2.desc': 'Früh Klarheit – mit Research, Wireframes und schnellen Prototypen, die die richtige Richtung bestätigen.',
    'services.3.title': 'Cloud und DevOps',
    'services.3.desc': 'Von Infrastructure as Code bis Monitoring: Ihr System bleibt stabil, beobachtbar und einfach auszurollen.',
    'services.4.title': 'Team-Verstärkung',
    'services.4.desc': 'Erfahrene Entwicklung, die sich nahtlos in Ihren Workflow einfügt und ab Tag eins echte Fortschritte liefert.',

    'products.badge': 'Produkte',
    'products.title': 'Produkte, die uns am Herzen liegen',
    'products.desc': 'Wir entwickeln unsere eigenen Apps mit derselben Sorgfalt wie Kundenprojekte. Das hält uns ehrlich darüber, was der tägliche Betrieb eines Produkts wirklich verlangt.',
    'products.tact.tagline': 'Jedes Mal den richtigen Ton treffen',
    'products.tact.desc': 'Tact gibt Ihren Nachrichten den perfekten Ton und macht Ihre KI-Prompts wirksamer. Privat by Design – Ihre Worte werden nie gespeichert.',
    'products.nimble.tagline': 'Der Wecker, der Sie wirklich aus dem Bett holt',
    'products.nimble.desc': 'Wählen Sie eine von vier Figuren – Mira, Arden, Vexo oder Kai – und wachen Sie zu ihrer Stimme auf, mit einer frischen Nachricht rund um Ihre Stimmung, Ihre Ziele und Ihre Gewohnheiten.',
    'products.soon': 'Bald',

    'approach.badge': 'Vorgehen',
    'approach.title': 'Ein Ablauf, der sich Ihren Anforderungen anpasst',
    'approach.desc': 'Klare Checkpoints, transparente Kommunikation und Dokumentation, die die Zusammenarbeit mühelos macht.',
    'approach.1.title': 'Abstecken',
    'approach.1.desc': 'Gemeinsam definieren wir, was wir bauen und wie Erfolg aussieht – ohne es unnötig kompliziert zu machen.',
    'approach.2.title': 'Bauen',
    'approach.2.desc': 'Design und Entwicklung in kurzen, fokussierten Zyklen mit QA in jedem einzelnen Schritt.',
    'approach.3.title': 'Launch',
    'approach.3.desc': 'Ein reibungsloser Rollout mit Checklisten, Monitoring und Unterstützung in der kritischen Phase.',
    'approach.4.title': 'Optimieren',
    'approach.4.desc': 'Das Produkt verfeinern – mit echten Daten, Experimenten und Performance-Verbesserungen.',

    'industries.badge': 'Branchen',
    'industries.title': 'Expertise, die sich übertragen lässt',
    'industries.desc': 'Wir helfen Teams in SaaS, KI, industrieller IT und anderen schnelllebigen Branchen, verlässliche Produkte zu bauen, ohne langsamer zu werden.',
    'industries.1.title': 'SaaS und Plattformen',
    'industries.1.desc': 'Mandantenfähige Systeme, Nutzungsanalysen und eine Abrechnung, die von selbst mitskaliert.',
    'industries.2.title': 'KI und Automatisierung',
    'industries.2.desc': 'Menschzentrierte KI-Tools, LLM-Workflows und verlässliche Evaluations-Setups.',
    'industries.3.title': 'Web und Mobile',
    'industries.3.desc': 'Klare, konsistente Web- und Mobile-Erlebnisse mit sorgfältigem Umgang mit Daten und flüssiger Performance.',
    'industries.4.title': 'Industrielle IT',
    'industries.4.desc': 'Spezialisierte Systeme für Fertigung, Logistik sowie industrielle Überwachung und Steuerung.',

    'cta.badge': 'Lassen Sie uns bauen',
    'cta.title': 'Bringen Sie Ihr nächstes Release zu Technous',
    'cta.desc': 'Teilen Sie Ihre Roadmap, und wir machen daraus einen klaren Plan mit Meilensteinen und einem eigenen Umsetzungsansatz.',
    'cta.reach': 'Jetzt Kontakt aufnehmen',
    'cta.terms': 'Unsere Bedingungen ansehen',

    'footer.tagline': 'Technous LTD. Mit Sorgfalt gebaut.',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'Allgemeine Geschäftsbedingungen',
    'footer.contact': 'Kontakt',
    'footer.home': 'Startseite',

    'contact.badge': 'Kontakt',
    'contact.title': 'Sprechen wir über Ihr nächstes Release',
    'contact.desc': 'Teilen Sie Ihre Ziele, Ihren Zeitplan und die Herausforderungen, die Sie lösen möchten. Wir antworten innerhalb eines Werktags.',
    'contact.form.title': 'Projektanfrage',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'Geschäftliche E-Mail',
    'contact.form.company': 'Unternehmen',
    'contact.form.message': 'Wie können wir helfen?',
    'contact.form.send': 'Nachricht senden',
    'contact.details.title': 'Kurz und knapp',
    'contact.details.desc': 'Lieber direkt per E-Mail? Schreiben Sie uns, wir leiten Ihre Nachricht an die richtige Ansprechperson weiter.',
    'contact.details.remote': 'Remote-first, Kernzeiten GMT',
    'contact.details.response': 'Antwort innerhalb von 1 Werktag',
    'contact.include.title': 'Was hilfreich ist',
    'contact.include.1': 'Projektziele und Fristen',
    'contact.include.2': 'Wichtigste Plattformen (Web, Mobile, Cloud)',
    'contact.include.3': 'Budgetrahmen und Teamgröße',
    'contact.status': 'Ihr E-Mail-Programm wird geöffnet. Falls nicht, schreiben Sie uns direkt an hello@technous.dev',

    'ph.contact.form.company': 'Firmenname',
    'ph.contact.form.message': 'Details zu Produktentwicklung, Plattform-Modernisierung oder Team-Verstärkung'
  };

  // Strings that live only in script, so they are not captured from the markup.
  var EN = {
    'contact.status': 'Opening your email client. If it doesn\'t open, email us directly at hello@technous.dev'
  };

  var DICTS = { en: EN, tr: TR, de: DE };
  var LANGS = ['en', 'tr', 'de'];

  var root = document.documentElement;
  var textNodes = document.querySelectorAll('[data-i18n]');
  var placeholderNodes = document.querySelectorAll('[data-i18n-placeholder]');

  textNodes.forEach(function (el) {
    var value = el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent;
    EN[el.getAttribute('data-i18n')] = value.trim().replace(/\s+/g, ' ');
  });
  placeholderNodes.forEach(function (el) {
    EN['ph.' + el.getAttribute('data-i18n-placeholder')] = el.getAttribute('placeholder') || '';
  });

  function apply(lang) {
    var dict = DICTS[lang] || EN;
    textNodes.forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value == null) value = EN[el.getAttribute('data-i18n')];
      if (value != null) {
        if (el.hasAttribute('data-i18n-html')) el.innerHTML = value;
        else el.textContent = value;
      }
    });
    placeholderNodes.forEach(function (el) {
      var value = dict['ph.' + el.getAttribute('data-i18n-placeholder')];
      if (value == null) value = EN['ph.' + el.getAttribute('data-i18n-placeholder')];
      if (value != null) el.setAttribute('placeholder', value);
    });
    root.setAttribute('lang', lang);
    document.querySelectorAll('.lang-current').forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    try { localStorage.setItem('lang', lang); } catch (e) { }
  }

  function initialLang() {
    try {
      var saved = localStorage.getItem('lang');
      if (LANGS.indexOf(saved) > -1) return saved;
    } catch (e) { }
    var nav = (navigator.language || '').toLowerCase();
    for (var i = 0; i < LANGS.length; i++) {
      if (nav.indexOf(LANGS[i]) === 0) return LANGS[i];
    }
    return 'en';
  }

  window.siteLang = function () {
    var lang = root.getAttribute('lang');
    return LANGS.indexOf(lang) > -1 ? lang : 'en';
  };
  window.siteText = function (key) {
    return DICTS[window.siteLang()][key] || EN[key] || '';
  };

  apply(initialLang());

  // Language menus: a trigger that opens a small list of options on desktop,
  // and the same options laid out inline inside the mobile nav.
  var menus = document.querySelectorAll('.lang-switch');

  function closeMenus(except) {
    menus.forEach(function (menu) {
      if (menu === except) return;
      var trigger = menu.querySelector('.lang-trigger');
      var list = menu.querySelector('.lang-menu');
      if (!trigger || !list) return;
      list.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    });
  }

  menus.forEach(function (menu) {
    var trigger = menu.querySelector('.lang-trigger');
    var list = menu.querySelector('.lang-menu');
    if (trigger && list) {
      trigger.addEventListener('click', function (event) {
        event.stopPropagation();
        var open = list.hidden;
        closeMenus(menu);
        list.hidden = !open;
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  });

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.getAttribute('data-lang'));
      closeMenus();
    });
  });

  document.addEventListener('click', function () { closeMenus(); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenus();
  });
})();
