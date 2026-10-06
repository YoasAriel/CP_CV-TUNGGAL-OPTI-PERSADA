/* ================= DATA ================= */
const ICONS = {
  cpu: '<path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="10" y="10" width="4" height="4"/>',
  gpu: '<rect x="2" y="6" width="20" height="11" rx="1.5"/><circle cx="8" cy="11.5" r="2.5"/><circle cx="15" cy="11.5" r="2.5"/><path d="M2 20h4M18 20h4"/>',
  printer: '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="1.5"/><rect x="7" y="14" width="10" height="7"/><path d="M17 12h.01"/>',
  projector: '<rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="15" cy="12" r="3"/><circle cx="15" cy="12" r="1"/><path d="M6 10h3M6 14h3M6 17v2M18 17v2"/>',
  aio: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M9 21h6M12 17v4"/><path d="M6 13h.01M18 13h.01"/>',
  ram: '<rect x="3" y="7" width="18" height="8" rx="1"/><path d="M6 15v3M9 15v3M12 15v3M15 15v3M18 15v3"/>',
  ssd: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="17" r="1.4"/><path d="M7 8h6M7 11h10"/>',
  mobo: '<rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M8 3v4M16 3v4M3 8h4M3 16h4M21 8h-4M21 16h-4M8 21v-4M16 21v-4"/><rect x="9" y="9" width="6" height="6"/>',
  monitor: '<rect x="2" y="3" width="20" height="13" rx="2"/><path d="M8 21h8M12 16v5"/>',
  headset: '<path d="M3 13a9 9 0 0 1 18 0"/><rect x="2" y="13" width="5" height="7" rx="2"/><rect x="17" y="13" width="5" height="7" rx="2"/>',
  laptop: '<rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M2 19h20l-1.5-3H3.5L2 19Z"/>',
  router: '<rect x="3" y="10" width="18" height="8" rx="1.5"/><path d="M7 10V6a2 2 0 0 1 2-2M17 10V6a2 2 0 0 1-2-2M7 14h.01M11 14h.01"/>',
  psu: '<rect x="4" y="5" width="16" height="14" rx="1.5"/><circle cx="12" cy="12" r="4"/><path d="M12 9v1M12 14v1M9 12h1M14 12h1"/>'
};
function iconSvg(key){ return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[key]}</svg>`; }

const CATEGORIES = [
  {name:"Printer", desc:"Inkjet, laser, hingga ink tank", icon:"printer"},
  {name:"All-in-One PC", desc:"Komputer praktis, layar & PC jadi satu", icon:"aio"},
  {name:"Projector", desc:"Kantor, kelas, hingga home theater", icon:"projector"},
  {name:"RAM & Storage", desc:"DDR4/DDR5, SSD & HDD", icon:"ram"},
  {name:"Laptop", desc:"Kerja, kuliah, hingga gaming", icon:"laptop"},
  {name:"Monitor", desc:"Standar hingga 165Hz gaming", icon:"monitor"},
  {name:"Peripherals", desc:"Keyboard, mouse, headset", icon:"headset"},
  {name:"Networking", desc:"Router, switch, kabel", icon:"router"}
];

const PRODUCTS = [
  {name:"Epson EcoTank L3251", cat:"Printer", icon:"printer", price:2799000, old:2999000, tag:"best", badge:"Terlaris"},
  {name:"Aio Advan I5 A-8S2 (I5-1235U+8+256GB)", cat:"All-in-One PC", icon:"aio", price:8999000, old:9499000, tag:"deal", badge:"Diskon"},
  {name:"Aio Asus P440VAK-W3852W", cat:"All-in-One PC", icon:"aio", price:10499000, old:11000000, tag:"deal", badge:"Diskon"},
  {name:"Aio Lenovo N100-F0JN0011ID", cat:"All-in-One PC", icon:"aio", price:8940000, old:9499000, tag:"deal", badge:"Diskon"},
  {name:"DDR5 16GB 5600 V-Gen", cat:"RAM", icon:"ram", price:4510000, old:null, tag:"best", badge:"Terlaris"},
  {name:"SSD Visipro 1 TB NVMe Turbo", cat:"Storage", icon:"ssd", price:3220000, old:null, tag:"new", badge:"Baru"},
  {name:"Epson Ecotank L3210", cat:"Printer", icon:"printer", price:2200000, old:null, tag:"best", badge:"Terlaris"},
  {name:"DDR4 8 GB 3200 V-Gen ", cat:"RAM", icon:"ram", price:1200000, old:null, tag:"best", badge:"Terlaris"},
  {name:"Epson EB-X600 XGA 3600 Lumens", cat:"Projector", icon:"projector", price:6000000, old:null, tag:"best", badge:"Terlaris"},
  {name:"Epson EB-E600 XGA 3400 Lumens", cat:"Projector", icon:"projector", price:5450000, old:null, tag:"new", badge:"Baru"},
  {name:"Monitor LG 24U411B-B (144HZ)", cat:"Monitor", icon:"monitor", price:1400000, old:1500000, tag:"deal", badge:"Diskon"},
  {name:"Headset Fantech Chief II HG20", cat:"Headset", icon:"headset", price:250000, old:null, tag:"new", badge:"Baru"},
  {name:"MSI Cyborg 15 9S7-15Q342-1239", cat:"Laptop", icon:"laptop", price:20499000, old:21999000, tag:"best", badge:"Terlaris"},
  {name:"Asus Vivobook 14 A1404VAP-VIPS3853M", cat:"Laptop", icon:"laptop", price:9999000, old:10200000, tag:"deal", badge:"Diskon"},
  {name:"Lenovo Yoga 7 2in1-83JQ007NID", cat:"Laptop", icon:"laptop", price:22100000, old:null, tag:"new", badge:"Baru"},
  {name:"HP 14-em0531AU", cat:"Laptop", icon:"laptop", price:9900000, old:null, tag:"new", badge:"Baru"},
  {name:"Axioo Hype 1 NBAXH1-D4N-041RX Grey", cat:"Laptop", icon:"laptop", price:3999000, old:null, tag:"new", badge:"Baru"},
  {name:"Advan 360 G0 R33200,8+256,GRY+STY.PEN", cat:"Laptop", icon:"laptop", price:6799000, old:null, tag:"new", badge:"Baru"},
  {name:"MSI Modern 15 9S7-15S111-475", cat:"Laptop", icon:"laptop", price:11499000, old:11899000, tag:"deal", badge:"Diskon"},
  {name:"Lenovo LOQ 15ARP10E-83S000D1ID", cat:"Laptop", icon:"laptop", price:16700000, old:null, tag:"new", badge:"Baru"},
  {name:"TP-Link Archer C54 AC1200", cat:"Router", icon:"router", price:350000, old:null, tag:"new", badge:"Baru"},
  {name:"D-Link DES-1024D 24 Port", cat:"Router", icon:"router", price:510000, old:null, tag:"new", badge:"Baru"},
  {name:"PSU Infinity 550W RGB", cat:"Power Supply", icon:"psu", price:540000, old:600000, tag:"deal", badge:"Diskon"},
  {name:"Canon G2010 Ink Tank", cat:"Printer", icon:"printer", price:1700000, old:null, tag:"best", badge:"Terlaris"},
  {name:"HP Smart Tank 583", cat:"Printer", icon:"printer", price:1975000, old:null, tag:"best", badge:"Terlaris"},
  {name:"HP Smart Tank 523", cat:"Printer", icon:"printer", price:1650000, old:1700000, tag:"deal", badge:"Diskon"},
  {name:"Mouse Logitech B100 USB", cat:"Mouse", icon:"headset", price:250000, old:null, tag:"best", badge:"Terlaris"},
  {name:"Mouse Fantech Crypto II VX7V2", cat:"Mouse", icon:"headset", price:130000, old:null, tag:"best", badge:"Terlaris"},
  {name:"Acer Predator Helios PHN16S-71-78UQ", cat:"Laptop", icon:"laptop", price:28499000, old:29999000, tag:"deal", badge:"Diskon"},
  {name:"Monitor Samsung S24DG302EE", cat:"Monitor", icon:"monitor", price:1800000, old:1900000, tag:"deal", badge:"Diskon"},
  {name:"Monitor Viewsonic 21.5' VA22E2-H", cat:"Monitor", icon:"monitor", price:950000, old:1000000, tag:"deal", badge:"Diskon"},
  {name:"SSD V-gen 1 TB Platinum SATA", cat:"Storage", icon:"ssd", price:3300000, old:3500000, tag:"deal", badge:"Diskon"}
  
];

/* Pemetaan sub-kategori produk ke 8 kategori utama */
const MAIN_CAT = {
  "Printer":"Printer", "All-in-One PC":"All-in-One PC", "Projector":"Projector",
  "RAM":"RAM & Storage", "Storage":"RAM & Storage",
  "Laptop":"Laptop", "Monitor":"Monitor",
  "Headset":"Peripherals", "Mouse":"Peripherals",
  "Router":"Networking"
};
const mainCatOf = p => MAIN_CAT[p.cat] || "Lainnya";

const TESTIMONIALS = [
  {name:"Bimo Saputra", role:"Content Creator, Jogja", text:"Rakit PC edit video di sini, dikasih rekomendasi jujur sesuai budget. Hasilnya lancar buat render 4K."},
  {name:"Ayu Kartika", role:"Mahasiswi UGM", text:"Beli laptop pertama buat kuliah, stafnya sabar jelasin spek sampai saya ngerti. Harga juga bersaing."},
  {name:"Reza Pratama", role:"Gamer & Streamer", text:"Beli All-in-One PC dari sini, barang original dan garansi resminya jelas. Bakal balik lagi buat upgrade RAM."},
  {name:"Dewi Anggraini", role:"Pemilik Warnet", text:"Langganan beli komponen buat warnet, pengiriman cepat dan selalu ready stock untuk pesanan banyak."}
];

/* ================= RENDER ================= */
const money = n => "Rp" + n.toLocaleString("id-ID");

function renderCategories(){
  const grid = document.getElementById("catGrid");
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" role="button" tabindex="0" data-cat="${c.name}" aria-label="Lihat produk ${c.name}">
      <div class="ci">${iconSvg(c.icon)}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </div>`).join("");
  const pick = card => {
    activeTag = "all";
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
    document.getElementById("searchInput").value = "";
    setCategory(card.dataset.cat);
    document.getElementById("produk").scrollIntoView({behavior:"smooth", block:"start"});
  };
  grid.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => pick(card));
    card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); pick(card); } });
  });
}

