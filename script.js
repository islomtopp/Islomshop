let products = [
  {Nomi: "iPhone 17 pro max", categorya: "Telefon"},
  {Nomi: "koylak", categorya: "koylaklar"},
,{Nomi:Muzlatkich", categorya : "Maishiy texnika"},
  {Nomi: "MacBook Pro", categorya: "Kompyuter"},
  {Nomi: "Ipad", categorya: "planshetlar"},
  {Nomi:Lora piano ", categorya: " oyoq kiyimlari"},
];

function login() {
  const phone = document.getElementById("phone").value;
  const name = document.getElementById("name").value;
  if(phone && name) {
    document.querySelector(".login").classList.add("hidden");
    document.querySelector(".menu").classList.remove("hidden");
    displayProducts(products);
  } else {
    alert("Iltimos, telefon va ismingizni kiriting!");
  }
}

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${product.name}</h3><p>Kategoriya: ${product.category}</p>`;
    container.appendChild(div);
  });
}

function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query)
  );
  displayProducts(filtered);
}
✅ Bu bilan nima ishlaydi:

Foydalanuvchi telefon va ism bilan kiradi

Mahsulotlar ro‘yxati ko‘rinadi

Qidiruv ishlaydi