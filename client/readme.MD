# DESAFÍO BSALE

## Objetivo

Realziar el FrontEnd / lado del cliente de una aplicacion web E-Commerce, cosnumiendo la API REST de un servidor desarrollado en NodeJS.
Se pretende que la misma sea desarrollada con vanilla javascript, sin la utilizacion de librerias o framewors tales como ReactJS, VueJS, Angular, etc.

Se utilizan componentes de Bootstrap para el diseño de la aplicacion.

## Inicio de la aplicacion:

Para iniciar la aplicacion, se debe ejecutar el archivo index.html, el cual se encuentra en la carpeta client.

## Estructura de la aplicacion web:

La aplicacion esta compuesta por 2 componentes principales:

- Barra de Navegacion: Componente que contiene el nombre de la aplicacion, los parametros por los que se puede buscar, y un boton para ejecutar la busqueda.
- Contenedor de productos: Componente que contiene los productos que se muestran en la aplicacion, y que se actualizan segun la busqueda realizada, luego de presionar el boton "Serch".

## Busqueda de productos:

La busqueda de productos se realiza mediante cualquiera o la combinacion de los parametros: Nombre (completo o parcial), Categoria, Precio Minimo, Precio Maximo y Descuento minimo. Ademas se ordenan de acuerdo a la seleccion del orden.

## Estructura del proyecto:

El proyecto esta compuesto por 4 carpetas principales y el archivo index.html:

- Constants: Contiene los archivos de constantes utilizados en la aplicacion.
  - Contiene el archivo de constantes de la aplicacion, el cual contiene las constantes de la URL de la API REST.
- Css: Contiene los archivos de estilos utilizados en la aplicacion.
  - Contiene el archivo de estilos de la aplicacion.
- Images: Contiene las imagenes utilizadas en la aplicacion.
  - Contiene las imagenes utilizadas en la aplicacion.
- js: Contiene los archivos de javascript utilizados en la aplicacion.
  - Contiene el archivo de funciones de la aplicacion. Se intento modularizar los mismos para que el codigo fuera mas prolijo y legible.
