/**
 * ============================================================
 * SITE CONTENT — single source of truth
 * ============================================================
 * Edit this file to update the site. Nothing else needs to change.
 *
 * The site is bilingual (English / Arabic). Every item below has
 * an English value and an "Ar" version right next to it — edit
 * both together so the two languages stay in sync.
 *
 * To add a new PROJECT: copy an object inside PROJECTS and edit it.
 * To add a new SERVICE: copy an object inside SERVICES.
 * To add a new FAQ: copy an object inside FAQS.
 *
 * Every list renders automatically — no HTML editing required.
 * ============================================================
 */

const SITE = {
  name: "Ahmed Abdellatif",
  nameAr: "أحمد عبد اللطيف",
  role: "Web Developer",
  roleAr: "مطوّر مواقع",
  tagline: "Websites built to load fast and turn visitors into clients.",
  taglineAr: "مواقع سريعة التحميل مصمَّمة لتحويل الزوار إلى عملاء.",
  location: "Alexandria, Egypt",
  locationAr: "الإسكندرية، مصر",
  email: "hello@ahmedabdellatif.dev", // TODO: replace with real email
  phone: "", // optional, e.g. "+20 1XX XXX XXXX"
  whatsapp: "", // optional, e.g. "201XXXXXXXXX" (no + or leading 0)
  social: {
    github: "https://github.com/", // TODO: replace with real handle
    linkedin: "https://linkedin.com/in/", // TODO: replace with real handle
    twitter: "", // optional
    instagram: "" // optional
  },
  cvFile: "cv/Ahmed_Abdellatif_CV.pdf", // TODO: drop your real CV in /cv and keep this filename (or update it)
  availability: "Available for freelance projects",
  availabilityAr: "متاح لاستقبال مشاريع جديدة",
  photo: "images/ahmed-photo.jpg", // TODO: replace with your real photo (same filename, or update this path)
  bio: [
    "I'm a web developer based in Alexandria, Egypt, building business websites and landing pages for clients who need a site that actually brings in enquiries — not just something that looks good and sits there.",
    "Every project starts with what the site needs to do for you, not with a template. That's meant bilingual sites, WhatsApp-based lead capture, and layouts built around one clear goal instead of trying to say everything at once."
  ],
  bioAr: [
    "أنا مطوّر مواقع مقيم في الإسكندرية، أبني مواقع أعمال وصفحات هبوط لعملاء يحتاجون إلى موقع يجلب استفسارات حقيقية، لا مجرد موقع جميل الشكل لا يحقق نتيجة.",
    "كل مشروع يبدأ من احتياجك الفعلي من الموقع، لا من قالب جاهز. لذلك عملت على مواقع ثنائية اللغة، وأنظمة تواصل عبر واتساب، وتصاميم مبنية حول هدف واحد واضح بدل محاولة قول كل شيء في صفحة واحدة."
  ]
};

const NAV_LINKS = [
  { label: "About", labelAr: "نبذة", href: "#about" },
  { label: "Services", labelAr: "الخدمات", href: "#services" },
  { label: "Work", labelAr: "الأعمال", href: "#work" },
  { label: "Process", labelAr: "آلية العمل", href: "#process" },
  { label: "Skills", labelAr: "المهارات", href: "#skills" },
  { label: "FAQ", labelAr: "الأسئلة الشائعة", href: "#faq" },
  { label: "Contact", labelAr: "تواصل", href: "#contact" }
];

