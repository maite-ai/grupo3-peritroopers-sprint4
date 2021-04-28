const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");

const publicPatch = path.resolve(__dirname, "./public");

app.use(express.static(publicPatch));

app.set('view engine', 'ejs');

//Le indicamos a express el requerimiento de rutas
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

app.use('/', userRouter);

app.use('/', homeRouter);

app.use('/', productRouter);

app.listen(port || 3030, () => {
    console.log("El servidor está corriendo con éxito");
});