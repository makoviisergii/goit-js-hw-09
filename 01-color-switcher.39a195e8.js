const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.body;t.addEventListener("click",(function(){a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0,e.hasAttribute("disabled")&&(e.disabled=!1)})),e.addEventListener("click",(function(){clearInterval(a),e.disabled=!0,t.disabled=!1}));let a=null;
//# sourceMappingURL=01-color-switcher.39a195e8.js.map
