const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.body;function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let o=null;t.addEventListener("click",(function(){n.style.backgroundColor=`${d()}`,o=setInterval((()=>{n.style.backgroundColor=`${d()}`}),1e3),t.disabled=!0,e.hasAttribute("disabled")&&(e.disabled=!1)})),e.addEventListener("click",(function(){clearInterval(o),e.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.08355981.js.map