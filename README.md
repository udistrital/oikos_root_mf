# oikos_root_mf
El Root contiene la lógica de Single-SPA del sistema de gestión de dependencias y espacios físicos (OIKOS) y gestiona todos los microfrontends dentro de la página web, ayuda a gestionar la comunicación entre ellos y contiene el consumo de los assets, paleta de colores y favicon del sistema.

## Especificaciones Técnicas
### Tecnologías Implementadas y Versiones
* [Angular](https://angular.dev) 12.2.18
* [Node](https://nodejs.org/en/) 14.15.0

### Variables de Entorno
```shell
export const environment = {
  production: [Booleano que indica si está habilitado],
  entorno: [Entorno de ejecucion],
  autenticacion: [Booleano que indica si está habilitada],
  notificaciones: [Booleano que indica si están habilitadas],
  menuApps: [Booleano que indica si está habilitado],
  appname: [Nombre del sistema para los estilos],
  appMenu: [Nombre del sistema para los estilos],
  TOKEN: {
    AUTORIZATION_URL: [URL de Autorización - login],
    CLIENTE_ID: [Token de acceso],
    RESPONSE_TYPE: [Tipo de Respuesta del token],
    SCOPE: [Alcance de la solicitud],
    REDIRECT_URL: [URL de redirección],
    SIGN_OUT_URL: [URL de Cerrar Sesión - logout],
    SIGN_OUT_REDIRECT_URL: [URL de redirección despues de cerrar sesion],
    AUTENTICACION_MID: [URL de API MID Autenticación],
  }  
};
```
### Ejecución del Proyecto

  1. Clonar el repositorio:
      ```shell
      git clone https://github.com/udistrital/oikos_root_mf.git
      ```
  2. Acceder al directorio del repositorio clonado:
      ```shell
      cd oikos_root_mf
      ```
  3. Instalar las dependencias:
      ```shell
      npm install
      ```
  4. Iniciar el Root:
      ```shell
      npm start
      ```
### Ejecución Pruebas

Pruebas unitarias
```shell
# En Proceso
```

## Estado CI
```shell
# En Proceso
```
## Licencia

This file is part of oikos_root_mf.

oikos_root_mf is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

oikos_root_mf is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with novedades_crud. If not, see https://www.gnu.org/licenses/.

