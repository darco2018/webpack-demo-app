import { run } from "./public/javascripts/init";
import "./public/stylesheets/scss/main.scss";
import { AlertService } from "./public/javascripts/alert.service";
import { ComponentService } from "./public/javascripts/component.service";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
console.log("J");
