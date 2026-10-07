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
  {name:"Epson EB-X600 XGA 3600 Lumens", cat:"Projector", icon:"projector", price:6000000, old:null, tag:"best", badge:"Terlaris"},
  {name:"Epson EB-E600 XGA 3400 Lumens", cat:"Projector", icon:"projector", price:5450000, old:null, tag:"new", badge:"Baru"},
  {name:"Monitor LG 24U411B-B (144HZ)", cat:"Monitor", icon:"monitor", price:1400000, old:1500000, tag:"deal", badge:"Diskon"},
  {name:"Headset Fantech Chief II HG20", cat:"Headset", icon:"headset", price:250000, old:null, tag:"new", badge:"Baru"},
  {name:"MSI Cyborg 15 9S7-15Q342-1239", cat:"Laptop", icon:"laptop", price:20499000, old:21999000, tag:"best", badge:"Terlaris"},
  {name:"Asus Vivobook 14 A1404VAP-VIPS3853M", cat:"Laptop", icon:"laptop", price:9999000, old:10200000, tag:"deal", badge:"Diskon"},
  {name:"Lenovo Yoga 7 2in1-83JQ007NID", cat:"Laptop", icon:"laptop", price:22100000, old:null, tag:"new", badge:"Baru"},
  {name:"TP-Link Archer C54 AC1200", cat:"Router", icon:"router", price:350000, old:null, tag:"new", badge:"Baru"},
  {name:"D-Link DES-1024D 24 Port", cat:"Router", icon:"router", price:510000, old:null, tag:"new", badge:"Baru"},
  {name:"PSU Infinity 550W RGB", cat:"Power Supply", icon:"psu", price:540000, old:600000, tag:"deal", badge:"Diskon"},
  {name:"Canon G2010 Ink Tank", cat:"Printer", icon:"printer", price:1700000, old:null, tag:"best", badge:"Terlaris"},
  {name:"HP Smart Tank 583", cat:"Printer", icon:"printer", price:1975000, old:null, tag:"best", badge:"Terlaris"},
  {name:"HP Smart Tank 523", cat:"Printer", icon:"printer", price:1650000, old:1700000, tag:"deal", badge:"Diskon"},
  {name:"Mouse Logitech B100 USB", cat:"Mouse", icon:"headset", price:250000, old:null, tag:"best", badge:"Terlaris"},
  {name:"Mouse Fantech Crypto II VX7V2", cat:"Mouse", icon:"headset", price:130000, old:null, tag:"best", badge:"Terlaris"},
  {name:"Acer Predator Helios PHN16S-71-78UQ", cat:"Laptop", icon:"laptop", price:28499000, old:29999000, tag:"deal", badge:"Diskon"},
  {name:"SSD V-gen 1 TB Platinum SATA", cat:"Storage", icon:"ssd", price:3300000, old:3500000, tag:"deal", badge:"Diskon"}
  
];

/*  8 Kategori Utama */
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

let activeTag = "all", activeCat = "all", activePrice = "all", activeSort = "default";

const PRICE_RANGES = [
  {key:"all",   label:"Semua harga",        min:0,    max:Infinity},
  {key:"lt1",   label:"Di bawah Rp1 juta",  min:0,    max:1e6},
  {key:"1-5",   label:"Rp1 – 5 juta",       min:1e6,  max:5e6},
  {key:"5-10",  label:"Rp5 – 10 juta",      min:5e6,  max:10e6},
  {key:"10-20", label:"Rp10 – 20 juta",     min:10e6, max:20e6},
  {key:"gt20",  label:"Di atas Rp20 juta",  min:20e6, max:Infinity}
];
const SORTS = [
  {key:"default",    label:"Rekomendasi"},
  {key:"price-asc",  label:"Harga: terendah"},
  {key:"price-desc", label:"Harga: tertinggi"},
  {key:"discount",   label:"Diskon terbesar"},
  {key:"name",       label:"Nama: A–Z"}
];
const discountPct = p => p.old ? (p.old - p.price) / p.old : 0;

function sortList(list){
  const l = list.slice();
  if(activeSort === "price-asc") l.sort((a,b) => a.price - b.price);
  else if(activeSort === "price-desc") l.sort((a,b) => b.price - a.price);
  else if(activeSort === "discount") l.sort((a,b) => discountPct(b) - discountPct(a));
  else if(activeSort === "name") l.sort((a,b) => a.name.localeCompare(b.name, "id"));
  return l;
}

