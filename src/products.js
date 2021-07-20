// создаём карточку продукта!

const product = {
  name: "Сервоприводы",
  description: "we make a product card.",
  price: 2000,
  available: true,
  onSale: true,
};

{
  /* <article class="product">
  <h2 class="product-name">Название</h2>
  <p class="product-descr">Описание</p>
  <p class="product-pridct">Цена:</p>
</article>; */
}

const productEl = document.createElement("article");
productEl.classList.add("product");

const productNameEl = document.createElement("h2");
productNameEl.textContent = product.name;
productNameEl.classList.add("product-name");

const descrEl = document.createElement("p");
descrEl.textContent = product.description;
descrEl.classList.add("product-descr");

const pridctEl = document.createElement("p");
pridctEl.textContent = product.price;
pridctEl.classList.add("product-pridct");

console.log(productEl);
console.log(productNameEl);
console.log(descrEl);
console.log(pridctEl);
