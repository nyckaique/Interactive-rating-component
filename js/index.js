"use strict";
const btn = document.querySelector(".btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    const rate = document.querySelector('input[name="rate"]:checked').value;
    const span = document.querySelector("#span");
    if (span !== null) {
        span.innerHTML = String(rate);
    }
    const page1 = document.querySelector("#page1");
    const page2 = document.querySelector("#page2");
    page1 === null || page1 === void 0 ? void 0 : page1.setAttribute("style", "display: none");
    page2 === null || page2 === void 0 ? void 0 : page2.setAttribute("style", "display: flex");
});