/* Gambar Products */
const PRODUCT_IMAGES = {
  "MSI Cyborg 15 9S7-15Q342-1239": "images/msi-cyborg-15-1239.png",
  "Asus Vivobook 14 A1404VAP-VIPS3853M": "images/asus-vivobook-14-a1404vap.png",
  "Epson EcoTank L3251": "images/epson_l3251.jpg",
  "Aio Advan I5 A-8S2 (I5-1235U+8+256GB)": "images/aio_advan_onepci5.jpg",
  "Aio Asus P440VAK-W3852W": "images/aio_asus_p440vak.jpg",
  "Aio Lenovo N100-F0JN0011ID": "images/aio_lenovo11id.jpg",
  "DDR5 16GB 5600 V-Gen": "images/ddr5_vgen16gb.jpg",
  "SSD Visipro 1 TB NVMe Turbo": "images/ssd_visipro_1tb.jpg",
  "Epson Ecotank L3210": "images/epson_l3210.jpg",
  "Epson EB-X600 XGA 3600 Lumens": "images/epson_eb_x600.jpg",
  "Epson EB-E600 XGA 3400 Lumens": "images/epson_eb_e600.jpg",
  "Monitor LG 24U411B-B (144HZ)": "images/lg_24u411b.jpg",
  "Headset Fantech Chief II HG20": "images/fantech_chief_ii_hg20.jpg",
  "TP-Link Archer C54 AC1200": "images/tplink_c54_ac1200.jpg",
  "D-Link DES-1024D 24 Port": "images/dlink_des_1024d.jpg",
  "PSU Infinity 550W RGB": "images/psu_infinity_550w.jpg",
  "Canon G2010 Ink Tank": "images/canon_g2010.png",
  "HP Smart Tank 583": "images/hp_583.jpg",
  "HP Smart Tank 523": "images/hp_523.jpg",
  "Mouse Logitech B100 USB": "images/logitech_b100.jpg",
  "Mouse Fantech Crypto II VX7V2": "images/fantech_crypto.jpg",
  "Acer Predator Helios PHN16S-71-78UQ": "images/acer_predator_78uq.png",
  "SSD V-gen 1 TB Platinum SATA": "images/ssd_vgen_1tb.jpg",
  "Headset Fantech Chief II HG20": "images/fantech_chief.jpg",
  "Lenovo Yoga 7 2in1-83JQ007NID": "images/lenovo_yoga_7NID.jpg",
  "Mouse Logitech B100 USB": "images/logitech_b100.png"
};
const imgSrc = p => p.img || PRODUCT_IMAGES[p.name] || "";
function mediaOf(p){
  const src = imgSrc(p);
  return src
    ? `<img class="prod-img" src="${src}" alt="${p.name}" loading="lazy" data-icon="${p.icon}">`
    : iconSvg(p.icon);
}
/* jika file gambar tidak ditemukan, kembali ke ikon */
document.addEventListener("error", e => {
  const img = e.target;
  if(img && img.tagName === "IMG" && img.classList.contains("prod-img")){
    img.parentElement.classList.remove("has-img");
    img.outerHTML = iconSvg(img.dataset.icon);
  }
}, true);

