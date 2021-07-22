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
  <p class="product-price">Цена:</p>
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

const priceEl = document.createElement("p");
priceEl.textContent = `Цена: ${product.price} долларов`;
priceEl.classList.add("product-price");

console.log(productEl);

// ===добавляем элементы в разметку===

const mainProductEl = document.querySelector(".js-products");

productEl.append(productNameEl, descrEl, priceEl);

mainProductEl.appendChild(productEl);
