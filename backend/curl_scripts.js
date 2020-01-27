// REQUESTS USERS
// new user
curl -X POST -H "Content-Type: application/json" -d '{"username":"newuser", "email":"newuser@gmail.com", "password":"60f69af8076a872f76c1616a6a78b90b3a8b52d3"}' http://localhost:8080/users/
// login user
curl -X POST -H "Content-Type: application/json" -d '{"email":"lupe@gmail.com", "password":"5435f401ad7aa24664554b227b1d10644bd7d37f"}' http://localhost:8080/users/login
// get all users
curl -X GET "http://localhost:8080/users/"
// get a specific user
curl -X GET "http://localhost:8080/users/ID"
// delete a user
curl -X DELETE "http://localhost:8080/users/ID"
// update a user
curl -X PUT -H "Content-Type: application/json" -d '{"categoria":"otra","descripcion":"nueva nueva des", "monto":8000, "tipo":"gasto"}' http://localhost:8080/users/ID

// REQUESTS POSTS
// new post
curl -X POST -H "Content-Type: application/json" -d '{"user_id":"PGbOfH0bseTsOtm3", "content":"Hoy el Laucha tierniza un Matambre de Res en nuestro Horno Tromen y lo termina en la parrilla con unos agregados DELUXE por encima. <br> ¡Una combinación explosiva de sabores!", "type":"friends"}' http://localhost:8080/posts/
// get all posts
curl -X GET "http://localhost:8080/posts/"
// get all posts by type
curl -X GET "http://localhost:8080/posts/TYPE"
// get a specific post
curl -X GET "http://localhost:8080/posts/id/ID"
// delete a post
curl -X DELETE "http://localhost:8080/posts/ID"
// update a post
curl -X PUT -H "Content-Type: application/json" -d '{"user_id":"PGbOfH0bseTsOtm3", "content":"this is not a normal post", "type":"public", "post_id":"1xW6tuEPPuNUCxWT"}' http://localhost:8080/posts/