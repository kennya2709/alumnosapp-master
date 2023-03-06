//Configuracion de express para iniciar el servidor :D
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productosRoutes = require('./routes/productos.route');
const usersRoutes = require('./routes/users.route');
//Configuracion del puerto y la URI de la BD
const port = 5000;
const URI = "mongodb+srv://kennya-orona:cncowner1@cluster0.yywvdvd.mongodb.net/LuckyCondoms?retryWrites=true&w=majority"

//Respuesta del localhost en el navegador
app.get('/', (req, res) => {
    res.send("Hola Maeta 😬")
}) 

app.use(express.json())

mongoose.set("strictQuery", false)

//Respuesta de la confirmacion del URI en la consola
mongoose.connect(URI)
    .then(console.log('Base de Datos Conectada :D'))
    .catch((Error) => console.log(Error))
    

//Ruta en la que se muestran los datos de la BD
app.use("/productos", productosRoutes)
app.use("/users", usersRoutes)

app.listen(port, () => {
    console.log('listening on port', port);
}) 