/* ------------------------------------------------------------
   SERVICES
------------------------------------------------------------ */
const SERVICES = [
  {
    icon: "web",
    title: "Business Websites",
    titleAr: "مواقع أعمال",
    description:
      "Marketing and brand websites built to load fast, read cleanly on any screen, and turn visitors into enquiries — including multilingual sites and WhatsApp-based lead capture.",
    descriptionAr:
      "مواقع تسويقية وتعريفية مصمَّمة لتحميل سريع وقراءة واضحة على أي شاشة، وتحويل الزوار إلى استفسارات فعلية — بما في ذلك المواقع ثنائية اللغة وأنظمة التواصل عبر واتساب.",
    features: [
      "Responsive, mobile-first builds",
      "Bilingual / multilingual support (EN, AR, IT)",
      "WhatsApp & form lead capture",
      "SEO-friendly structure"
    ],
    featuresAr: [
      "تصميم متجاوب يراعي الجوال أولاً",
      "دعم ثنائي أو متعدد اللغات (إنجليزي، عربي، إيطالي)",
      "استقبال طلبات عبر واتساب والنماذج",
      "بنية متوافقة مع محركات البحث"
    ]
  },
  {
    icon: "landing",
    title: "Landing Pages",
    titleAr: "صفحات هبوط",
    description:
      "Focused single-page sites for a launch, a campaign, or a single offer — built around one clear call to action instead of trying to say everything at once.",
    descriptionAr:
      "صفحة واحدة مركّزة لإطلاق منتج أو حملة أو عرض معيّن — مبنية حول دعوة واحدة واضحة لاتخاذ إجراء بدل محاولة قول كل شيء دفعة واحدة.",
    features: [
      "Conversion-focused layout",
      "Fast load times",
      "A/B-ready structure",
      "Lead capture built in"
    ],
    featuresAr: [
      "تصميم مركَّز على التحويل",
      "سرعة تحميل عالية",
      "بنية جاهزة لاختبار A/B",
      "نموذج استقبال طلبات مدمج"
    ]
  },
  {
    icon: "redesign",
    title: "Website Redesigns",
    titleAr: "إعادة تصميم مواقع",
    description:
      "Rebuilding an existing site that's slow, outdated, or hard to update — keeping what works and fixing what's costing you visitors.",
    descriptionAr:
      "إعادة بناء موقع قائم أصبح بطيئًا أو قديمًا أو يصعب تحديثه — مع الحفاظ على ما ينجح وإصلاح ما يكلفك زوارًا.",
    features: [
      "Modern, maintainable codebase",
      "Performance & speed fixes",
      "Mobile responsiveness fixes",
      "Content migration"
    ],
    featuresAr: [
      "كود حديث سهل الصيانة",
      "تحسين الأداء والسرعة",
      "إصلاح التجاوب مع الجوال",
      "نقل المحتوى من الموقع القديم"
    ]
  },
  {
    icon: "maintenance",
    title: "Ongoing Maintenance",
    titleAr: "صيانة مستمرة",
    description:
      "Keeping a live site accurate, fast, and secure after launch — content updates, small feature additions, and fixes as they come up.",
    descriptionAr:
      "الحفاظ على الموقع دقيقًا وسريعًا وآمنًا بعد الإطلاق — تحديث المحتوى، وإضافة ميزات صغيرة، وإصلاح أي مشكلة عند ظهورها.",
    features: [
      "Content & copy updates",
      "Bug fixes",
      "Small feature additions",
      "Uptime & performance checks"
    ],
    featuresAr: [
      "تحديث المحتوى والنصوص",
      "إصلاح الأخطاء",
      "إضافة ميزات صغيرة",
      "متابعة الأداء واستمرارية العمل"
    ]
  }
];

/* ------------------------------------------------------------
   SKILLS
------------------------------------------------------------ */
const SKILL_GROUPS = [
  {
    name: "Front-end",
    nameAr: "الواجهة الأمامية",
    items: ["HTML5 & CSS3", "JavaScript", "Responsive Design", "Accessibility Basics", "Animation & Interaction"],
    itemsAr: ["HTML5 و CSS3", "JavaScript", "تصميم متجاوب", "أساسيات إمكانية الوصول", "الحركة والتفاعل"]
  },
  {
    name: "Back-end & Tooling",
    nameAr: "الخلفية والأدوات",
    items: ["WordPress", "REST APIs", "Git & Version Control", "Basic Server Deployment"],
    itemsAr: ["ووردبريس", "واجهات REST API", "Git وإدارة الإصدارات", "أساسيات نشر الخوادم"]
  },
  {
    name: "SEO & Performance",
    nameAr: "تحسين محركات البحث والأداء",
    items: ["On-page SEO", "Page Speed Optimization", "Semantic HTML", "Cross-browser Testing"],
    itemsAr: ["تهيئة السيو داخل الصفحة", "تحسين سرعة الصفحة", "HTML الدلالي", "اختبار التوافق بين المتصفحات"]
  },
  {
    name: "Design & UX",
    nameAr: "التصميم وتجربة المستخدم",
    items: ["Responsive Layout Systems", "Bilingual / Multilingual Sites", "Conversion-focused UX"],
    itemsAr: ["أنظمة تخطيط متجاوبة", "مواقع ثنائية أو متعددة اللغات", "تجربة مستخدم مركّزة على التحويل"]
  }
];

