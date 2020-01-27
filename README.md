# Red social

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



