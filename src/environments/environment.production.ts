export const environment = {
  production: true,
  entorno: "test",
  autenticacion: true,
  notificaciones: false,
  menuApps: false,
  appname: "oikos",
  appMenu: "OIKOS_MF",
  TOKEN: {
    AUTORIZATION_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "e36v1MPQk2jbz9KM4SmKhk8Cyw0a",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL: "http://localhost:4200/",
    SIGN_OUT_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL: "http://localhost:4200/",
    AUTENTICACION_MID:
      "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/core-mf":
      "https://pruebascoreclientes.portaloas.udistrital.edu.co/main.js",
    "@udistrital/root-config":
      "https://pruebasoikosmicroclientes.portaloas.udistrital.edu.co/udistrital-root-config.js",
    "@udistrital/mapeo-dependencias-mf":
      "https://pruebasoikosmapeodependencias.portaloas.udistrital.edu.co/main.js",
    "@udistrital/registro-gestion":
      "https://pruebasoikosgestiondependencias.portaloas.udistrital.edu.co/main.js",
    "@udistrital/auditoria-mf": 
      "//localhost:4205/main.js",
  },
};
