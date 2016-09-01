import {routes} from "./data/routes.json!json";

export class App {
    configureRouter(config, router) {
        this.router = router;
        config.title = "Boilerplate Aurelia";
        config.map(routes);
    }
}
