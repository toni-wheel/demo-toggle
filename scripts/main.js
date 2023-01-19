const toggle = document.querySelector("#checkbox1");

toggle.addEventListener("change", toggleHanlder);

function toggleHanlder(e) {
  return e.target.checked;
}
