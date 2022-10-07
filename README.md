# Entrega 2.4: MongoDB queries

## Respuesta

Ver Archivo de Queries [queries.js](./queries.js)

## Información sobre como ejecutar

1. Instalar la base de datos de MongoDB utilizando docker
```
cd docker
docker compose up
```
2. Descargar y importar el archivo de restaurants a la base de datos
```
[restaurants.json](./restaurants.json)
```
3. Comando para ejecutar el archivo desde la terminal:
```
mongosh mongodb://root:example@localhost:27017/ queries.js
```

## Programas utilizados
- [MongoDB Compass](https://www.mongodb.com/es/products/compass): Programa utilizado para conectar con la base de datos de modo grafico y por shell
- [Docker](https://www.docker.com/): Programa utilizado para levantar el servidor MongoDb 