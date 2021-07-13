import router from "./router";
import global from "./assets/css/global.css"

// Window Load
window.addEventListener("load",router(window.location.hash));
window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });