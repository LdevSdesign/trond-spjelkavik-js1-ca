function updateText() {
  let p = document.querySelector(".about").innerHTML;

  const newp = p.replace(/the/g, "banana").replace(/The/g, "Banana");

  document.querySelector(".about").innerHTML = newp;
}

setTimeout(updateText, 3000);
