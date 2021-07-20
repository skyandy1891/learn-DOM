// const colorPickerOptions = [
//   { label: "red", color: "#f44336" },
//   { label: "green", color: "#4caf50" },
//   { label: "blue", color: "#2196f3" },
//   { label: "gray", color: "#607d8b" },
//   { label: "pink", color: "#e91e63" },
//   { label: "indigo", color: "#3f51b5" },
// ];

// const option = colorPickerOptions[0];

// ==============создаём кнопку============

// const buttonEl = document.createElement("button");
// buttonEl.type = "button";
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// console.log(buttonEl);
// const colorPickerContainerEl = document.querySelector(".js-color-picker");

// ============================================== 1 ==============================================

// ======================перебираем массив colorPickerOptions старым методом 'for'===========================
// const elements = [];
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   elements.push(buttonEl);
// }
// console.log(elements);

// colorPickerContainerEl.append(...elements);

// ============================================== 2 ==============================================

// ============= перебираем с помощью 'map'====================

// так создаётся коллекция разметки!!!!!=======================
// const elements = colorPickerOptions.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   return buttonEl;
// });
// console.log(elements);

// colorPickerContainerEl.append(...elements);

// ============================================== 3 ==============================================

// ===================создаём эту же разметку с помощью функции !=========================

//  все коллекции в js делаются ТАК !!!!!

// const makeColorPickerOptions = (options) => {
//   return options.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);
