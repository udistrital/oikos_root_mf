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

const sharedState = {
  data: null,
  sendData: (targetApp: string, message: any) => {
    if (targetApp === "@udistrital/mapeo-dependencias-mf" && window.mapeoNotify) {
      window.mapeoNotify(message);  
    } else if (targetApp === "@udistrital/auditoria-mf" && window.auditoriaNotify) {
      window.auditoriaNotify(message);  
    } else {
      console.warn(`No handler defined for app: ${targetApp}`);
    }
  },
};

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

applications.forEach((app) => {
  registerApplication({
    ...app,
    customProps: (name) => ({
      ...data.props,
      notify: (message: any) => {
        sharedState.sendData(name, message);
      },
    }),
  });
});

applications.forEach(registerApplication);
layoutEngine.activate();

registerApplication({
  name: "@udistrital/auditoria-mf",
  app: () => System.import("@udistrital/auditoria-mf") as any,  
  activeWhen: ["/auditoria"],
  customProps: {
    sendData: sharedState.sendData, 
  },
});

registerApplication({
  name: "@udistrital/mapeo-dependencias-mf",
  app: () => System.import("@udistrital/mapeo-dependencias-mf") as any, 
  activeWhen: ["/mapeo"],
  customProps: {
    sendData: sharedState.sendData,  
  },
});

start();
