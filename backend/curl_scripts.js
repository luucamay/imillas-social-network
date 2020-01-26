curl -X POST -H "Content-Type: application/json" -d '{"username":"newuser", "email":"newuser@gmail.com", "password":"60f69af8076a872f76c1616a6a78b90b3a8b52d3"}' http://localhost:8080/users/
curl -X GET "http://localhost:8080/users/"
curl -X GET "http://localhost:8080/users/ID"
curl -X DELETE "http://localhost:8080/users/ID"
curl -X PUT -H "Content-Type: application/json" -d '{"categoria":"otra","descripcion":"nueva nueva des", "monto":8000, "tipo":"gasto"}' http://localhost:8080/users/ID