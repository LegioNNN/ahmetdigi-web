export type Lang = "tr" | "en";

export const content = {
  tr: {
    nav: {
      services: "Hizmetler",
      about: "Hakkımda & Deneyim",
      process: "Süreç",
      contact: "İletişim",
    },
    hero: {
      badge: "DİJİTAL AJANS",
      headline: "Geleneksel işi\ndijitale\ntaşıyoruz.",
      sub: "Web geliştirmeden yerel SEO'ya, marka kimliğinden performans pazarlamasına — işletmene ölçülebilir ticari değer katan dijital sistemler kuruyoruz.",
      cta: "Başlayalım",
      ctaSub: "Ücretsiz keşif görüşmesi",
    },
    services: {
      title: "Hizmetler",
      categories: [
        {
          label: "Geliştirme & Teknoloji",
          items: [
            {
              name: "Web Geliştirme",
              desc: "Hızlı, SEO dostu, modern web siteleri ve web uygulamaları. Performans öncelikli.",
            },
            {
              name: "E-Ticaret Çözümleri",
              desc: "Online satış altyapısı, ödeme entegrasyonu ve stok yönetimi. Satışa hazır dijital mağaza.",
            },
            {
              name: "Dijital Dönüşüm",
              desc: "Geleneksel iş akışlarını dijitalleştiriyoruz. Sıfırdan çevrimiçi varlık inşası.",
            },
            {
              name: "Otomasyon & Entegrasyon",
              desc: "Randevu, CRM ve WhatsApp entegrasyonları. Manuel işleri otomatiğe bağlıyoruz.",
            },
          ],
        },
        {
          label: "Pazarlama & Büyüme",
          items: [
            {
              name: "SEO & Yerel SEO",
              desc: "Arama motorlarında üst sıralar. Yerel aramalarda işletmenizi öne çıkarıyoruz.",
            },
            {
              name: "Performans Pazarlaması",
              desc: "Google ve Meta reklamları. Ölçülebilir, satışa dönüşen kampanya yönetimi.",
            },
            {
              name: "Google Maps Optimizasyonu",
              desc: "Haritalarda görünürlük. Müşteriler işletmenizi kolayca bulsun.",
            },
            {
              name: "Sosyal Medya Yönetimi",
              desc: "İçerik üretimi, planlama ve topluluk yönetimi. Her platformda aktif ve tutarlı.",
            },
            {
              name: "Sosyal Medya Büyümesi",
              desc: "Organik takipçi artışı, etkileşim optimizasyonu ve satışa dönüştüren stratejiler.",
            },
          ],
        },
        {
          label: "Tasarım & Marka",
          items: [
            {
              name: "Marka Kimliği",
              desc: "Logo, renk paleti, tipografi ve görsel dil. Tutarlı ve akılda kalıcı marka sistemi.",
            },
            {
              name: "UI/UX Tasarım",
              desc: "Kullanıcı odaklı arayüzler. Estetik ve işlevsellik bir arada, marka diline sadık.",
            },
            {
              name: "İçerik & Görsel Üretimi",
              desc: "Fotoğraf, video ve grafik tasarım. Markanızı yansıtan profesyonel görseller.",
            },
          ],
        },
      ],
    },
    about: {
      badge: "HAKKIMDA",
      headline: "Tasarım ve teknoloji\narasındaki köprü.",
      body: "Dijital dünyada markaların sesini güçlendiriyorum. Tasarımdan geliştirmeye, sosyal medyadan marka kimliğine — tek elde, bütünsel yaklaşım.",
      stats: [
        { value: "3+", label: "Yıl Deneyim" },
        { value: "50+", label: "Tamamlanan Proje" },
        { value: "20+", label: "Mutlu Müşteri" },
      ],
    },
    works: {
      badge: "SEÇİLİ İŞLER",
      title: "Sahada ne yaptım?",
      liveLabel: "Canlı",
      showcaseLabel: "Vitrin",
      visit: "Siteyi Ziyaret Et",
      items: [
        {
          name: "E-Lidya Bilişim",
          sector: "E-Dönüşüm",
          role: "Web Master & Frontend Developer",
          desc: "e-İmza, e-Fatura ve Kurumsal SMS ekosisteminin web portalını sıfırdan geliştirdim. Kullanıcı dostu arayüz, çoklu dil (i18n) altyapısı ve kurumsal kimlik.",
          tags: ["Next.js", "Frontend", "i18n", "Kurumsal Kimlik"],
          image: "/works/elidya.jpg",
          href: "https://e-lidya.com",
          live: true,
        },
        {
          name: "HCA Motors",
          sector: "Otomotiv",
          role: "Web Master & Dijital Pazarlama",
          desc: "Galeri ticaretinin dijital vitrinini sıfırdan kurdum. İlan entegrasyonları, araç listeleme modülleri ve satışa yönlendiren performans pazarlaması.",
          tags: ["Web Geliştirme", "Performans Pazarlaması", "Lead Gen"],
          image: "/works/hcamotors.jpg",
          href: null,
          live: false,
        },
      ],
    },
    process: {
      badge: "SÜREÇ",
      title: "Nasıl çalışıyoruz?",
      steps: [
        { no: "01", title: "Keşif", desc: "Markanızı, hedeflerinizi ve rakiplerinizi anlıyoruz." },
        { no: "02", title: "Strateji", desc: "Size özel dijital strateji ve yol haritası hazırlıyoruz." },
        { no: "03", title: "Üretim", desc: "Tasarım, içerik ve teknik altyapıyı hayata geçiriyoruz." },
        { no: "04", title: "Büyüme", desc: "Sonuçları ölçüyoruz, optimize ediyoruz, büyütüyoruz." },
      ],
      goal: {
        label: "HEDEF",
        title: "Büyüyen işin.",
      },
    },
    cta: {
      badge: "İLETİŞİM",
      headline: "Projeniz için\nkonuşalım.",
      body: "Ücretsiz keşif görüşmesi için mesaj gönderin.",
      btn: "Mesaj Gönder",
      email: "ahmet@ahmet.digital",
    },
    footer: {
      tagline: "Tasarım · Geliştirme · Strateji",
      copy: "© 2024 ahmet.digital — Tüm hakları saklıdır.",
    },
  },

  en: {
    nav: {
      services: "Services",
      about: "About & Experience",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      badge: "DIGITAL AGENCY",
      headline: "We take\nbusiness\ndigital.",
      sub: "From web development to local SEO, brand identity to performance marketing — we build digital systems that deliver measurable value to your business.",
      cta: "Let's Start",
      ctaSub: "Free discovery call",
    },
    services: {
      title: "Services",
      categories: [
        {
          label: "Development & Technology",
          items: [
            {
              name: "Web Development",
              desc: "Fast, SEO-friendly, modern websites and web apps. Performance first.",
            },
            {
              name: "E-Commerce Solutions",
              desc: "Online sales infrastructure, payment integration, and inventory management. A store ready to sell.",
            },
            {
              name: "Digital Transformation",
              desc: "Digitizing traditional workflows. Building online presence from scratch.",
            },
            {
              name: "Automation & Integration",
              desc: "Booking, CRM, and WhatsApp integrations. Turning manual work into automation.",
            },
          ],
        },
        {
          label: "Marketing & Growth",
          items: [
            {
              name: "SEO & Local SEO",
              desc: "Top rankings on search engines. Making your business stand out in local searches.",
            },
            {
              name: "Performance Marketing",
              desc: "Google and Meta ads. Measurable campaigns that convert to sales.",
            },
            {
              name: "Google Maps Optimization",
              desc: "Visibility on maps. Let customers find your business easily.",
            },
            {
              name: "Social Media Management",
              desc: "Content creation, scheduling, and community management. Active and consistent on every platform.",
            },
            {
              name: "Social Media Growth",
              desc: "Organic follower growth, engagement optimization, and strategies that convert to sales.",
            },
          ],
        },
        {
          label: "Design & Brand",
          items: [
            {
              name: "Brand Identity",
              desc: "Logo, color palette, typography, and visual language. A consistent, memorable brand system.",
            },
            {
              name: "UI/UX Design",
              desc: "User-centered interfaces. Aesthetic and functional combined, true to your brand language.",
            },
            {
              name: "Content & Visual Production",
              desc: "Photography, video, and graphic design. Professional visuals that reflect your brand.",
            },
          ],
        },
      ],
    },
    about: {
      badge: "ABOUT",
      headline: "The bridge between\ndesign and technology.",
      body: "I amplify brands in the digital world. From design to development, social media to brand identity — one hand, holistic approach.",
      stats: [
        { value: "3+", label: "Years Experience" },
        { value: "50+", label: "Projects Completed" },
        { value: "20+", label: "Happy Clients" },
      ],
    },
    works: {
      badge: "SELECTED WORK",
      title: "What I've shipped.",
      liveLabel: "Live",
      showcaseLabel: "Showcase",
      visit: "Visit Site",
      items: [
        {
          name: "E-Lidya Bilişim",
          sector: "Digital Transformation",
          role: "Web Master & Frontend Developer",
          desc: "Built the web portal for an e-Signature, e-Invoice and corporate SMS ecosystem from scratch. User-friendly interface, multi-language (i18n) infrastructure and brand identity.",
          tags: ["Next.js", "Frontend", "i18n", "Brand Identity"],
          image: "/works/elidya.jpg",
          href: "https://e-lidya.com",
          live: true,
        },
        {
          name: "HCA Motors",
          sector: "Automotive",
          role: "Web Master & Digital Marketing",
          desc: "Built the digital storefront for a car dealership from scratch. Listing integrations, vehicle catalog modules and conversion-focused performance marketing.",
          tags: ["Web Development", "Performance Marketing", "Lead Gen"],
          image: "/works/hcamotors.jpg",
          href: null,
          live: false,
        },
      ],
    },
    process: {
      badge: "PROCESS",
      title: "How we work.",
      steps: [
        { no: "01", title: "Discovery", desc: "We learn your brand, goals, and competitors." },
        { no: "02", title: "Strategy", desc: "We craft a tailored digital strategy and roadmap." },
        { no: "03", title: "Production", desc: "We build the design, content, and technical foundation." },
        { no: "04", title: "Growth", desc: "We measure results, optimize, and scale." },
      ],
      goal: {
        label: "GOAL",
        title: "Your growing business.",
      },
    },
    cta: {
      badge: "CONTACT",
      headline: "Let's talk about\nyour project.",
      body: "Send a message for a free discovery call.",
      btn: "Send Message",
      email: "ahmet@ahmet.digital",
    },
    footer: {
      tagline: "Design · Development · Strategy",
      copy: "© 2024 ahmet.digital — All rights reserved.",
    },
  },
};
