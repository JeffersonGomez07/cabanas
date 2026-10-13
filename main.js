(function () {
  var S = window.SITE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- Menú móvil ---- */
  var btn = $("#menuBtn"), nav = $("#nav");
  function closeMenu() { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Abrir menú"); }
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---- Imágenes ilustrativas con respaldo ---- */
  $$("[data-img]").forEach(function (fig) {
    var cfg = (S.images || {})[fig.dataset.img];
    var img = $("img", fig);
    if (!cfg) { fig.classList.add("is-empty"); img.remove(); return; }
    img.alt = cfg.alt || "";
    img.addEventListener("error", function () { fig.classList.add("is-empty"); img.remove(); });
    if (img.getAttribute("src") !== cfg.src) img.src = cfg.src;
    if (S.showIllustrativeCaption === false) fig.classList.add("hide-cap");
  });

  /* ---- Contacto / WhatsApp ---- */
  var phone = String(S.whatsapp || "").replace(/\D/g, "");
  var hasContact = phone.length >= 8;
  $$("[data-cta]").forEach(function (a) {
    if (hasContact) {
      a.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(S.whatsappMessage || "");
      a.target = "_blank"; a.rel = "noopener";
    }
  });
  if (hasContact) $$(".pending-note").forEach(function (n) { n.hidden = true; });

  /* ---- Mapa ---- */
  var ml = $("#mapLink");
  if (S.mapsUrl) {
    ml.href = S.mapsUrl; ml.target = "_blank"; ml.rel = "noopener";
    ml.textContent = "Ver en Google Maps ↗"; ml.removeAttribute("aria-disabled");
    $("#mapNote").hidden = true;
  } else {
    ml.addEventListener("click", function (e) { e.preventDefault(); });
  }

  /* ---- Galería ---- */
  var grid = $("#grid"), filters = $("#filters");
  var photos = (S.photos || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  var visible = photos;

  function icon(id) { return '<svg class="ico"><use href="#' + id + '"/></svg>'; }

  function renderPlaceholders() {
    var items = [
      { c: "big", t: "Fotografía de la cabaña pendiente" },
      { c: "med", t: "Fotografía del entorno pendiente" },
      { c: "med", t: "Fotografía de los espacios exteriores pendiente" }
    ];
    grid.innerHTML = items.map(function (p) {
      return '<div class="ph ' + p.c + '"><span class="tag">Galería por completar</span>' +
        '<div class="mid">' + icon("i-image") + '<p>' + p.t + '</p></div>' +
        '<span class="foot">Espacio reservado para fotografía real</span></div>';
    }).join("");
  }

  function renderPhotos() {
    grid.innerHTML = "";
    visible.forEach(function (p, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "tile" + (i % 7 === 0 ? " t-big" : i % 7 === 4 ? " t-wide" : "");
      b.setAttribute("aria-label", "Ampliar: " + (p.title || p.alt));
      var im = document.createElement("img");
      im.src = p.src; im.alt = p.alt || ""; im.loading = i < 3 ? "eager" : "lazy"; im.decoding = "async";
      b.appendChild(im);
      if (p.title) { var c = document.createElement("span"); c.className = "t-cap"; c.textContent = p.title; b.appendChild(c); }
      b.addEventListener("click", function () { openLb(i); });
      grid.appendChild(b);
    });
  }

  if (!photos.length) {
    renderPlaceholders();
  } else {
    $("#galleryNote").hidden = true; $("#galleryFoot").hidden = true;
    var cats = [];
    photos.forEach(function (p) { if (p.category && cats.indexOf(p.category) < 0) cats.push(p.category); });
    if (cats.length > 1) {
      filters.hidden = false;
      ["Todas"].concat(cats).forEach(function (c, i) {
        var f = document.createElement("button");
        f.type = "button"; f.textContent = c; f.setAttribute("aria-pressed", i === 0);
        f.addEventListener("click", function () {
          $$("button", filters).forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
          f.setAttribute("aria-pressed", "true");
          visible = i === 0 ? photos : photos.filter(function (p) { return p.category === c; });
          renderPhotos();
        });
        filters.appendChild(f);
      });
    }
    renderPhotos();
  }

  /* ---- Lightbox ---- */
  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), cur = 0, opener = null;
  function show(i) {
    cur = (i + visible.length) % visible.length;
    var p = visible[cur];
    lbImg.src = p.src; lbImg.alt = p.alt || "";
    lbCap.textContent = [p.title, p.description].filter(Boolean).join(" — ");
  }
  function openLb(i) { opener = document.activeElement; show(i); lb.showModal(); }
  $("#lbClose").addEventListener("click", function () { lb.close(); });
  $("#lbPrev").addEventListener("click", function () { show(cur - 1); });
  $("#lbNext").addEventListener("click", function () { show(cur + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener("close", function () { if (opener) opener.focus(); });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });

  /* ---- Aparición progresiva ---- */
  var els = $$(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } });
    }, { threshold: .12 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("in"); }); }
})();
