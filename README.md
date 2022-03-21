# **MUSIC STORE**
# *Curso de React JS de CoderHouse*
### **Desarrollo por Nahuel Gómez**

- *Contacto: ngomezdw@gmail.com*
- *LinkedIn: https://www.linkedin.com/in/gomeznahuel/*
- *GitHub: https://github.com/almanoduerme*

# *Información del proyecto:*

Primer entrega del proyecto final para el curso de React.js de [CoderHouse](https://www.coderhouse.com).
Consiste en un ecommerce implementado con React.js junto a React Router y React Hooks..

![Demo](https://github.com/almanoduerme/coderhouse-react/blob/main/portrait.gif)

## *Desarrollado con:*

- [Visual Studio Code](https://code.visualstudio.com/)
- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React-Router](https://reactrouter.com/docs/en/v6/)
- [Firebase Google](https://firebase.google.com/?hl=es)

## *Dependencias:*

- React Router: Utilizo esta librería para crear rutas que rendericen diferentes componentes. Facilita la navegabilidad y le concede un enrutamiento dinámico a la aplicación.

- React Icons: Todos los íconos de la aplicación son componentes importados de esta librería.

- React Spinners: Utilizo esta librería para mostrar un spinner cuando se está cargando un componente.

- Firebase: Utilizo esta librería para conectar con la base de datos de Firebase.

## *Ejecución de la aplicación:*

1. Abrir una nueva terminal y clonar el repositorio con el siguiente comando:
    ```
    git clone https://github.com/almanoduerme/coderhouse-react.git
    ```

2. Dentro del proyecto, abrir una nueva terminal y ejecutar el siguiente comando:
    ```
    cd coderhouse-react
    npm install
    npm start
    ```

### *Información acerca del desarrollo:*
## *Rutas:*

- Main ("/"): Renderiza las imágenes de productos destacados, un container para acceder a las distintas categorías y otro con todos los productos existentes en la base de datos.
- Category ("/category/:categoryId"): Renderiza los productos filtrados en base a su categoría.
- Item ("/detail/:productId"): Renderiza una card con los detalles del producto seleccionado (nombre, descripción, imágen, stock). 
- Cart ("/cart"): Renderiza el carrito de compras con los productos agregados por el usuario.
- Order ("/order"): Renderiza un formulario para generar una orden en la base de datos, al enviar el formulario si todos los campos están bien renderiza un cartel con el ID de la orden generada.