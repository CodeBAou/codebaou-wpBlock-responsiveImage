# Block Gutenberg  - Imagen Responsiva  -  WORDPRESS
Este es un bloque de gutemberg wordpress, se inserta como plugin, es un bloque de imagen pero que utiliza las etiquetas source para cargar la imagen con el 
tamaño correcto dependiendo del ancho de pantalla del dispositivo.

```
 (max-width: 450px )  - thumbnail
 (max-width: 550px )  - medium
 (max-width: 1024px)  - large
 (min-width: 1025px)  - full
 ``

 ![Imagen se muestra como se cargan todos los tamaños de imagen a medida que se reduce el ancho de la página](https://www.pinterest.es/6f89197e-4334-420b-9bf6-7066d7ed9e76)

Por alguna razón me fallaba srcset y sizes, no siempre el navegador elegía el tamaño correcto por esa razón decidi crear este bloque simple.
