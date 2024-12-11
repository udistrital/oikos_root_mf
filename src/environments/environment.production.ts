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
    CLIENTE_ID: "iz1qclXfXrhzsfKuQX3SkDB1tHka",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL: "https://oikosmicroclientes.portaloas.udistrital.edu.co",
    SIGN_OUT_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL:
      "https://oikosmicroclientes.portaloas.udistrital.edu.co",
    AUTENTICACION_MID:
      "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/core-mf":
      "https://coreclientes.portaloas.udistrital.edu.co/main.js",
    "@udistrital/root-config":
      "https://oikosmicroclientes.portaloas.udistrital.edu.co/udistrital-root-config.js",
    "@udistrital/mapeo-dependencias-mf":
      "https://oikosmapeodependencias.portaloas.udistrital.edu.co/main.js",
    "@udistrital/registro-gestion":
      "https://oikosgestiondependencias.portaloas.udistrital.edu.co/main.js",
    "@udistrital/espacios-fisicos-mf": "//localhost:4204/main.js",
    "@udistrital/auditoria-mf": 
      "//localhost:4205/main.js",
  },
};
