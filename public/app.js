const loc = window.location.pathname;

const activeEl = document.querySelector(`#menu a[href='${loc}']`);
activeEl.style.color = "rgb(45 212 191)";

const inactiveEl = document.querySelector(`#menu a:not([href='${loc}'])`);
inactiveEl.forEach((el) => {
  el.style.color = "rgb(39 39 42)";
});