function badgeClass(tag){ return tag === "deal" ? "deal" : tag === "new" ? "new" : "best"; }

let activeTag = "all", activeCat = "all";

function productCard(p){
  const idx = PRODUCTS.indexOf(p);
  return `
    <div class="prod-card">
      <div class="prod-media">
        <span class="badge ${badgeClass(p.tag)}">${p.badge}</span>
        ${iconSvg(p.icon)}
      </div>
      <div class="prod-body">
        <div class="prod-cat">${p.cat}</div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-price-row">
          <span class="prod-price">${money(p.price)}</span>
          ${p.old ? `<span class="prod-old">${money(p.old)}</span>` : ""}
        </div>
        <button class="add-btn" data-idx="${idx}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          Tambah ke Keranjang
        </button>
      </div>
    </div>`;
}

function mountProducts(list, emptyMsg){
  const grid = document.getElementById("prodGrid");
  if(!list.length){
    grid.innerHTML = `<p style="grid-column:1/-1;color:var(--text-muted);padding:40px 0;text-align:center;">${emptyMsg}</p>`;
    return;
  }
  grid.innerHTML = list.map(productCard).join("");
  grid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.idx)));
  });
}

/* filter kategori utama (chip) */
function renderCatFilter(){
  const wrap = document.getElementById("catFilter");
  const chip = (key, label, icon, count) => `
    <button class="cat-chip ${activeCat === key ? "active" : ""}" data-cat="${key}" aria-pressed="${activeCat === key}">
      ${icon ? iconSvg(icon) : ""}${label}<span class="n">${count}</span>
    </button>`;
  wrap.innerHTML =
    chip("all", "Semua Kategori", "", PRODUCTS.length) +
    CATEGORIES.map(c => chip(c.name, c.name, c.icon, PRODUCTS.filter(p => mainCatOf(p) === c.name).length)).join("");
}

