SITIO ARTISTA STORE
===========

Descripción
----------------------------------------------------------------------------------------------------------------

`Proyecto Final` realizado en conjunto con `Coder House` (2023). Para `Comisión 57870 React Js Flex`,  la conexion esta realizada en `Firebase` motor de base de datos NoSQL. Donde se almacena la informacion de los productos permitiendo seleccionar ciertos productos, navegar a sus detalles, agregarlos al carrito, poder acceder a él, simular la compra de los productos. 

Se debe de seleccionar primero el producto con el cual queremos simular la compra, se procede a verificar el carrito de compras que nos llevara a una vista con la lista de productos seleccionados y un formulario para finalizar la compra, los productos tambien pueden ser eliminados de carrito.

Si un producto fue vendido este se quedara sin stock ya que el ecommerce se penso como una galeria y cada articulo posee un stock unico. 


Tecnologías y librerías:

-   Interfaz realizada con ReactJS - Create vite
-   Estilos con Bootstrap, react-bootstrap y preprocesador Sass
-   Visualizacion de productos en la vista detalles React-medium-image-zoom 
-   Alertas con Sweetalert2 
-   Ruteo con React Router Dom
-   Motor de base de datos con Firebase
-   Animaciones con Animate.css

Descargar y correr el proyecto
-------------------------------------------------------------------------------------------------------------------------------------------------

Una vez clonado o descargado el proyecto, instalar dependencias:

### `npm install`

Correr el servidor:

### `npm run dev`

Se abre una pestaña del navegador en el puerto 3000:

### Sino copiar esta URL y pegarla en el navegador: `http://localhost:3000`

Firebase
---------------------------------------------------------------------------------------------------

Para que la app corra tienen que generar una coleccion en firebase y utilizar el archivo `.env.example` para tomar las variables necesarias para esto.



---------------------------------------------------------------------------------------------------------


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
