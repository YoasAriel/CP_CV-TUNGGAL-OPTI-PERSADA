/* ================= DATA ================= */
const ICONS = {
  cpu: '<path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="10" y="10" width="4" height="4"/>',
  gpu: '<rect x="2" y="6" width="20" height="11" rx="1.5"/><circle cx="8" cy="11.5" r="2.5"/><circle cx="15" cy="11.5" r="2.5"/><path d="M2 20h4M18 20h4"/>',
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
  {name:"Processor", desc:"Intel & AMD, semua socket", icon:"cpu"},
  {name:"VGA Card", desc:"Gaming hingga workstation", icon:"gpu"},
  {name:"Motherboard", desc:"ATX, Micro-ATX, Mini-ITX", icon:"mobo"},
  {name:"RAM & Storage", desc:"DDR4/DDR5, SSD & HDD", icon:"ram"},
  {name:"Laptop", desc:"Kerja, kuliah, hingga gaming", icon:"laptop"},
  {name:"Monitor", desc:"Standar hingga 165Hz gaming", icon:"monitor"},
  {name:"Peripherals", desc:"Keyboard, mouse, headset", icon:"headset"},
  {name:"Networking", desc:"Router, switch, kabel", icon:"router"}
];

const PRODUCTS = [
  {name:"AMD Ryzen 5 7600X", cat:"Processor", icon:"cpu", price:3899000, old:4199000, tag:"best", badge:"Terlaris"},
  {name:"NVIDIA GeForce RTX 4060 8GB", cat:"VGA Card", icon:"gpu", price:5499000, old:5999000, tag:"deal", badge:"Diskon"},
  {name:"Corsair Vengeance 16GB DDR5", cat:"RAM", icon:"ram", price:899000, old:null, tag:"best", badge:"Terlaris"},
  {name:"Samsung 980 NVMe SSD 1TB", cat:"Storage", icon:"ssd", price:1150000, old:null, tag:"new", badge:"Baru"},
  {name:"ASUS TUF Gaming B760M", cat:"Motherboard", icon:"mobo", price:2350000, old:null, tag:"best", badge:"Terlaris"},
  {name:'LG UltraGear 27" 165Hz', cat:"Monitor", icon:"monitor", price:3750000, old:4100000, tag:"deal", badge:"Diskon"},
  {name:"Logitech G Pro X Wireless", cat:"Headset", icon:"headset", price:1890000, old:null, tag:"new", badge:"Baru"},
  {name:"ASUS Vivobook Pro 14 Ryzen 7", cat:"Laptop", icon:"laptop", price:11499000, old:null, tag:"best", badge:"Terlaris"},
  {name:"TP-Link Archer AX55", cat:"Router", icon:"router", price:799000, old:null, tag:"new", badge:"Baru"},
  {name:"Corsair RM750x 750W", cat:"Power Supply", icon:"psu", price:1650000, old:1799000, tag:"deal", badge:"Diskon"},
  {name:"Intel Core i5-13400F", cat:"Processor", icon:"cpu", price:2999000, old:null, tag:"best", badge:"Terlaris"},
  {name:"Kingston NV2 500GB NVMe", cat:"Storage", icon:"ssd", price:499000, old:559000, tag:"deal", badge:"Diskon"}
];

const TESTIMONIALS = [
  {name:"Bimo Saputra", role:"Content Creator, Jogja", text:"Rakit PC edit video di sini, dikasih rekomendasi jujur sesuai budget. Hasilnya lancar buat render 4K."},
  {name:"Ayu Kartika", role:"Mahasiswi UGM", text:"Beli laptop pertama buat kuliah, stafnya sabar jelasin spek sampai saya ngerti. Harga juga bersaing."},
  {name:"Reza Pratama", role:"Gamer & Streamer", text:"Upgrade VGA card dari sini, barang original dan garansi resminya jelas. Bakal balik lagi buat upgrade RAM."},
  {name:"Dewi Anggraini", role:"Pemilik Warnet", text:"Langganan beli komponen buat warnet, pengiriman cepat dan selalu ready stock untuk pesanan banyak."}
];

/* ================= RENDER ================= */
const money = n => "Rp" + n.toLocaleString("id-ID");

function renderCategories(){
  const grid = document.getElementById("catGrid");
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card">
      <div class="ci">${iconSvg(c.icon)}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </div>`).join("");
}

function badgeClass(tag){ return tag === "deal" ? "deal" : tag === "new" ? "new" : "best"; }

function renderProducts(filter){
  const grid = document.getElementById("prodGrid");
  const list = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.tag === filter);
  if(!list.length){
    grid.innerHTML = `<p style="grid-column:1/-1;color:var(--text-muted);padding:40px 0;text-align:center;">Tidak ada produk ditemukan.</p>`;
    return;
  }
  grid.innerHTML = list.map((p, i) => {
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
  }).join("");

  grid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.idx)));
  });
}

function renderSearch(term){
  const grid = document.getElementById("prodGrid");
  const list = PRODUCTS.filter(p => p.name.toLowerCase().includes(term) || p.cat.toLowerCase().includes(term));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  if(!list.length){
    grid.innerHTML = `<p style="grid-column:1/-1;color:var(--text-muted);padding:40px 0;text-align:center;">Tidak ada produk yang cocok dengan "${term}".</p>`;
    return;
  }
  grid.innerHTML = list.map(p => {
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
  }).join("");
  grid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.idx)));
  });
}

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
  else { document.querySelector('.tab-btn[data-filter="all"]').classList.add("active"); renderProducts("all"); }
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

/* ================= INIT ================= */
renderCategories();
renderProducts("all");
renderTestimonials();
renderCart();
resetTestiTimer();
