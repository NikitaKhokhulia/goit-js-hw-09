!function(){var t={bodyColor:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};function o(){t.bodyColor.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}var n=null;t.startBtn.addEventListener("click",(function(){n=setInterval(o,1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1,console.log(n)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.c994615a.js.map