/* ------------------------------------------------------------
   PROJECTS
   category is currently always "web" — add more values here later
   (e.g. "landing", "redesign") if you want the filter row to grow.
------------------------------------------------------------ */
const PROJECTS = [
  {
    title: "Millers Infinity",
    category: "web",
    categoryAr: "موقع",
    tagline: "Luxury real estate landing page",
    taglineAr: "صفحة هبوط لعقارات فاخرة",
    description:
      "A bilingual (English/Arabic) landing page for a luxury real estate brand, built to present listings with a premium feel and turn interest into direct conversations through integrated WhatsApp lead capture.",
    descriptionAr:
      "صفحة هبوط ثنائية اللغة (إنجليزي/عربي) لعلامة عقارية فاخرة، مصمَّمة لعرض الوحدات بإحساس راقٍ وتحويل الاهتمام إلى تواصل مباشر عبر واتساب.",
    tech: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"],
    liveUrl: "https://www.millersinfinity.com/",
    githubUrl: "",
    featured: true
  },
  {
    title: "Meguid Translation",
    category: "web",
    categoryAr: "موقع",
    tagline: "Bilingual translation services site",
    taglineAr: "موقع خدمات ترجمة ثنائي اللغة",
    description:
      "A professional website for a translation services business in Alexandria, presenting English/Italian bilingual service offerings with a clean, trust-building layout suited to a client-facing service brand.",
    descriptionAr:
      "موقع احترافي لشركة خدمات ترجمة في الإسكندرية، يعرض خدمات ثنائية اللغة (إنجليزي/إيطالي) بتصميم واضح يبني الثقة مع العملاء.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    title: "Aldab3 Marketing Agency",
    category: "web",
    categoryAr: "موقع",
    tagline: "Full marketing agency site with animated identity",
    taglineAr: "موقع كامل لوكالة تسويق بهوية بصرية متحركة",
    description:
      "A single-page marketing site with a distinct visual identity: a constellation canvas animation, a horizontally scrolling client showcase, and a stylised services section designed to make the agency's offering memorable.",
    descriptionAr:
      "موقع تسويقي من صفحة واحدة بهوية بصرية مميزة: رسوم متحركة على شكل كوكبة نجوم، عرض أفقي متحرك للعملاء، وقسم خدمات بتصميم خاص يجعل عروض الوكالة لا تُنسى.",
    tech: ["HTML5", "CSS3", "Canvas API", "JavaScript"],
    liveUrl: "https://aldab3marketingagency.com",
    githubUrl: "",
    featured: true
  }
];

/* ------------------------------------------------------------
   WORK PROCESS
   This is a genuine sequence, so numbered steps are appropriate here.
------------------------------------------------------------ */
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    titleAr: "الاكتشاف",
    description:
      "We talk through what you actually need — the goal, the users, the constraints — before any design or code starts.",
    descriptionAr:
      "نتحدث بوضوح عمّا تحتاجه فعلاً — الهدف، والمستخدمون، والقيود — قبل البدء بأي تصميم أو كود."
  },
  {
    step: "02",
    title: "Plan",
    titleAr: "التخطيط",
    description:
      "I scope the build into clear milestones with a realistic timeline, so you know what's coming and when.",
    descriptionAr:
      "أقسّم العمل إلى مراحل واضحة بجدول زمني واقعي، لتعرف ما القادم ومتى."
  },
  {
    step: "03",
    title: "Build",
    titleAr: "البناء",
    description:
      "Development happens in visible stages with regular check-ins, not a single black-box handoff at the end.",
    descriptionAr:
      "يتم التطوير على مراحل واضحة مع متابعة دورية، وليس تسليمًا واحدًا غامضًا في النهاية."
  },
  {
    step: "04",
    title: "Test",
    titleAr: "الاختبار",
    description:
      "Every feature is checked against real devices and real edge cases before it's considered done.",
    descriptionAr:
      "يتم اختبار كل ميزة على أجهزة حقيقية وحالات استخدام فعلية قبل اعتبارها مكتملة."
  },
  {
    step: "05",
    title: "Launch",
    titleAr: "الإطلاق",
    description:
      "I handle deployment and make sure everything works in production, not just in development.",
    descriptionAr:
      "أتولى عملية النشر وأتأكد أن كل شيء يعمل فعليًا على الموقع الحي، لا فقط أثناء التطوير."
  },
  {
    step: "06",
    title: "Support",
    titleAr: "الدعم",
    description:
      "Post-launch, I'm available for fixes, updates, and the next round of features.",
    descriptionAr:
      "بعد الإطلاق، أبقى متاحًا لإصلاح أي مشكلة أو تحديث الموقع أو إضافة ميزات جديدة."
  }
];

