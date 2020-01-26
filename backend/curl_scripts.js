curl -X POST -H "Content-Type: application/json" -d '{"username":"newuser", "email":"newuser@gmail.com", "password":"60f69af8076a872f76c1616a6a78b90b3a8b52d3"}' http://localhost:8080/users/
curl -X POST -H "Content-Type: application/json" -d '{"email":"lupe@gmail.com", "password":"5435f401ad7aa24664554b227b1d10644bd7d37f"}' http://localhost:8080/users/login
curl -X GET "http://localhost:8080/users/"
curl -X GET "http://localhost:8080/users/ID"
curl -X DELETE "http://localhost:8080/users/ID"
curl -X PUT -H "Content-Type: application/json" -d '{"categoria":"otra","descripcion":"nueva nueva des", "monto":8000, "tipo":"gasto"}' http://localhost:8080/users/ID