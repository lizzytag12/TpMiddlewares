const path = require('path');
const fs = require('fs'); // requiero un modulo que me permita manipular archivos-

// el usuario ha ingresa a la ruta : _________

/**
 * It appends a string to a file.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to move on to the next middleware.
 */
const userLogs = (req,res,next)=>{
     // apenFileSync = metodo que agrega algo dentro de un archivo. con path le indico donde agregar lo que necesito-
    fs.appendFileSync(path.resolve(__dirname , '..', 'logs', 'userLogs.txt'), // <= donde lo quiero guardar
    "el usuario ingreso a la ruta") // <= lo que quiero agregar en el archivo


}

module.exports = userLogs 