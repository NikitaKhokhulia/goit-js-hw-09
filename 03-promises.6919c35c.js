var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var o=n("eWCmQ");const i={form:document.querySelector(".form")};function l(e,r){const t=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{t?n(o.Notify.success(`✅ Fulfilled promise ${e} in ${r}ms`)):i(o.Notify.failure(`❌ Rejected promise ${e} in ${r}ms`))}),r)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();const r=e.currentTarget.elements;let t=Number(r.delay.value);const n=Number(r.step.value),o=Number(r.amount.value);for(let e=0;e<o;e++)l(e,t).then((e=>e)).catch((e=>e)),t+=n;i.form.reset()}));
//# sourceMappingURL=03-promises.6919c35c.js.map