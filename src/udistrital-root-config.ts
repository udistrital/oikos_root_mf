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

const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

function enviarDatos(info) {
  console.log("Hace el guardado en local storage")
  localStorage.setItem('sharedData', JSON.stringify(info));
}
enviarDatos({ mensaje: 'Hola desde el ROOT de OIKOS' });



applications.forEach(registerApplication);
layoutEngine.activate();
start();
