# Block Gutenberg  - Imagen Responsiva  -  WORDPRESS
Este es un bloque de gutemberg wordpress, se inserta como plugin, es un bloque de imagen pero que utiliza las etiquetas source para cargar la imagen con el 
tamaño correcto dependiendo del ancho de pantalla del dispositivo.

```
 (max-width: 450px )  - thumbnail
 (max-width: 550px )  - medium
 (max-width: 1024px)  - large
 (min-width: 1025px)  - full
 ```
!["imagen captura de la web"](https://i.pinimg.com/736x/31/c3/46/31c3463cbfe9743ee75184871d3537e1.jpg)

Por alguna razón me fallaba srcset y sizes, no siempre el navegador elegía el tamaño correcto por esa razón decidi crear este bloque simple.

## Instalación 

1. Pegar la carpeta en /wp-content/plugins/codebaou-wpBlock-responsiveImage
2. Compilar
   	```
    npm run build
    ```   
4. Activar Plugin
    !["imagen activar plugin"](https://i.pinimg.com/originals/bd/5e/15/bd5e15468e27f8a67b24a73a11c054ea.png)
   
7. Seleccionar bloque desde el editor de gutenberg
![imagen se muestra el bloque en el editor](https://i.pinimg.com/originals/97/02/fa/9702fac76be7f24a435fc6666ec635d0.png)


