import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import "./assets/styles/index.css";

let environment;

declare var isProd: boolean | undefined;
declare var isDev: boolean | undefined;
console.log("IS PROD ", isProd);
console.log("IS DEV ", isDev);
if (isProd) {
  environment = require("./environments/environment.production");
} else if (isDev) {
  environment = require("./environments/environment.development");
} else {
  environment = require("./environments/environment");
}

const data = {
  props: environment,
  loaders: {},
};
console.log("Data ", data);

const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
console.log(applications);
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
