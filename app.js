const express = require ('express'); 
const app = express(); 
const path = require ('path');
const PORT = 3040

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`
))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/home.html')) 
} )