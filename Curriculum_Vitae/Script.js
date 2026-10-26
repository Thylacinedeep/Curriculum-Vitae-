const printButton = document.querySelector("#print-cv");

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}