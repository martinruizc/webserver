const express = require('express')
require('dotenv').config()
const app = express()
const hbs = require('hbs');
const port = process.env.PORT


// Handlebar
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



//Servir Contenido estático
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Martín',
        titulo: 'Curso de Node'

    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Martín',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Martín',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) => {
    res.send('404 | Not found')
})

app.listen(port, () =>{
    console.log(`The server is running on port ${port}`);
})