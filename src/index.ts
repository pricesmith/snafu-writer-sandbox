import { initRouter } from "./util/toolbox/router";

'use strict'

const initApp = () => {

    document.addEventListener("DOMContentLoaded", () => {
        const container = document.getElementById("main-container") as HTMLElement;
      
        const routes = [
            { path: "",         template: "pages/home.html" },
            { path: "about",    template: "pages/about.html" },
            { path: "contact",  template: "pages/contact.html" },
        ];
      
        initRouter(container, routes);
    });
}
