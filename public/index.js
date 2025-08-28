let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let del = document.querySelector(".del");

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerHTML = `<li>${inp.value} <button>Delete</button></li>`;
  ul.appendChild(item);
  inp.value = "";
});

del.addEventListener("click", function () {
  
});