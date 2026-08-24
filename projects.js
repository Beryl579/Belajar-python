var pythonProjects = [
{"title":"Analisis Penjualan CSV","category":"data","difficulty":"Mudah","diffColor":"bg-green-100 text-green-700","desc":"Baca file CSV, hitung total per kategori.","code":"import csv\n\ndata=[{\"kategori\":\"Elektronik\",\"item\":\"Laptop\",\"harga\":8500000,\"qty\":3}]\nringkasan={}\nfor x in data: ringkasan[x[\"kategori\"]]=ringkasan.get(x[\"kategori\"],0)+x[\"harga\"]*x[\"qty\"]\nfor k,v in ringkasan.items(): print(f\"{k}: Rp {v:,.0f}\")"},
{"title":"Statistik Data Siswa","category":"data","difficulty":"Mudah","diffColor":"bg-green-100 text-green-700","desc":"Hitung mean, median, stdev.","code":"import statistics\nn=[85,92,78,90,88,76,95,89,84,91]\nprint(f\"Mean: {statistics.mean(n):.2f}\")\nprint(f\"Median: {statistics.median(n)}\")\nprint(f\"Stdev: {statistics.stdev(n):.2f}\")"},
{"title":"Monitor Sistem","category":"system","difficulty":"Mudah","diffColor":"bg-green-100 text-green-700","desc":"Info OS, Python, waktu.","code":"import platform\nfrom datetime import datetime\nprint(f\"OS: {platform.system()}\")\nprint(f\"Python: {platform.python_version()}\")\nprint(f\"Waktu: {datetime.now()}\")"},
{"title":"Password Generator","category":"automation","difficulty":"Mudah","diffColor":"bg-green-100 text-green-700","desc":"Generate password kuat.","code":"import random,string\ndef gen(n=16):\n  c=string.ascii_letters+string.digits+\"!@#$\"\n  pw=[random.choice(string.ascii_lowercase),random.choice(string.ascii_uppercase),random.choice(string.digits),random.choice(\"!@#$\")]\n  while len(pw)<n: pw.append(random.choice(c))\n  random.shuffle(pw);return \"\".join(pw)\nfor i in range(5): print(f\"  {i+1}. {gen()}\")"},
{"title":"JSON API Parser","category":"web","difficulty":"Mudah","diffColor":"bg-green-100 text-green-700","desc":"Parse JSON data.","code":"import json\napi={\"users\":[{\"name\":\"Alice\",\"role\":\"admin\",\"active\":True},{\"name\":\"Bob\",\"role\":\"user\",\"active\":True}]}\nactive=[u for u in api[\"users\"] if u[\"active\"]]\nprint(f\"Active: {len(active)}/{len(api[\"users\"])}\")\nfor u in active: print(f\"  - {u[\"name\"]} ({u[\"role\"]})\")"},
{"title":"Kalkulator Bunga","category":"finance","difficulty":"Mudah","diffColor":"bg-green-100 text-green-700","desc":"Bunga majemuk.","code":"def bunga(p,r,t):\n  for _ in range(t): p*=(1+r)\n  return p\np=10000000;r=0.08\nfor t in range(1,6): print(f\"  Thn {t}: Rp {bunga(p,r,t):>12,.0f}\")"},
{"title":"CSV Analyzer","category":"file","difficulty":"Mudah","diffColor":"bg-green-100 text-green-700","desc":"Analisis data CSV.","code":"import csv,io\ncsv_d=\"\"\"nama,nilai\nAlice,88\nBob,92\"\"\"\ndata=list(csv.DictReader(io.StringIO(csv_d)))\nfor r in data: r[\"nilai\"]=int(r[\"nilai\"])\nprint(\"Nilai>=85:\")\nfor r in data:\n  if r[\"nilai\"]>=85: print(f\"  {r[\"nama\"]}: {r[\"nilai\"]}\")"},
];

function filterProjects(cat){
  document.querySelectorAll(".project-filter-btn").forEach(function(b){
    b.classList.remove("bg-py-accent","text-white");
    b.classList.add("bg-gray-200","text-gray-700");
  });
  event.target.classList.remove("bg-gray-200","text-gray-700");
  event.target.classList.add("bg-py-accent","text-white");
  renderProjects(cat);
}

function renderProjects(cat){
  var g = document.getElementById("projects-grid");
  if(!g) return;
  g.innerHTML = "";
  var f = cat === "all" ? pythonProjects : pythonProjects.filter(function(p){ return p.category === cat; });
  f.forEach(function(p){
    var idx = pythonProjects.indexOf(p);
    var card = document.createElement("div");
    card.className = "bg-white rounded-card shadow-sm border border-gray-200 p-5 flex flex-col hover:shadow-md transition";
    var top = document.createElement("div");
    top.className = "flex items-center justify-between mb-2";
    var badge = document.createElement("span");
    badge.className = "px-2 py-0.5 rounded-full text-xs font-semibold " + p.diffColor;
    badge.textContent = p.difficulty;
    var catSpan = document.createElement("span");
    catSpan.className = "text-xs text-gray-400 capitalize";
    catSpan.textContent = p.category;
    top.appendChild(badge);
    top.appendChild(catSpan);
    var h4 = document.createElement("h4");
    h4.className = "font-bold text-gray-900 mb-2";
    h4.textContent = p.title;
    var desc = document.createElement("p");
    desc.className = "text-sm text-gray-600 mb-4 flex-1";
    desc.textContent = p.desc;
    var btn = document.createElement("button");
    btn.className = "w-full py-2 bg-py-accent text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition";
    btn.textContent = "Coba di Playground";
    btn.onclick = function(){ tryProject(idx); };
    card.appendChild(top);
    card.appendChild(h4);
    card.appendChild(desc);
    card.appendChild(btn);
    g.appendChild(card);
  });
}

function tryProject(idx){
  var p = pythonProjects[idx];
  if(p && p.code){
    setCode(p.code);
    navigate("playground");
  }
}