function setCategory(cat){
  activeCat = cat;
  renderCatFilter();
  renderProducts();
}

function renderProducts(filter){
  if(filter !== undefined) activeTag = filter;
  const list = PRODUCTS.filter(p =>
    (activeTag === "all" || p.tag === activeTag) &&
    (activeCat === "all" || mainCatOf(p) === activeCat)
  );
  mountProducts(list, "Tidak ada produk ditemukan untuk filter ini.");
}

function renderSearch(term){
  const list = PRODUCTS.filter(p => p.name.toLowerCase().includes(term) || p.cat.toLowerCase().includes(term) || mainCatOf(p).toLowerCase().includes(term));
  document.querySelectorAll(".tab-btn, .cat-chip").forEach(b => b.classList.remove("active"));
  mountProducts(list, `Tidak ada produk yang cocok dengan "${term}".`);
}

document.getElementById("catFilter").addEventListener("click", e => {
  const btn = e.target.closest(".cat-chip");
  if(!btn) return;
  setCategory(btn.dataset.cat);
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === activeTag));
});

/* ---- tabs ---- */
document.getElementById("tabRow").addEventListener("click", e => {
  const btn = e.target.closest(".tab-btn");
  if(!btn) return;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts(btn.dataset.filter);
});

/* ---- testimonials ---- */
let testiIdx = 0, testiTimer;
function renderTestimonials(){
  const slidesEl = document.getElementById("testiSlides");
  const dotsEl = document.getElementById("testiDots");
  slidesEl.innerHTML = TESTIMONIALS.map((t,i) => `
    <div class="testi-slide ${i===0?"active":""}" data-i="${i}">
      <div class="stars">★★★★★</div>
      <p>&ldquo;${t.text}&rdquo;</p>
      <div class="who"><b>${t.name}</b><span>${t.role}</span></div>
    </div>`).join("");
  dotsEl.innerHTML = TESTIMONIALS.map((_,i) => `<button class="testi-dot ${i===0?"active":""}" data-i="${i}" aria-label="Testimoni ${i+1}"></button>`).join("");
  dotsEl.querySelectorAll(".testi-dot").forEach(d => d.addEventListener("click", () => goTesti(parseInt(d.dataset.i))));
}
function goTesti(i){
  testiIdx = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
  document.querySelectorAll(".testi-slide").forEach(s => s.classList.toggle("active", parseInt(s.dataset.i) === testiIdx));
  document.querySelectorAll(".testi-dot").forEach(d => d.classList.toggle("active", parseInt(d.dataset.i) === testiIdx));
  resetTestiTimer();
}
function resetTestiTimer(){
  clearInterval(testiTimer);
  testiTimer = setInterval(() => goTesti(testiIdx + 1), 5500);
}
document.getElementById("testiNext").addEventListener("click", () => goTesti(testiIdx + 1));
document.getElementById("testiPrev").addEventListener("click", () => goTesti(testiIdx - 1));

