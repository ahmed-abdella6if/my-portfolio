/**
 * main.js
 * Renders every dynamic section from data/content.js and wires up
 * navigation, scroll reveals, filtering, the FAQ accordion, the
 * contact form, and the EN/AR language toggle. No build step
 * required — this is plain ES6.
 */
(() => {
  "use strict";

  /* ---------- small icon set (inline SVG, no external requests) ---------- */
  const ICONS = {
    web: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>',
    landing: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 14h6"/></svg>',
    redesign: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12a9 9 0 1 1 3 6.7"/><path d="M3 21v-5h5"/></svg>',
    maintenance: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3z"/></svg>',
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.1 5.3 18.3.5 12 .5Z"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 6 9-6"/></svg>',
    whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.6 14.3c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.9-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l1.8.9c.2.1.4.2.5.3.1.2.1 1-.1 1.6Z"/></svg>',
    external: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>'
  };

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const el = (tag, cls, html) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  /* current language state, persisted across visits */
  let lang = (() => {
    try {
      return localStorage.getItem("site-lang") || "en";
    } catch (e) {
      return "en";
    }
  })();

  const isAr = () => lang === "ar";
  // pick field "foo" or "fooAr" from an object depending on current language
  const pick = (obj, field) => (isAr() && obj[field + "Ar"] !== undefined ? obj[field + "Ar"] : obj[field]);

  /* ============================================================
     STATIC TEXT (data-en / data-ar attributes written in the HTML)
  ============================================================ */
  function applyStaticText() {
    $$("[data-en]").forEach(node => {
      const val = isAr() ? node.dataset.ar : node.dataset.en;
      if (val !== undefined) node.textContent = val;
    });
    $$("[data-en-ph]").forEach(node => {
      const val = isAr() ? node.dataset.arPh : node.dataset.enPh;
      if (val !== undefined) node.placeholder = val;
    });
  }

  /* ============================================================
     NAVIGATION
  ============================================================ */
  function renderNav() {
    const navLinks = $("#navLinks");
    const mobileNavLinks = $("#mobileNavLinks");
    navLinks.innerHTML = "";
    mobileNavLinks.innerHTML = "";
    NAV_LINKS.forEach(link => {
      const label = pick(link, "label");
      const a = el("a", null, label);
      a.setAttribute("href", link.href);
      navLinks.appendChild(a);
      const ma = el("a", null, label);
      ma.setAttribute("href", link.href);
      mobileNavLinks.appendChild(ma);
    });
  }

  function wireNavBehavior() {
    const header = $("#siteHeader");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = $("#navToggle");
    const menu = $("#mobileMenu");
    const closeBtn = $("#mobileMenuClose");
    const closeMenu = () => {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    toggle.addEventListener("click", () => {
      const willOpen = !menu.classList.contains("open");
      menu.classList.toggle("open", willOpen);
      toggle.classList.toggle("open", willOpen);
      toggle.setAttribute("aria-expanded", String(willOpen));
      document.body.style.overflow = willOpen ? "hidden" : "";
    });
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    // delegated so it still works after nav links are re-rendered;
    // also closes when tapping the empty backdrop area (anything that
    // isn't a link, the close button, the language toggle, or the CTA)
    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A" || e.target === menu) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("open")) closeMenu();
    });

    const toTop = $("#toTop");
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ============================================================
     LANGUAGE TOGGLE
  ============================================================ */
  function setLanguage(newLang) {
    lang = newLang;
    try { localStorage.setItem("site-lang", lang); } catch (e) { /* ignore */ }
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr() ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", isAr());
    updateLangButtons();
    applyStaticText();
    renderDynamicSections();
    // Re-rendering just replaced the cards inside Services, Process, Skills,
    // and FAQ with brand-new elements carrying the "reveal" class. The
    // scroll observer set up at page load only knows about the elements
    // that existed back then, so without this, the new ones would sit at
    // opacity:0 forever (any section already past first paint appearing
    // "empty" after a language switch). Re-running it re-observes them.
    wireReveal();
  }

  function updateLangButtons() {
    const label = isAr() ? "English" : "العربية";
    [$("#langToggle"), $("#langToggleMobile")].forEach(btn => {
      if (btn) btn.textContent = label;
    });
  }

  function wireLanguageToggle() {
    const toggle = () => setLanguage(isAr() ? "en" : "ar");
    const btn = $("#langToggle");
    const mBtn = $("#langToggleMobile");
    if (btn) btn.addEventListener("click", toggle);
    if (mBtn) mBtn.addEventListener("click", toggle);
  }

  /* ============================================================
     HERO META (availability + location, from SITE config)
  ============================================================ */
  function renderHeroMeta() {
    const wrap = $("#heroMeta");
    wrap.innerHTML = `
      <span><span class="pulse-dot"></span>${pick(SITE, "availability")}</span>
      <span>📍 ${pick(SITE, "location")}</span>
    `;
  }

  /* ============================================================
     ABOUT
  ============================================================ */
  function renderAbout() {
    const bioWrap = $("#aboutBio");
    const bioList = isAr() ? SITE.bioAr : SITE.bio;
    if (bioWrap && bioList) {
      bioWrap.innerHTML = "";
      bioList.forEach(p => bioWrap.appendChild(el("p", "bio-text", p)));
    }
    const factsWrap = $("#aboutFacts");
    if (factsWrap) {
      factsWrap.innerHTML = "";
      const facts = isAr()
        ? [
            { label: "المقر", value: SITE.locationAr },
            { label: "التخصص", value: "مواقع أعمال وصفحات هبوط" },
            { label: "الحالة", value: SITE.availabilityAr }
          ]
        : [
            { label: "Based in", value: SITE.location },
            { label: "Focus", value: "Business websites & landing pages" },
            { label: "Status", value: SITE.availability }
          ];
      facts.forEach(f => {
        const card = el("div", "about-fact");
        card.innerHTML = `<div class="label">${f.label}</div><div class="value">${f.value}</div>`;
        factsWrap.appendChild(card);
      });
    }
  }

  /* ============================================================
     SERVICES
  ============================================================ */
  function renderServices() {
    const grid = $("#servicesGrid");
    grid.innerHTML = "";
    SERVICES.forEach((s, i) => {
      const card = el("article", `service-card reveal reveal-delay-${(i % 3) + 1}`);
      const features = isAr() ? s.featuresAr : s.features;
      card.innerHTML = `
        <div class="service-icon">${ICONS[s.icon] || ""}</div>
        <h3>${pick(s, "title")}</h3>
        <p>${pick(s, "description")}</p>
        <ul>${features.map(f => `<li>${f}</li>`).join("")}</ul>
      `;
      grid.appendChild(card);
    });
  }

  /* ============================================================
     PROJECTS (+ filtering)
  ============================================================ */
  const CATEGORY_LABELS = { en: { web: "Website" }, ar: { web: "موقع" } };

  function renderFilters() {
    const row = $("#filterRow");
    row.innerHTML = "";
    const uniqueCats = new Set(PROJECTS.map(p => p.category));
    if (uniqueCats.size <= 1) {
      row.style.display = "none";
      return;
    }
    row.style.display = "";
    const labels = isAr() ? CATEGORY_LABELS.ar : CATEGORY_LABELS.en;
    const allLabel = isAr() ? "الكل" : "All";
    const cats = ["all", ...uniqueCats];
    cats.forEach(cat => {
      const btn = el("button", "filter-btn" + (cat === "all" ? " active" : ""),
        cat === "all" ? allLabel : (labels[cat] || cat));
      btn.dataset.filter = cat;
      btn.addEventListener("click", () => {
        $$(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilter(cat);
      });
      row.appendChild(btn);
    });
  }

  function applyFilter(cat) {
    $$(".project-card").forEach(card => {
      const show = cat === "all" || card.dataset.category === cat;
      card.style.display = show ? "" : "none";
      if (show) requestAnimationFrame(() => card.classList.add("visible"));
    });
  }

  function renderProjects() {
    const grid = $("#projectsGrid");
    grid.innerHTML = "";
    const labels = isAr() ? CATEGORY_LABELS.ar : CATEGORY_LABELS.en;
    const noLinkNote = isAr() ? "رابط الموقع المباشر متاح عند الطلب" : "Live link available on request";
    PROJECTS.forEach(p => {
      const card = el("article", "project-card visible");
      card.dataset.category = p.category;

      const links = [];
      if (p.liveUrl) links.push(`<a href="${p.liveUrl}" target="_blank" rel="noopener" aria-label="View live site">${ICONS.external}</a>`);
      if (p.githubUrl) links.push(`<a href="${p.githubUrl}" target="_blank" rel="noopener" aria-label="View source on GitHub">${ICONS.github}</a>`);

      card.innerHTML = `
        <div class="project-top">
          <span class="project-cat">${labels[p.category] || p.category}</span>
          <div class="project-links">${links.join("")}</div>
        </div>
        <h3>${p.title}</h3>
        <p class="project-tagline">${pick(p, "tagline")}</p>
        <p class="desc">${pick(p, "description")}</p>
        <div class="tech-row">${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}</div>
        ${links.length === 0 ? `<p class="no-link-note">${noLinkNote}</p>` : ""}
      `;
      grid.appendChild(card);
    });
  }

  /* ============================================================
     PROCESS
  ============================================================ */
  function renderProcess() {
    const list = $("#processList");
    list.innerHTML = "";
    PROCESS_STEPS.forEach((s, i) => {
      const item = el("div", `process-item reveal reveal-delay-${(i % 3) + 1}`);
      item.innerHTML = `
        <span class="process-num">${s.step}</span>
        <div>
          <h3>${pick(s, "title")}</h3>
          <p>${pick(s, "description")}</p>
        </div>
      `;
      list.appendChild(item);
    });
  }

  /* ============================================================
     SKILLS
  ============================================================ */
  function renderSkills() {
    const grid = $("#skillsGrid");
    grid.innerHTML = "";
    SKILL_GROUPS.forEach((g, i) => {
      const card = el("div", `skill-group reveal reveal-delay-${(i % 3) + 1}`);
      const items = isAr() ? g.itemsAr : g.items;
      card.innerHTML = `<h3>${pick(g, "name")}</h3><ul>${items.map(it => `<li>${it}</li>`).join("")}</ul>`;
      grid.appendChild(card);
    });
  }

  /* ============================================================
     FAQ
  ============================================================ */
  function renderFaq() {
    const list = $("#faqList");
    list.innerHTML = "";
    FAQS.forEach((f, i) => {
      const item = el("div", "faq-item reveal reveal-delay-" + ((i % 3) + 1));
      item.innerHTML = `
        <button class="faq-q" aria-expanded="false">
          <span>${pick(f, "question")}</span>
          <span class="plus" aria-hidden="true"></span>
        </button>
        <div class="faq-a"><p>${pick(f, "answer")}</p></div>
      `;
      const btn = $(".faq-q", item);
      const answer = $(".faq-a", item);
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        $$(".faq-item").forEach(other => {
          other.classList.remove("open");
          $(".faq-q", other).setAttribute("aria-expanded", "false");
          $(".faq-a", other).style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
      list.appendChild(item);
    });
  }

  /* ============================================================
     CONTACT LINKS + FOOTER
  ============================================================ */
  function renderContactLinks() {
    const wrap = $("#contactLinks");
    wrap.innerHTML = "";
    const t = isAr()
      ? { email: "البريد الإلكتروني", whatsapp: "واتساب", whatsappVal: "راسلني مباشرة", github: "جيت هاب", githubVal: "عرض المستودعات", linkedin: "لينكدإن", linkedinVal: "تواصل معي", resume: "السيرة الذاتية", resumeVal: "تحميل السيرة الذاتية (PDF)" }
      : { email: "Email", whatsapp: "WhatsApp", whatsappVal: "Message directly", github: "GitHub", githubVal: "View repositories", linkedin: "LinkedIn", linkedinVal: "Connect", resume: "Resume", resumeVal: "Download CV (PDF)" };

    const rows = [];
    rows.push({ icon: "mail", label: t.email, value: SITE.email, href: `mailto:${SITE.email}` });
    if (SITE.whatsapp) rows.push({ icon: "whatsapp", label: t.whatsapp, value: t.whatsappVal, href: `https://wa.me/${SITE.whatsapp}` });
    if (SITE.social.github) rows.push({ icon: "github", label: t.github, value: t.githubVal, href: SITE.social.github });
    if (SITE.social.linkedin) rows.push({ icon: "linkedin", label: t.linkedin, value: t.linkedinVal, href: SITE.social.linkedin });

    rows.forEach(r => {
      const a = el("a", "contact-link-row");
      a.href = r.href;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `<span class="ico">${ICONS[r.icon]}</span><span><span class="label">${r.label}</span><br><span class="value">${r.value}</span></span>`;
      wrap.appendChild(a);
    });

    const cv = el("a", "contact-link-row");
    cv.href = SITE.cvFile;
    cv.download = "";
    cv.innerHTML = `<span class="ico">${ICONS.external}</span><span><span class="label">${t.resume}</span><br><span class="value">${t.resumeVal}</span></span>`;
    wrap.appendChild(cv);
  }

  function renderFooter() {
    const wrap = $("#footerLinks");
    wrap.innerHTML = "";
    const t = isAr() ? { github: "جيت هاب", linkedin: "لينكدإن", email: "البريد الإلكتروني" } : { github: "GitHub", linkedin: "LinkedIn", email: "Email" };
    const links = [
      { label: t.github, href: SITE.social.github },
      { label: t.linkedin, href: SITE.social.linkedin },
      { label: t.email, href: `mailto:${SITE.email}` }
    ].filter(l => l.href);
    links.forEach(l => {
      const a = el("a", null, l.label);
      a.href = l.href;
      if (l.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
      wrap.appendChild(a);
    });
    $("#year").textContent = new Date().getFullYear();
  }

  /* ============================================================
     SCROLL REVEAL
  ============================================================ */
  function wireReveal() {
    const targets = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(t => t.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(t => io.observe(t));
  }

  /* ============================================================
     CONTACT FORM
     No backend is wired up by default. Two easy options:
     1) Use a form service (Formspree, Web3Forms, etc.) — set its
        endpoint below and swap the fetch URL in.
     2) Point the form's "action" at your own backend endpoint.
     Until then, submissions are validated and shown as a success
     message but not sent anywhere — connect an endpoint before
     relying on this in production.
  ============================================================ */
  function wireContactForm() {
    const form = $("#contactForm");
    if (!form) return;

    const FORM_ENDPOINT = ""; // TODO: e.g. "https://formspree.io/f/yourFormId"

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = $("#formStatus");
      let valid = true;

      const name = $("#cf-name");
      const email = $("#cf-email");
      const message = $("#cf-message");

      const errName = $("#err-name");
      const errEmail = $("#err-email");
      const errMessage = $("#err-message");
      [errName, errEmail, errMessage].forEach(n => n.textContent = "");

      const msgs = isAr()
        ? { name: "الرجاء إدخال اسمك.", email: "الرجاء إدخال بريد إلكتروني صحيح.", message: "الرجاء إضافة بعض التفاصيل عن المشروع.", invalid: "يرجى تصحيح الحقول أعلاه.", sending: "جارٍ الإرسال…", success: "شكرًا لك — تم استلام رسالتك، سأرد خلال يوم أو يومين.", error: "حدث خطأ أثناء الإرسال. برجاء التواصل عبر البريد الإلكتروني مباشرة." }
        : { name: "Please enter your name.", email: "Please enter a valid email.", message: "Please add a few details about the project.", invalid: "Please fix the fields above.", sending: "Sending…", success: "Thanks — your message is in. I'll reply within a day or two.", error: "Something went wrong sending that. Please email me directly instead." };

      if (!name.value.trim()) { errName.textContent = msgs.name; valid = false; }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) { errEmail.textContent = msgs.email; valid = false; }
      if (!message.value.trim() || message.value.trim().length < 10) {
        errMessage.textContent = msgs.message;
        valid = false;
      }

      if (!valid) {
        status.textContent = msgs.invalid;
        status.className = "form-status error";
        return;
      }

      const submitBtn = $(".form-submit", form);
      submitBtn.disabled = true;
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = msgs.sending;

      try {
        if (FORM_ENDPOINT) {
          const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: new FormData(form)
          });
          if (!res.ok) throw new Error("Request failed");
        } else {
          await new Promise(r => setTimeout(r, 500));
        }
        status.textContent = msgs.success;
        status.className = "form-status success";
        form.reset();
      } catch (err) {
        status.textContent = msgs.error;
        status.className = "form-status error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }

  /* ============================================================
     GROUP: everything that needs to be rebuilt when language changes
  ============================================================ */
  function renderDynamicSections() {
    renderNav();
    renderHeroMeta();
    renderAbout();
    renderServices();
    renderFilters();
    renderProjects();
    renderProcess();
    renderSkills();
    renderFaq();
    renderContactLinks();
    renderFooter();
  }

  /* ============================================================
     INIT
  ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr() ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", isAr());

    wireNavBehavior();
    wireLanguageToggle();
    updateLangButtons();
    applyStaticText();
    renderDynamicSections();
    wireContactForm();
    wireReveal();
  });
})();