# ELEC-STORE : E-commerce de electrónica

App destinada a la venta de: boards, circuitos, componentes y accesorios electrónicos.
Este proyecto fue creado con: [Create React App](https://github.com/facebook/create-react-app).

## EJECUTAR EL PROYECTO

Para inicializar el proyecto, en el directorio del poryecto ingresar:

## `npm start`

### EL PROYECTO ESTA DIVIDIDO EN LOS COMPONENTES Y ANIDADOS

#### IMPLEMENTADAS

* NavBAr - Barra de navegación con todo lo necesario para navegar por la aplicación, incluido el CartWidget, 
* ItemListContainer - Contenedor del catálogo de productos se renderiza el componente ItemList 
  * ItemList - Se renderiza el arreglo de productos a travez del componente Item
  * Item
* ItemDetailContainer - Contenedor del detalle del producto seleccionado se renderiza el componente ItemDetail
  * ItemDetail - Serenderiza el arreglo del producto seleccionado 
    * ItemCount - Controla el número de items a agregar
* CartWidget - Por implementar
* Cart - Por implementar

#### POR IMPLEMENTAR

* ItemCount - Renderiza los botones de conteo asi como el numero de productos seleccionados y el boton agregar

#### TEMPORALES

* getFetch - Componente temporal en donde se hard-codea el arreglo de productos

### LIBRERIAS INCLUIDAS

* bootstrap 5.1.3 -
* node-sass 6.0.1 -
* react-router-dom 6.0.1 - 

### CLONAR EL REPOSITORIO EN VISUAL STUDIO CODE

1. Cree un directorio donde se guardarán los repositorios
2. Abra el directorio en Visual Studio Code (menú Archivo > Abrir carpeta ...)
3. Para clonar el repositorio necesitará dos rutas (el origen y el destino):
    *`https://github.com/abadevlopment/e_commerce_valdivia`
    *La ruta del directorio de destino
4. En Visual Studio abra la ventana de comandos con Ctrl+Mayús+p
5. Escriba el comando git:clone y pulse Intro
6. Escriba la URL del repositorio de origen y pulse Intro
7. Escriba la ruta del directorio que contendrá la copia y pulse Intro
8. En unos segundos se mostrará la carpeta del repositorio clonado en la barra del explorador y se ofrecerá la posibilidad de abrir la carpeta del repositorio clonado. Haga clic en "Abrir repositorio"
9. Visual Studio Code abrirá la carpeta del repositorio clonado, mostrando su contenido 

## PREVIEW

![Preview App](https://res.cloudinary.com/dvinxey2w/image/upload/v1636834667/ARDUINO/PREVIEW_jgxlie.png)

#### NOTAS

Este es mi primer proyecto creado con 
## `https://es.reactjs.org/`