/* ================= CART ================= */
let cart = []; // {idx, qty}

function addToCart(idx){
  const existing = cart.find(c => c.idx === idx);
  if(existing) existing.qty++;
  else cart.push({idx, qty:1});
  renderCart();
  showToast(`${PRODUCTS[idx].name} ditambahkan ke keranjang`);
  openDrawer();
}
function changeQty(idx, delta){
  const item = cart.find(c => c.idx === idx);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(c => c.idx !== idx);
  renderCart();
}
function removeItem(idx){
  cart = cart.filter(c => c.idx !== idx);
  renderCart();
}
function renderCart(){
  const body = document.getElementById("drawerBody");
  const foot = document.getElementById("drawerFoot");
  const countEl = document.getElementById("cartCount");
  const totalCount = cart.reduce((s,c) => s + c.qty, 0);
  countEl.textContent = totalCount;

  if(!cart.length){
    body.innerHTML = `<div class="empty-cart">Keranjang kamu masih kosong.<br>Yuk mulai belanja komponen favoritmu.</div>`;
    foot.style.display = "none";
    return;
  }
  foot.style.display = "block";
  body.innerHTML = cart.map(c => {
    const p = PRODUCTS[c.idx];
    return `
    <div class="cart-item">
      <div class="ci-media">${iconSvg(p.icon)}</div>
      <div class="ci-info">
        <b>${p.name}</b>
        <div class="ci-price">${money(p.price * c.qty)}</div>
        <div class="qty-row">
          <button data-act="minus" data-idx="${c.idx}">−</button>
          <span>${c.qty}</span>
          <button data-act="plus" data-idx="${c.idx}">+</button>
        </div>
        <div class="ci-remove" data-act="remove" data-idx="${c.idx}">Hapus</div>
      </div>
    </div>`;
  }).join("");

  const total = cart.reduce((s,c) => s + PRODUCTS[c.idx].price * c.qty, 0);
  document.getElementById("cartTotal").textContent = money(total);

  body.querySelectorAll("[data-act]").forEach(el => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.dataset.idx);
      const act = el.dataset.act;
      if(act === "plus") changeQty(idx, 1);
      else if(act === "minus") changeQty(idx, -1);
      else if(act === "remove") removeItem(idx);
    });
  });
}

