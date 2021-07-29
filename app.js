const express = require ("express") ;
const path = require ("path") ;

const app = express () ;
const publicPath = path.resolve (__dirname, "./public") ;
app.use (express.static(publicPath)) ;

app.listen (3000 , () => {console.log("El servidor se esta ejecutando en http://localhost:3000");} ) ;

app.get ("/", (req,res) => {
    res.send ("Hola mundo") ;
})

app.get ("/home" , (req,res) => {
    res.sendFile (path.join(__dirname, "/views/home.html")) ;
})

app.get ("/register" , (req,res) => {
    res.sendFile (path.join(__dirname, "/views/register.html")) ;
})


app.get ("/login" , (req,res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
})