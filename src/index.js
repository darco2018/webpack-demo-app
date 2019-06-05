import { run } from "./js/app";
import "./main.scss";
import { AlertService } from "./js/alert.service";
import { ComponentService } from "./js/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
console.log("J");