/* ------------------------------------------------------------
   FAQ
------------------------------------------------------------ */
const FAQS = [
  {
    question: "What kind of projects do you take on?",
    questionAr: "ما نوع المشاريع التي تعمل عليها؟",
    answer:
      "Business and marketing websites, landing pages, and full website redesigns — including multilingual sites and sites that need lead capture built in, like WhatsApp or contact forms.",
    answerAr:
      "مواقع أعمال وتسويق، وصفحات هبوط، وإعادة تصميم مواقع كاملة — بما في ذلك المواقع ثنائية اللغة والمواقع التي تحتاج نظام استقبال طلبات مثل واتساب أو نماذج التواصل."
  },
  {
    question: "How long does a typical project take?",
    questionAr: "كم يستغرق المشروع عادةً؟",
    answer:
      "A single-page landing site usually takes 1–2 weeks. A multi-page business website typically runs 2–4 weeks depending on scope and content readiness. You'll get a specific estimate after the discovery call.",
    answerAr:
      "صفحة الهبوط الواحدة تستغرق عادة أسبوعًا إلى أسبوعين. أما موقع الأعمال متعدد الصفحات فيستغرق غالبًا من أسبوعين إلى أربعة أسابيع حسب حجم المشروع وجاهزية المحتوى. ستحصل على تقدير دقيق بعد مكالمة الاستكشاف الأولى."
  },
  {
    question: "How do you price your work?",
    questionAr: "كيف تحدّد سعر العمل؟",
    answer:
      "Most projects are quoted as a fixed price based on defined scope, so there are no surprises. For open-ended or ongoing work, I can also work hourly — we'll agree on whichever fits the project before starting.",
    answerAr:
      "معظم المشاريع تُسعَّر بسعر ثابت بناءً على نطاق محدد مسبقًا، دون مفاجآت. أما الأعمال المفتوحة أو المستمرة فيمكن تسعيرها بالساعة — سنتفق على الأنسب قبل البدء."
  },
  {
    question: "Do you work with clients outside Egypt?",
    questionAr: "هل تتعامل مع عملاء خارج مصر؟",
    answer:
      "Yes. Communication is remote-friendly by default — calls, async updates, and shared project boards — so timezone and location aren't a blocker.",
    answerAr:
      "نعم. التواصل عن بُعد أمر معتاد — عبر المكالمات والتحديثات وأدوات متابعة المشروع المشتركة — لذا فرق التوقيت والموقع الجغرافي ليسا عائقًا."
  },
  {
    question: "What do you need from me to get started?",
    questionAr: "ما الذي تحتاجه مني للبدء؟",
    answer:
      "A description of the problem you're solving, any existing brand assets (logo, colors, content), and examples of sites or apps you like. I'll turn that into a scoped plan before writing any code.",
    answerAr:
      "وصفًا للمشكلة التي تريد حلها، وأي عناصر هوية بصرية جاهزة (شعار، ألوان، محتوى)، وأمثلة لمواقع تعجبك. سأحوّل ذلك إلى خطة عمل محددة قبل البدء بكتابة أي كود."
  },
  {
    question: "Do you offer support after launch?",
    questionAr: "هل تقدّم دعمًا بعد الإطلاق؟",
    answer:
      "Yes. Every project includes a short post-launch window for fixes at no extra cost, and I'm available afterward for updates or new features on a project or retainer basis.",
    answerAr:
      "نعم. كل مشروع يشمل فترة قصيرة بعد الإطلاق لإصلاح أي مشكلة دون تكلفة إضافية، وأبقى متاحًا بعدها لأي تحديثات أو ميزات جديدة باتفاق منفصل أو مستمر."
  },
  {
    question: "Can you work from an existing design or codebase?",
    questionAr: "هل يمكنك العمل على تصميم أو كود جاهز مسبقًا؟",
    answer:
      "Yes — I regularly pick up existing projects, whether that's implementing a Figma design or extending code someone else started.",
    answerAr:
      "نعم — أعمل بانتظام على مشاريع قائمة، سواء بتنفيذ تصميم جاهز من Figma أو استكمال كود بدأه شخص آخر."
  }
];