const express = require ('express');
const exphbs = require ('express-handlebars');
const PORT = 3333;

const conn = require ('./db/conn');
const Task = require('./models/Task');

//imprtar as rotas
const taskRoutes = require("./routes/taskRoutes")

const app = express()

//middlewares 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//ROTAS
app.use('/tasks', taskRoutes)

conn
.sync()
.then(()=> {
    app.listen(PORT);
})
.catch((err)=> console.log(err));

