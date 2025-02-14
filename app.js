//importar express y definir las dos rutas

const express = require('express');

const imageRoutes = require('./routes/image');
const tagRoutes = require('./routes/tag');

const app = express();
app.use(express.static('public'));

// Informamos que nuestro servidor va a utilizar el sistema de plantillas EJS
app.set('view engine', 'ejs');

//poder gestionar peticiones del tipo POST
app.use(express.urlencoded({ extended: false }));

//endpoints
// Todas las rutas a partir de ahora que esten dentro de imageRoutes, estarán prefijadas por la URL /images
// /images
// /images/nueva-imagen
app.use('/images', imageRoutes);
app.use('/tag', tagRoutes);

// Requisito 4 -A
// 1. Implementar los métodos para obtener todos los tags y añadir un nuevo tag a tags.json en models/tag.js
// 2. Implementar las rutas del POST del formulario y el controlador (basarse en image.js, es muy parecido)
// 3. Cuando insertemos una nueva etiqueta, podemos renderizar de nuevo al usuario a la vista del formulario de añadir etiqueta (y quizás un mensaje diciendo que la etiqueta se ha insertado correctamente en la BBDD?) 
// 4. Si lo habéis hecho bien, el fichero tags.json debería empezar a llenarse de objetos

// Corregir 16.30.


app.get('/', (req, res) => {
    res.redirect('/images');
})

app.get("/about", (req, res) => {
    res.render("about");

});




//parametro adicional de callback, esta funcion se ejecuta si todo ha ido bien
app.listen(3001, () => {
    console.log("Server funciona");
});



// enlazar el html del formulario ejs con boostrap