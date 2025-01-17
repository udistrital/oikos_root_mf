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

applications.forEach(registerApplication);
layoutEngine.activate();
start();


window.addEventListener("clienteAuditoria", (event: Event) => {
  const customEvent = event as CustomEvent;
  if (customEvent.detail.appName === "@udistrital/auditoria-mf") {
    const rootClienteId = data.props.environment.TOKEN.CLIENTE_ID;
    window.dispatchEvent(
      new CustomEvent("infoRoot", {
        detail: {
          clienteId: rootClienteId,
          appName: "@udistrital/auditoria-mf",
        },
      })
    );
  }
});
