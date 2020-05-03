function updateText() {
  let aboutParagraph = document.querySelector(".about").innerHTML;

  const replaceWord = aboutParagraph
    .replace(/the/g, "banana")
    .replace(/The/g, "Banana");

  document.querySelector(".about").innerHTML = replaceWord;
}

setTimeout(updateText, 3000);
