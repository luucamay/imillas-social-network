# Red social

Red social tiene dos retos:
- El primero es el login del usuario.
- El segundo es mostrar posts creados por el usuario

Solo en **modo desarrollo** funciona la llamada a los endpoints del frontend al backend.

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

## Modo producion frontend:
En el directorio del proyecto en la carpeta 'frontend', ejecuta:

### `npm install`
### `npm start`

Eso hará que la aplicación se ejecute en modo de desarrollo. <br />
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

La pagina cargará si tu editas cosas.<br />
Tu tambien podrás ver los errores lint en la consola.

## Modo produccion backend:
El backend se encuentra en el directorio del proyect en la carpeta 'backend', ejecuta:

### `npm install`
### `npm start`

Eso hará que la aplicación se ejecute en modo de desarrollo. <br />
Abrir [http://localhost:8080](http://localhost:8080) para comprobar en el navegador que la aplicacion se esta ejecutando.


## Probar la aplicacion frontend en produccion:
Probar la aplicacion en:
https://luucamay-red-social.netlify.com/login

Con los credenciales:

Email: lupe@gmail.com

Password: thisisapass

## Probar los endpoints del backend en produccion:
Opcion 1: http://64.225.127.76/posts

Opcion 2: https://protected-journey-51580.herokuapp.com/posts

En realidad he deployado en 2 diferentes lugares porque la aplicacion final no logra obtener los datos del endpoitn. Pienso que tiene que ver con la configuracion de los servidores del backend.

Pueden probar los enpoints desde un cliente como postman o usar una terminal linux cualquiera para utilizar el comando curl. Para el uso de curl he puesto ejemplos en el archivo 'backend/curl_scripts.js'



