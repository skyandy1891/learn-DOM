const listEl = document.querySelector(".cars");

// console.log(listEl);
// создаём элемент (заголовок)
// const titleEl = document.createElement("h1");

// даём класс элементу
// titleEl.classList.add("page-title");

// даём заголовок элементу
// titleEl.textContent = "Заголовок страницы";

// console.log(titleEl);
// добавляем элемент на страницу
// appendChild добавляет элемент в конец body

// document.body.appendChild(titleEl);

// ============================добавляем изображение в наш список элементов. опять же В КОНЕЦ!!!
// const imgEl = document.createElement("img");
// imgEl.src = "https://www.goodfon.ru/wallpaper/devushka-leto-plyazh-2559.html";
// imgEl.width = 480;
// imgEl.alt = "beach";
// listEl.appendChild(imgEl);

// ============================добавляем пункты меню===============

const navItemEl = document.createElement("li");
navItemEl.classList.add("nav-item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("nav-link");
navLinkEl.textContent = "личный кабинет";
navLinkEl.href = "/profile";

// вкладываем ссылку в li
navItemEl.appendChild(navLinkEl);

// ===firstElementChild (в начало списка)===
// ===lastElementChild (в конец списка)===
// ===children[index] (перед дюбым элементом, индекс которого мы укажем)===

// добавляем li в начало списка

// с помощью insertBefore вкладываем li в список cars (listEl) ПЕРВЫМ В СПИСКЕ!!!
listEl.insertBefore(navItemEl, listEl.firstElementChild);

// добавляем li в перед последним элементом списка

// insertBefore если нужно вставить перед последним... то lastElementChild
listEl.insertBefore(navItemEl, listEl.lastElementChild);

// добавляем li в перед любым элементом списка

// с помощью children[index] можно поставить перед любым элементом
listEl.insertBefore(navItemEl, listEl.children[1]);