/* drawer open/close */
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
function openDrawer(){ drawer.classList.add("open"); overlay.classList.add("open"); }
function closeDrawer(){ drawer.classList.remove("open"); overlay.classList.remove("open"); }
document.getElementById("cartToggle").addEventListener("click", openDrawer);
document.getElementById("drawerClose").addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

document.getElementById("checkoutBtn").addEventListener("click", e => {
  e.preventDefault();
  if(!cart.length) return;
  const lines = cart.map(c => `- ${PRODUCTS[c.idx].name} x${c.qty}`).join("%0A");
  const total = cart.reduce((s,c) => s + PRODUCTS[c.idx].price * c.qty, 0);
  const msg = `Halo TOP Computer, saya ingin pesan:%0A${lines}%0ATotal: ${money(total)}`;
  window.open(`https://wa.me/62895378142009?text=${msg}`, "_blank");
});

/* ================= TOAST ================= */
let toastTimer;
function showToast(msg){
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ================= SEARCH ================= */
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
searchToggle.addEventListener("click", () => {
  searchBox.classList.toggle("open");
  if(searchBox.classList.contains("open")) searchInput.focus();
});
searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  document.getElementById("produk").scrollIntoView({behavior:"smooth", block:"start"});
  if(term.length) renderSearch(term);
  else { activeCat = "all"; renderCatFilter(); document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === "all")); renderProducts("all"); }
});

/* ================= PROMO FORM ================= */
document.getElementById("promoForm").addEventListener("submit", e => {
  e.preventDefault();
  showToast("Terima kasih! Email kamu sudah terdaftar untuk promo mingguan.");
  document.getElementById("promoEmail").value = "";
});

/* ================= HEADER SCROLL ================= */
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
}, {passive:true});

/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector("nav.main-nav");

function setMenu(open){
  mainNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", open);
}
menuToggle.addEventListener("click", () => setMenu(!mainNav.classList.contains("open")));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
window.addEventListener("resize", () => { if(window.innerWidth > 980) setMenu(false); });

/* ================= HERO SLIDER ================= */
(function(){
  const slider = document.getElementById("heroSlider");
  if(!slider) return;
  const slides = slider.querySelectorAll(".hs-slide");
  const dots = slider.querySelectorAll(".hs-dot");
  let cur = 0, timer;

  function show(i){
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("active", n === cur));
    dots.forEach((d, n) => d.classList.toggle("active", n === cur));
  }
  function stop(){ clearInterval(timer); }
  function start(){
    stop();
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = setInterval(() => show(cur + 1), 4500);
  }
  function go(i){ show(i); start(); }

  document.getElementById("hsNext").addEventListener("click", () => go(cur + 1));
  document.getElementById("hsPrev").addEventListener("click", () => go(cur - 1));
  dots.forEach(d => d.addEventListener("click", () => go(parseInt(d.dataset.i))));

  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);

  /* swipe on touch screens */
  let x0 = null;
  slider.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; stop(); }, {passive:true});
  slider.addEventListener("touchend", e => {
    if(x0 !== null){
      const dx = e.changedTouches[0].clientX - x0;
      if(Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); else start();
    }
    x0 = null;
  }, {passive:true});

  /* keyboard arrows when slider is focused */
  slider.addEventListener("keydown", e => {
    if(e.key === "ArrowRight") go(cur + 1);
    if(e.key === "ArrowLeft") go(cur - 1);
  });

  start();
})();

/* ================= INIT ================= */
renderCategories();
renderCatFilter();
renderProducts("all");
renderTestimonials();
renderCart();
resetTestiTimer();
