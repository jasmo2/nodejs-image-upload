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
