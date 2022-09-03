const path = require('path');
const fs = require('fs'); // requiero un modulo que me permita manipular archivos-

// el usuario ha ingresa a la ruta : _________

const userLogs = (req,res,next)=>{
   /*  console.log(req.url); */ // <= usando el "req" rescato la ruta 
     // apenFileSync = metodo que agrega algo dentro de un archivo. con path le indico donde agregar lo que necesito-
    fs.appendFileSync(path.resolve(__dirname , '..', 'logs', 'userLogs.txt'), // <= donde lo quiero guardar
    "el usuario ingreso a la ruta"+ req.url + '\n'  
    ) // <= lo que quiero agregar en el archivo
    next() // metodo que me permite seguir

}

module.exports = userLogs 