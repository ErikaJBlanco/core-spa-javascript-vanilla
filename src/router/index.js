//Componentes
import Header from "../components/Header";

// Views
import Homepage from "../views/HomePage";
import Results from "../views/Results"

const routes = {
    '': Homepage,
    '#home': Homepage,
    '#results' : Results
};

const router = async (route) => {

    //Components
    const header = document.querySelector('#header');
    header.innerHTML = await Header();

    //Views
    const container = document.querySelector('#container');
    let render = routes[route] ? routes[route] : Homepage;
    container.innerHTML = await render();
}

export default router;