import App from "../App";
import Home from "../views/home/home";

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'home', component: Home }
  ]
}

export default routes