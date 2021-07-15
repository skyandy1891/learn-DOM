const listEl = document.querySelector(".cars");
// console.log(listEl);
// создаём элемент (заголовок)
const titleEl = document.createElement("h1");
// даём класс элементу
titleEl.classList.add("page-title");
// даём заголовок элементу
titleEl.textContent = "Заголовок страницы";
// console.log(titleEl);
// добавляем элемент на страницу
// appendChild добавляет элемент в конец body
document.body.appendChild(titleEl);

// добавляем изображение в наш список элементов. опять же В КОНЕЦ!!!
// const imgEl = document.createElement("img");
// imgEl.src = "https://www.goodfon.ru/wallpaper/devushka-leto-plyazh-2559.html";
// imgEl.width = 480;
// imgEl.alt = "beach";
// listEl.appendChild(imgEl);

// ===================добавляем пункты меню===============
const navItemEl = document.createElement("li");
navItemEl.classList.add("nav-item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("nav-link");
navLinkEl.textContent = "личный кабинет";
navLinkEl.href = "/profile";

// вкладываем ссылку в li
navItemEl.appendChild(navLinkEl);

// вкладываем li в список машин (listEl)
listEl.appendChild(navItemEl);
console.log(listEl);

// ======================= test =======================
// const inputEl = document.createElement("field");
// inputEl.classList.add("input");
// inputEl.textContent = "форма для заполнения";

// const locListEl = document.createElement("ul");
// locListEl.classList.add("my-list");
// locListEl.textContent = "локальный список";

// inputEl.appendChild(locListEl);
// listEl.appendChild(inputEl);

const firstCarEl = document.querySelector(".cars-item-1");
firstCarEl.textContent = "bmw";

console.log(firstCarEl);

const secondCarEl = document.querySelector(".cars-item-2");
secondCarEl.textContent = "mersedes";
console.log(secondCarEl);
