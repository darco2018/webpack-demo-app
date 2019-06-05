import { run } from "./javascripts/app";
import "./main.scss";
import { AlertService } from "./javascripts/alert.service";
import { ComponentService } from "./javascripts/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
console.log("J");
