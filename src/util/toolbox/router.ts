type Route = {
    path:       string;
    template:   string;
};

type Routes = Route[];

const navigate = async (container: HTMLElement, routes: Routes, path: string) => {
    const route = routes.find((route) => route.path === path);
  
    if (route) {
        const response = await fetch(route.template);
        const content = await response.text();
        
        container.innerHTML = content;
    } else {
        container.innerHTML = "Page not found";
    }
};

const initRouter = (container: HTMLElement, routes: Routes) => {
    window.addEventListener("hashchange", () => navigate(container, routes, window.location.hash.slice(1)));
    navigate(container, routes, window.location.hash.slice(1));
};

export { initRouter };