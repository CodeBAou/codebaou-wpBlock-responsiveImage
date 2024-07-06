# Block Gutenberg  - Imagen Responsiva  -  WORDPRESS
Este es un bloque de gutemberg wordpress, se inserta como plugin, es un bloque de imagen pero que utiliza las etiquetas source para cargar la imagen con el 
tamaño correcto dependiendo del ancho de pantalla del dispositivo.

```
 (max-width: 450px )  - thumbnail
 (max-width: 550px )  - medium
 (max-width: 1024px)  - large
 (min-width: 1025px)  - full
 ```
!["imagen captura de la web"]([https://i.pinimg.com/736x/f0/e1/6f/f0e16f24b3ee82afd7b8abcc57214d89.jpg](https://i.pinimg.com/736x/31/c3/46/31c3463cbfe9743ee75184871d3537e1.jpg))

Por alguna razón me fallaba srcset y sizes, no siempre el navegador elegía el tamaño correcto por esa razón decidi crear este bloque simple.
