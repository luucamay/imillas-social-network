# Red social

Probar la aplicacion en:
<a href="http://64.225.127.76/" target="_blank">este demo aquí</a>

Con los credenciales:

**Email: lupe@gmail.com**

**Password: thisisapass**

Red social tiene dos retos:
- El primero es el login del usuario.
- El segundo es mostrar posts creados por el usuario

## Login
El login cumple con los requerimientos solicitados:

### Validaciones:
1. El input de usuario debe ser requerido
2. El input password debe ser requerido
3. El nombre de usuario debe ser un correo válido
4. Lo que tipeo en el input de password debe ser secreto
5. Los mensajes de error deben aparecer en la parte inferior
de los inputs
### Comportamiento:
1. Cuando presiono el botón login debe validarse el
formulario en caso todo esté bien el sistema debe
redireccionar a nuestro muro.
2. En caso la validación falle debe mostrar los campos de
error y no debe redireccionar al muro.
3. El sistema debe tener una lista de usuarios válidos y sólo
se podrá ingresar con esos usuarios. Cualquier otro
campo debe decir que es un usuario inválido.
4. Al entregar el proyecto, indicar el usuario con el que se
puede hacer pruebas.

## Muro
El muro no se ha completado con todos los requerimientos solicitados, pero a continuacion listo los que si funcionan en modod desarrollo:
### Validaciones:
1. Al apretar el botón de publicar debe validar
que exista texto en el input.
### Comportamiento:
1. Debo poder publicar un post
2. Debo poder eliminar un post específico
3. Debo poder filtrar los posts solo para mis
amigos y para todo público
4. Debe confirmar antes de eliminar un post

## Modo desarrollo frontend:
En el directorio del proyecto en la carpeta 'frontend', ejecuta:

### `npm install`
### `npm start`

Eso hará que la aplicación se ejecute en modo de desarrollo. <br />
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

La pagina cargará si tu editas cosas.<br />
Tu tambien podrás ver los errores lint en la consola.

## Modo desarrollo backend:
El backend se encuentra en el directorio del proyecto en la carpeta 'backend', ejecuta:

### `npm install`
### `npm start`

Eso hará que la aplicación se ejecute en modo de desarrollo. <br />
Abrir [http://localhost:8080](http://localhost:8080) para comprobar en el navegador que la aplicacion se esta ejecutando.

## Probar la aplicacion frontend en produccion:
Probar la aplicacion en:
<a href="http://64.225.127.76/api/" target="_blank">http://64.225.127.76/</a>

Con los credenciales:

**Email: lupe@gmail.com**

**Password: thisisapass**

## Probar los endpoints del backend en produccion:
Probar endpoints en: <a href="http://64.225.127.76/api/" target="_blank">http://64.225.127.76/api/</a>

Pueden probar los enpoints desde un cliente como postman o usar una terminal linux cualquiera para utilizar el comando curl. Para el uso de curl he puesto ejemplos en el archivo 'backend/curl_scripts.js'

## Recursos utilizados
- Create-react-app: https://create-react-app.dev/docs/importing-a-component
- Revise el tutorial de login para ver que estructura le daba a mis archivos: https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
- He revisado algunas recomendaciones de laboratoria GDL: https://github.com/Laboratoria/GDL002-framework-social-network
- Para el backend en nodeJS lo primero que he revisado un par de tutoriales:
  - https://www.freecodecamp.org/news/building-a-node-js-application-on-android-part-1-termux-vim-and-node-js-dfa90c28958f/
  - https://medium.com/free-code-camp/building-a-node-js-application-on-android-part-2-express-and-nedb-ced04caea7bb
- Respecto al uso de hooks: https://www.taniarascia.com/crud-app-in-react-with-hooks/
- Para usar axios, leí la documentación oficial en: https://github.com/axios/axios
- También he leido documentaciones oficiales de paquetes oficiales de npm como: cors, sha1, react-router-dom, express-jwt, jsonwebtoken, y body-parser.





