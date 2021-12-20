# ABA-STORE : E-commerce de electrónica

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
  * Item - Se renderiza el arreglo de productos
    * ItemCount - Controla el número de items a agregar
* ItemDetailContainer - Contenedor del detalle del producto seleccionado se renderiza el componente ItemDetail
  * ItemDetail - Se renderiza el arreglo del producto seleccionado
    * ItemCount - Controla el número de items a agregar
* CartWidget - Presenta lista resumida del cart en un modal, asi mismo se puede acceder a los productos seleccionados, y en su boton se aprecia el numero de items y el monto total
* Cart - Presenta el resumen de los porductos seleccionados, y el formulario de registro del comprador
* CartSummary - Renderiza los productos selecionados
* CartReport - Renderiza el resumen de la compra con todos los datos incluidos
* User - Renderiza y controla en ingreso de datos del cliente a traves de formularios
* getFirestore - Conecta la aplicacaion con la API de Firebase
* CartContext - Controla el contexto de Cart y todo sus datos


### LIBRERIAS INCLUIDAS

* "bootstrap": "^5.1.3" - Creacion de componentes HTML
* "firebase": "^8.9.1" - API para base de datos
* "formik": "^2.2.9" - Control y autenticacion de datos del los formularios
* "node-sass": "^6.0.1" - Asignar estilos complementarios
* "react-router-dom": "^6.0.1" - Link y navagacion entre componentes
* "react-to-print": "^2.14.2" - Controla y permite la impresion del Resumen de compra
* "yup": "^0.32.11" - Autenticacion de datos de los fomularios

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

[https://jolly-elion-891149.netlify.app/](https://jolly-elion-891149.netlify.app/)
![Preview App](https://res.cloudinary.com/dvinxey2w/image/upload/v1639955833/Proyecto%20final/Preview_App_an8xy7.png)

#### NOTAS

Este es mi primer proyecto creado con:
## `https://es.reactjs.org/`