// ============================================================
// ⚙️ تنظیمات رامو
// ============================================================

const RAMO_CONFIG = {
  
  pricing: {
    originalPrice: 10000000,
    discountedPrice: 4990000,
    showDiscount: true,
    trialDays: 15,
    trialMaxProducts: 5,
    trialMaxSales: 5,
  },

  contact: {
    phone: '09233052814',
    socialId: 'Ramo_erp',
    telegram: 'https://t.me/Ramo_erp',
    instagram: 'https://instagram.com/Ramo_erp',
    rubika: 'Ramo_erp',
    eitaa: 'Ramo_erp',
    email: '',
  },

  payment: {
    zarinpalEnabled: false,
    zarinpalMerchantId: '',
    comingSoonText: 'به‌زودی...',
    comingSoonDesc: 'درگاه امن زرین‌پال',
    cardNumber: '',
    cardHolder: '',
    bankName: '',
  },

  download: {
    // 🤖 اندروید — فعال (لینک داره)
    android: {
      enabled: true,
      url: 'https://github.com/raminkabiri/ramo-erp.ir/releases/download/V2.0.0/Ramo-arm64-v8a-release.apk',
      badge: 'APK',
      fileName: 'Ramo-arm64-v8a-release.apk',
    },

    // 🪟 ویندوز — فعال (لینک داره)
    windows: {
      enabled: true,
      url: 'https://github.com/raminkabiri/ramo-erp.ir/releases/download/V2.0.0/Ramo_Setup_1.0.0.exe',
      badge: 'EXE',
      fileName: 'Ramo_Setup_1.0.0.exe',
    },

    // 🍎 iOS — به‌زودی (url خالیه)
    ios: {
      enabled: true,
      url: '',
      badge: 'TestFlight',
      comingSoonText: 'به‌زودی',
      fileName: 'Ramo-iOS.ipa',
    },

    comingSoonText: '📥 لینک دانلود به زودی فعال می‌شود',
  },

  brand: {
    name: 'رامو',
    nameEn: 'Ramo',
    slogan: 'کسب و کار تو، در دستان تو',
    description: 'سیستم جامع مدیریت کسب‌وکار با دستیار هوش مصنوعی فارسی',
    version: '2.۰.۰',
    releaseDate: '۱۴۰۵',
  },

  liveDemo: {
    catalogUrl: '',
  },

};
