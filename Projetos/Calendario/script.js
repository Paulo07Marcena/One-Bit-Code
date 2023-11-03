let el = document.querySelector(".number-days");

for (var i = 1; i <= 31; i++) {
  el.innerHTML += `<span>${i}</span>`;
}
