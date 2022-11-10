# DESAFÍO BSALE

## Objetivo

Realziar el Backend / lado del servidor de una aplicacion web E-Commerce, desarrollado en NodeJS.

## Base de datos

La API REST consume una base de datos MySQL, proporcionada por BSALE.

- Motor: MySQL
- Host: mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com
- Usuario: bsale_test
- Contraseña: bsale_test
- Nombre db: bsale_test

## Inicio de la aplicacion:

Para iniciar la aplicacion, luego de clonar el repositorio se debe ejecutar el compando "npm install" en la carpeta server, para instalar las dependencias del proyecto. Luego se debe ejecutar el comando "npm start" para iniciar la aplicacion.

## Estructura del proyecto:

El proyecto en su raiz posee los archivos de creacion del servidor propiamente dicho:

- index.js
- server.js

A su vez dentro de la carpeta src se encuentra la siguiente estructura:

- routes: contiene los archivos de rutas de la aplicacion.
- controllers: contiene los controladores de las rutas de la API REST.
- services: contiene los servicios de la aplicacion.
- config: contiene los archivos de configuracion de la aplicacion.
- constants: contiene los archivos de constantes de la aplicacion.

# Lista de Endpoints

## Productos

Obtener productos de la base de datos.

### GET /api/product

Obtiene todos los productos de la base de datos.
Se pueden agregar los siguientes parametros para filtrar la consulta:

- name (string): nombre del producto, completo o parcial (ej: /api/product?name=ron)
- page (numero): permite paginar los productos de respuesta (ej: /api/product?page=2)
- limit (numero): limita la cantidad de productos de respuesta, por defecto devuelve todos los productos (ej: /api/product?limit=10)
- category (id de la categoria, numero): categoria del producto (ej: /api/product?category=1)
- pmin (numero): precio minimo del producto (ej: /api/product?pmin=1000)
- pmax (numero): precio maximo del producto (ej: /api/product?pmax=1000)
- discount (numero): descuento minimo del producto (ej: /api/product?discount=10)
- orderBy (string): orden de los productos, por defecto se ordenan por id (ej: /api/product?orderBy=price)
- order (string: asc o desc): orden de los productos, por defecto es Ascendente (ej: /api/product?order=desc)

Se pueden agregar tantos parametros de busqueda como se desee, ej: /api/product?order=desc&limit=10&category=1

Por ejemplo la siguiente busqueda /api/product?category=6 devuelve un objeto que contiene 2 llaves: "products" y "total", donde "products" es un array de objetos con los productos encontrados y "total" es el total de productos que arrojaria la busqueda sin limite (sirve para paginar):
{
"products": [
{
"id": 98,
"name": "Cerveza Escudo Normal LATA 350CC",
"url_image": "",
"price": 600,
"discount": 0,
"category": 6
},
{
"id": 99,
"name": "Cerveza Escudo Sin Filtrar LATA 350CC",
"url_image": "",
"price": 800,
"discount": 0,
"category": 6
}
],
"totalQty": 2
}

### GET /api/product/:id

Obtiene un producto de la base de datos segun su id.
Por ejemplo la siguiente busqueda /api/product/5 devuelve un objeto con los datos del producto:

{
"product": [
{
"id": 5,
"name": "ENERGETICA MR BIG",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
"price": 1490,
"discount": 20,
"category": 1
}
]
}

## Discounts

### GET /api/discount

Obtiene todos los descuentos de la base de datos.
Por ejemplo la siguiente busqueda /api/discounts devuelve un objeto que contiene 1 llave: "discounts", donde "discounts" es un array de objetos con los descuentos encontrados:

{
"discounts": [
5,
10,
15,
20,
30
]
}

## Categories

### GET /api/category

Obtiene todas las categorias de la base de datos.

Por ejemplo la siguiente busqueda /api/categories devuelve un objeto que contiene 1 llave: "categories", donde "categories" es un array de objetos con las categorias encontradas:

{
"categories": [
{
"id": 1,
"name": "bebida energetica"
},
{
"id": 2,
"name": "pisco"
},
{
"id": 3,
"name": "ron"
},
{
"id": 4,
"name": "bebida"
},
{
"id": 5,
"name": "snack"
},
{
"id": 6,
"name": "cerveza"
},
{
"id": 7,
"name": "vodka"
}
]
}
