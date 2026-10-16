// ============================================================
// ⚙️ تنظیمات رامو — هر وقت خواستی تغییر بده، فقط همین فایل رو
// ویرایش کن. همه جای سایت خودکار آپدیت می‌شه.
// ============================================================

const RAMO_CONFIG = {

  // ═══════════════════════════════════════════════════════
  // 💰 قیمت‌ها و تنظیمات فروش (به تومان)
  // ═══════════════════════════════════════════════════════
  pricing: {
    originalPrice: 10000000,      // ۱۰ میلیون تومان
    discountedPrice: 4990000,     // ۴ میلیون و ۹۹۰ هزار تومان
    showDiscount: true,
    trialDays: 15,
    trialMaxProducts: 5,
    trialMaxSales: 5,
  },

  // ═══════════════════════════════════════════════════════
  // 📞 اطلاعات تماس
  // ═══════════════════════════════════════════════════════
  contact: {
    phone: '09233052814',
    socialId: 'Ramo_erp',
    telegram: 'https://t.me/Ramo_erp',
    instagram: 'https://instagram.com/Ramo_erp',
    rubika: 'Ramo_erp',
    eitaa: 'Ramo_erp',
    email: '',
  },

  // ═══════════════════════════════════════════════════════
  // 💳 درگاه پرداخت
  // ═══════════════════════════════════════════════════════
  payment: {
    zarinpalEnabled: false,
    zarinpalMerchantId: '',
    comingSoonText: 'به‌زودی...',
    comingSoonDesc: 'درگاه امن زرین‌پال',
    cardNumber: '',
    cardHolder: '',
    bankName: '',
  },

  // ═══════════════════════════════════════════════════════
  // 📥 لینک‌های دانلود — سه پلتفرم
  // ═══════════════════════════════════════════════════════
  download: {
    android: {
      enabled: true,
      url: 'https://github.com/raminkabiri/ramo-erp.ir/releases/download/v1.0.0/Ramo-arm64-v8a-release.apk',
      badge: 'APK',
      comingSoonText: 'به‌زودی',
      fileName: 'Ramo-arm64-v8a-release.apk',
    },
    windows: {
      enabled: true,
      url: 'https://github.com/raminkabiri/ramo-erp.ir/releases/download/v1.0.0/Ramo_Setup_1.0.0.exe',
      badge: 'EXE',
      comingSoonText: 'به‌زودی',
      fileName: 'Ramo_Setup_1.0.0.exe',
    },
    ios: {
      enabled: false,
      url: '',
      badge: 'TestFlight',
      comingSoonText: 'به‌زودی',
      fileName: 'Ramo-iOS.ipa',
    },
    comingSoonText: '📥 لینک دانلود به زودی فعال می‌شود',
  },

  // ═══════════════════════════════════════════════════════
  // 🎨 اطلاعات برند
  // ═══════════════════════════════════════════════════════
  brand: {
    name: 'رامو',
    nameEn: 'Ramo',
    slogan: 'کسب و کار تو، در دستان تو',
    description: 'سیستم جامع مدیریت کسب‌وکار با دستیار هوش مصنوعی فارسی',
    version: '۱.۰.۰',
    releaseDate: '۱۴۰۵',
  },

  // ═══════════════════════════════════════════════════════
  // ✨ نمونه زنده‌ی کاتالوگ HTML
  // ═══════════════════════════════════════════════════════
  liveDemo: {
    catalogUrl: '',
  },

};
