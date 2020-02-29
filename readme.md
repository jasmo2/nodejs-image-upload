# Image Upload With NodeJS

Para NodeJS existe una librería que nos ayuda de forma que
podamos hacer carga de archivo a nuestro servidor cuando
mandemos nuestros archivos por POST en nuestro formulario.

##### 1º) Crearemos nuestro projecto normal de NodeJs

##### 2º) Agregemos la librería `yarn add multer` para la carga de imagenes

##### 3º) Configuremos el **Middleware** de carga de las imagenes `multer({ dest: 'uploads/' })`

##### 4º) Crear la ruta sobre la cual el formulario subirá el archivo en NodeJS

##### 5º) Crear el middleware el cual se le añadirá a nuestra ruta previamente creada, en este caso del ejemplo `/file-upload`

##### 6º) Crear vista del formulario que se encargará de subir archivo

###### 6-Aº) El formulario HTML puede o no llevar la `enctype="multipart/form-data"` que significa que la carga será más de un archivo a la vez.

---

Dentro de la carga de archivos usualmente se valida.

¿Pero qué se valida?

El tipo de archivo que los usuarios suben.

## Exercise 1º

Dar estilos a los formularios.
Pueden usar Bootstrap o Materilaze

[https://materializecss.com/](https://materializecss.com/)

## Exercise 2º

Crear una nueva ruta, en la cual se pueda cargar más de un archivo.

### HINT

[https://github.com/expressjs/multer#arrayfieldname-maxcount](https://github.com/expressjs/multer#arrayfieldname-maxcount)

En este enlace encontrarán la documentación oficial para crear el middleware y poder aceptar multiples archivos.

## Exercise 3º

Limitar la carga a maximo 3 archivos al tiempo.
