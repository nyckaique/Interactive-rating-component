const btn = document.querySelector(".btn");
btn?.addEventListener("click", () => {
  const rate = (
    document.querySelector('input[name="rate"]:checked') as HTMLInputElement
  ).value;
  const span = document.querySelector("#span");
  if (span !== null) {
    span.innerHTML = String(rate);
  }
  const page1 = document.querySelector("#page1");
  const page2 = document.querySelector("#page2");
  page1?.setAttribute("style", "display: none");
  page2?.setAttribute("style", "display: flex");
});