/* ---- kartu produk ---- */
function productCard(p){
  const idx = PRODUCTS.indexOf(p);
  return `
    <div class="prod-card" data-idx="${idx}">
      <div class="prod-media${imgSrc(p) ? " has-img" : ""}">
        <span class="badge ${badgeClass(p.tag)}">${p.badge}</span>
        ${mediaOf(p)}
      </div>
      <div class="prod-body">
        <div class="prod-cat">${p.cat}</div>
        <div class="prod-name" role="button" tabindex="0" aria-label="Lihat detail ${p.name}">${p.name}</div>
        <div class="prod-price-row">
          <span class="prod-price">${money(p.price)}</span>
          ${p.old ? `<span class="prod-old">${money(p.old)}</span>` : ""}
        </div>
        <div class="prod-detail-hint">Lihat spesifikasi &amp; garansi
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
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
  document.getElementById("resultCount").textContent = `Menampilkan ${list.length} dari ${PRODUCTS.length} produk`;
  if(!list.length){
    grid.innerHTML = `<div style="grid-column:1/-1;color:var(--text-muted);padding:40px 0;text-align:center;">
      <p>${emptyMsg}</p>
      <button type="button" class="tb-reset" data-reset style="margin-top:14px;">Reset filter</button>
    </div>`;
    return;
  }
  grid.innerHTML = list.map(productCard).join("");
}

/* satu listener untuk seluruh grid: tombol keranjang vs buka detail */
document.getElementById("prodGrid").addEventListener("click", e => {
  if(e.target.closest("[data-reset]")){ resetFilters(); return; }
  const add = e.target.closest(".add-btn");
  if(add){ addToCart(parseInt(add.dataset.idx)); return; }
  const card = e.target.closest(".prod-card");
  if(card) openProduct(parseInt(card.dataset.idx));
});
document.getElementById("prodGrid").addEventListener("keydown", e => {
  if((e.key === "Enter" || e.key === " ") && e.target.matches(".prod-name")){
    e.preventDefault();
    openProduct(parseInt(e.target.closest(".prod-card").dataset.idx));
  }
});

/* ---- filter kategori utama (chip) ---- */
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

/* ---- filter harga & urutan ---- */
function renderToolbar(){
  document.getElementById("priceFilter").innerHTML =
    PRICE_RANGES.map(r => `<option value="${r.key}">${r.label}</option>`).join("");
  document.getElementById("sortSelect").innerHTML =
    SORTS.map(s => `<option value="${s.key}">${s.label}</option>`).join("");
}
function syncControls(){
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === activeTag));
  document.getElementById("priceFilter").value = activePrice;
  document.getElementById("sortSelect").value = activeSort;
  renderCatFilter();
}
function resetFilters(){
  activeTag = "all"; activeCat = "all"; activePrice = "all"; activeSort = "default";
  document.getElementById("searchInput").value = "";
  syncControls();
  renderProducts();
}
document.getElementById("priceFilter").addEventListener("change", e => { activePrice = e.target.value; renderProducts(); });
document.getElementById("sortSelect").addEventListener("change", e => { activeSort = e.target.value; renderProducts(); });
document.getElementById("resetFilters").addEventListener("click", resetFilters);

document.getElementById("catFilter").addEventListener("click", e => {
  const btn = e.target.closest(".cat-chip");
  if(!btn) return;
  setCategory(btn.dataset.cat);
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === activeTag));
});

function renderProducts(filter){
  if(filter !== undefined) activeTag = filter;
  const range = PRICE_RANGES.find(r => r.key === activePrice) || PRICE_RANGES[0];
  const list = sortList(PRODUCTS.filter(p =>
    (activeTag === "all" || p.tag === activeTag) &&
    (activeCat === "all" || mainCatOf(p) === activeCat) &&
    p.price >= range.min && p.price < range.max
  ));
  mountProducts(list, "Tidak ada produk yang cocok dengan filter ini.");
}

function renderSearch(term){
  const list = sortList(PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(term) || p.cat.toLowerCase().includes(term) || mainCatOf(p).toLowerCase().includes(term)
  ));
  document.querySelectorAll(".tab-btn, .cat-chip").forEach(b => b.classList.remove("active"));
  mountProducts(list, `Tidak ada produk yang cocok dengan "${term}".`);
}

/* ================= DETAIL PRODUK (POPUP) ================= */
const DESC = {
  "Epson EcoTank L3251": "Printer Epson EcoTank L3251 Print Scan Copy Wireless (TKDN). Bisa cetak secara manual pakai kabel USB bawaan printernya. Ukuran kertas : Legal (8.5 x 14″), Indian-Legal (215 x 345 mm), 8.5 x 13″, Letter, A4, 16K (195 x270 mm), B5, A5, B6, A6, Hagaki (100 x 148 mm), 5 x 7″, 5 x 8″, 4 x 6″, Envelopes: #10, DL, C6",
  "Aio Advan I5 A-8S2 (I5-1235U+8+256GB)": "I5-1235U/8GB /256GB SSD /24 FHD/W11/FREE WIRELESS KB & MOUSE/SILVER",
  "Aio Asus P440VAK-W3852W": "Core 3-100U/DDR5 8G/512G PCIe SSD G4/ 23,8 FHD/Win 11 Home/2YOSS (1Y ADP)/white  (TPM/WiFi 6/Wireless KB&MS/Mcfee).",
  "Aio Lenovo N100-F0JN0011ID": "Intel N100/8GB DDR5/512 GB SSD/23.8/UMA/ W11H/M365 + OH24/Cloud Grey/WIFI+BT/USB Keyboard CG/USB Mouse CG/1Y Onsite.",
  "DDR5 16GB 5600 V-Gen": "Memori RAM DDR5 berkapasitas 16GB dengan kecepatan 5600 MHz dari V-Gen. DDR5 adalah generasi terbaru dari RAM yang menawarkan kecepatan lebih tinggi dan efisiensi daya lebih baik dibanding DDR4.",
  "SSD Visipro 1 TB NVMe Turbo": "SSD berkapasitas 1 TB dari Visipro dengan antarmuka NVMe. NVMe jauh lebih cepat dibanding hard disk maupun SSD SATA untuk menyalakan sistem operasi, membuka aplikasi, dan memindahkan file berukuran besar.",
  "Epson Ecotank L3210": "Printer all-in-one ink tank dari Epson bisa Print, Scan, Copy. Print Speed: Photo Default – 10 x 15 cm / 4 x 6 ” *2: Approx. 69 sec per photo (Border) / 90 sec per photo (Borderless).",
  "Epson EB-X600 XGA 3600 Lumens": "Projector Epson dengan resolusi XGA (1024 × 768) dan kecerahan 3.600 lumens. Projector ini menawarkan fleksibelitas melalui berbagai terminal input seperti dua buah D-Sub15 (VGA), Composite Video (RCA), HDMI, serta USB Type A dan Type B, walaupun telah memiliki pengeras suara internal 5W Mono yang cukup untuk kebutuhan audio dalam presentasi skala kecil hingga menengah, projector tetap dilengkapi dengan audio input (RCA/Stereo mini jack) dan output audio (Stereo mini), untuk kemudahan dalam menghubungkan perangkat audio eksternal.",
  "Epson EB-E600 XGA 3400 Lumens": "Projector Epson dengan resolusi XGA (1024 × 768) dan kecerahan 3.400 lumens. Produk EB-E600 dan EB-X600 dirancang untuk memberikan kinerja yang lebih tinggi dengan fitur-fitur canggih yang mendukung berbagai kebutuhan Pendidikan dan perkantoran. Kedua produk ini dirancang untuk memenuhi persyaratan Tingkat Komponen Dalam Negeri (TKDN) yang tinggi, sejalan dengan komitmen Epson untuk mendukung inisiatif pemerintah dalam meningkatkan penggunaan produk-produk dalam negeri.",
  "Monitor LG 24U411B-B (144HZ)": "Monitor 24 inci dari LG dengan refresh rate 144 Hz. Ukuran: 23.8 (60 cm). Resolusi: 1920 x 1080. Panel: IPS. Gamut warna: sRGB 99% (CIE1931)",
  "Headset Fantech Chief II HG20": "Dengan iluminasi RGB yang mengalir di earcup, headset ini akan menjadi pusat perhatian di rig gaming Anda. Tidak hanya soal penampilan, sebagai headset gaming RGB sejati, Chief HG20 ditenagai oleh driver berukuran 50mm yang menghasilkan suara jernih dan bass yang bertenaga, membantu Anda mendeteksi setiap detail di dalam game. Komunikasi tim yang bebas gangguan dijamin oleh mikrofon dengan fitur noise-cancelling. Desain over-ear yang nyaman memastikan Anda bisa bermain berjam-jam tanpa lelah.",
  "MSI Cyborg 15 9S7-15Q342-1239": "i5-13420H/16GB DDR5, 2 Slots, Max 96GB/512GB NVMe PCIe SSD Gen4x4, 1x M.2 SSD slot (NVMe PCIe Gen4)/RTX 5050, GDDR7 8GB/15.6 FHD (1920*1080), 144Hz IPS-Level/4-Zone RGB Gaming Keyboard/W11/2YRS+ADP 1YR/TRANSLUCENT BLACK",
  "Asus Vivobook 14 A1404VAP-VIPS3853M": "Core 3 100U/8GB/512GB/Cool Silver/VIPS/FHD/OPI M365/2+2ADP/Win11/Upg/Bag",
  "Lenovo Yoga 7 2in1-83JQ007NID": "Intel® Core™ Ultra 5 226V 16GB 512 SSD W11+OHS + M365 Basic Seashell",
  "TP-Link Archer C54 AC1200": "Wi-Fi AC lebih cepat—dual-band AC1200 ideal untuk streaming video 4K dan pengunduhan berkecepatan tinggi. Mendukung IPv6—Kompatibel dengan IPv6 (Protokol Internet terbaru versi 6). Multi-Mode 3-in-1—Mendukung mode Router, Access Point, dan Range Extender dengan fleksibel. Cakupan Jangkauan Jauh—Antena 4× dan Beamforming menghadirkan jangkauan Wi-Fi yang luas dan koneksi yang andal.",
  "D-Link DES-1024D 24 Port": "Switch desktop DES-1024D 24-Port Fast Ethernet yang tidak terkelola dirancang untuk meningkatkan kinerja kelompok kerja sekaligus memberikan fleksibilitas tingkat tinggi. Perangkat ini, yang tangguh namun mudah digunakan, memungkinkan pengguna untuk dengan mudah menghubungkan port mana pun ke jaringan 10Mbps atau 100Mbps untuk melipatgandakan bandwidth, meningkatkan waktu respons, dan memenuhi kebutuhan beban kerja yang berat.",
  "PSU Infinity 550W RGB": "Flexible 20+4pin compliant with INTEL ATX 12V 2.2. Main power & (4+4)pin + EPS 12V connectors. 6-pin PCI-E connectors supporting latest NVIDIA & AMD RADEON video card SLI & Crossfire dual GPU Support. Support SATA / SATA II HDs / SATA III",
  "Canon G2010 Ink Tank": "Print Scan Copy. Printer Ink Tank dengan kecepatan cetak sesuai ISO standard (A4): hingga 8,8ipm hitam / 5,0ipm warna. USB 2.0 Kecepatan Tinggi. Volume cetak yang direkomendasikan: 150 – 1500 halaman.",
  "HP Smart Tank 583": "Print, Scan & Copy. Print speed up to 12 ppm (black) and 5 ppm (color). 1 Hi-Speed USB 2.0 (device); 1 Wi-Fi 802.11b/g/n; 1 Wi-Fi Direct. A4; B5; A6; DL envelope, legal. Wireless capability : Yes, built-in Wi-Fi 2.4G, Wi-Fi Direct",
  "HP Smart Tank 523": "Print, Scan & Copy. Print speed up to 12 ppm (black) and 5 ppm (color). Media sizes supported : A4; B5; A6; DL envelope, legal. 1 Hi-Speed USB 2.0 (device)",
  "Mouse Logitech B100 USB": "Dengan bentuk dan ukuran yang sangat pas di tangan Anda merupakan kelebihan produk ini. Warna dan materialnya pun merupakan bahan pilihan yang menjadikan produk andalan ini tahan lama. Mouse menawan ini juga sangat halus dan tidak licin pada tangan Anda. Didesain sedemikian rupa agar mouse ini dapat digunakan di tangan kanan dan kiri. Mouse ini menawarkan kenyamanan dan ketepatan yang lebih dari touchpad Anda. Ukurannya yang kecil sangat pas ditaruh di tas dibawa kemana saja.",
  "Mouse Fantech Crypto II VX7V2": "Si mouse lincah dengan berat 84gr ini hadir untuk kamu yang mencari presisi. Dengan 6 tombol macro dan DPI yang bisa diatur sampai 8000, VX7 sangat cocok untuk pengguna Palm maupun Claw Grip. Tampilan makin keren dengan lampu RGB 4 warna!",
  "Acer Predator Helios PHN16S-71-78UQ": "Intel® Core™ Ultra 7 processor 255HX          NVIDIA® GeForce RTX™ 5060 8GB of GDDR7        1x16GB of DDR5 5600Mhz        16 WQXGA (500nits) 240Hz, DCI-P3 100%, OLED        1TB SSD NVMe GEN4        FineTip RGB-backlight slim keyboard        Win 11 Home + Office Home 2024        1 Year Office 365 Basic         3/3/3 + 1Y AADP",
  "SSD V-gen 1 TB Platinum SATA": "SSD berkapasitas 1 TB dari V-Gen seri Platinum dengan antarmuka SATA. Dimensi : 100 x 70 x 6 mm Speed : Read up to 510 MB/s Write up to 410 MB/s Interface : SATA 3 - 6 GB/s Form Factor : 2.5 inch Warranty : 3 years one to one replacement Type : Internal Storage Supported : UDMA Mode 6 TRIM Support : Yes (Requires OS Support) Garbage Collection : Yes S.M.A.R.T : Yes Write Cache : Yes Host Protect Area : Yes APM : Yes NCQ : Yes 48-Bit : Yes Security : AES 256-Bit Full Disk Encryption (FDE) TCG/Opal V2.0 , Encryption Drive (IEEE1667) Volume : +/- 20 gr"
};
const descOf = p => DESC[p.name] ||
  `${p.name} adalah produk kategori ${mainCatOf(p)}. Untuk spesifikasi lengkap, silakan hubungi toko.`;

/* Garansi */
const WARRANTY = {
  "Printer":       {term:"2 Tahun"},
  "All-in-One PC": {term:"2 Tahun"},
  "Projector":     {term:"2 Tahun"},
  "RAM & Storage": {term:"3 Tahun"},
  "Laptop":        {term:"2 Tahun"},
  "Monitor":       {term:"2 Tahun"},
  "Peripherals":   {term:"2 Tahun"},
  "Networking":    {term:"1 Tahun"},
  "Lainnya":       {term:"1 Tahun"}
};

const pm = document.getElementById("pm");
const pmBody = document.getElementById("pmBody");
const pmDialog = pm.querySelector(".pm-dialog");
let pmIdx = null, pmLastFocus = null;

function openProduct(idx){
  const p = PRODUCTS[idx];
  if(!p) return;
  pmIdx = idx;
  pmLastFocus = document.activeElement;
  const w = WARRANTY[mainCatOf(p)] || WARRANTY["Lainnya"];
  const save = p.old ? p.old - p.price : 0;
  const pct = p.old ? Math.round(discountPct(p) * 100) : 0;
  const wa = "https://wa.me/62895378142009?text=" + encodeURIComponent(`Halo TOP Computer, saya mau tanya produk: ${p.name}`);

  pmBody.innerHTML = `
    <div class="pm-grid">
      <div class="pm-media${imgSrc(p) ? " has-img" : ""}">
        <span class="badge ${badgeClass(p.tag)}">${p.badge}</span>
        ${mediaOf(p)}
      </div>
      <div class="pm-info">
        <div class="prod-cat">${mainCatOf(p)}</div>
        <h3 id="pmTitle" class="pm-name">${p.name}</h3>
        <div class="pm-price-row">
          <span class="pm-price">${money(p.price)}</span>
          ${p.old ? `<span class="prod-old">${money(p.old)}</span><span class="pm-save">Hemat ${money(save)} (${pct}%)</span>` : ""}
        </div>

        <h4 class="pm-h">Deskripsi &amp; Spesifikasi</h4>
        <p class="pm-desc">${descOf(p)}</p>

        <h4 class="pm-h">Garansi</h4>
        <div class="pm-warranty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
          <div>
            <b>Garansi resmi ${w.term}</b>
            <span>Garansi distributor resmi. Simpan nota pembelian sebagai bukti klaim.</span>
          </div>
        </div>

        <p class="pm-note">Spesifikasi lengkap dan ketersediaan stok bisa dikonfirmasi langsung ke toko.</p>

        <div class="pm-actions">
          <button type="button" class="btn btn-primary" data-pm-add>Tambah ke Keranjang</button>
          <a class="btn btn-outline" href="${wa}" target="_blank" rel="noopener noreferrer">Tanya via WhatsApp</a>
        </div>
      </div>
    </div>`;

  pm.classList.add("open");
  pm.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  pmDialog.scrollTop = 0;
  pmDialog.focus();
}

function closeProduct(){
  if(!pm.classList.contains("open")) return;
  pm.classList.remove("open");
  pm.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if(pmLastFocus && document.contains(pmLastFocus)) pmLastFocus.focus();
  pmIdx = null;
}

pm.addEventListener("click", e => {
  if(e.target.closest("[data-close]")){ closeProduct(); return; }
  if(e.target.closest("[data-pm-add]")){
    const idx = pmIdx;
    closeProduct();
    addToCart(idx);
  }
});
document.addEventListener("keydown", e => {
  if(!pm.classList.contains("open")) return;
  if(e.key === "Escape"){ closeProduct(); return; }
  if(e.key === "Tab"){ /* jaga fokus tetap di dalam popup */
    const f = pmDialog.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
    if(!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if(e.shiftKey && (document.activeElement === first || document.activeElement === pmDialog)){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
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
let cart = [];

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
  else { activeTag = "all"; activeCat = "all"; syncControls(); renderProducts(); }
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
renderToolbar();
syncControls();
renderProducts("all");
renderTestimonials();
renderCart();
resetTestiTimer();
