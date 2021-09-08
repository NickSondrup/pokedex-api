import { CurrentController } from "./Controllers/CurrentController.js";
import { PulledController } from "./Controllers/PulledController.js";
import { PushedController } from "./Controllers/PushedController.js";


class App {
pulledController = new PulledController
currentController = new CurrentController

pushedController = new PushedController

}
window["app"] = new App();
