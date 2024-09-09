export const environment = {
  production: false,
  entorno: "test",
  autenticacion: true,
  notificaciones: false,
  menuApps: false,
  appname: "oikos",
  appMenu: "OIKOS_MF",
  TOKEN: {
    AUTORIZATION_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "z7JvZ5A382nWX_GkVDYcyYxHeIMa",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL:
      "https://pruebasoikosmicroclientes.portaloas.udistrital.edu.co",
    SIGN_OUT_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL:
      "https://pruebasoikosmicroclientes.portaloas.udistrital.edu.co",
    AUTENTICACION_MID:
      "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/core-mf":
      "https://pruebascoreclientes.portaloas.udistrital.edu.co/main.js",
    "@udistrital/root-config":
      "https://pruebasoikosmicroclientes.portaloas.udistrital.edu.co/udistrital-root-config.js",
    "@udistrital/mapeo":
      "https://pruebasoikosmapeodependencias.portaloas.udistrital.edu.co/main.js",
    "@udistrital/registro-gestion":
      "https://pruebasoikosgestiondependencias.portaloas.udistrital.edu.co/main.js",
  },
};
