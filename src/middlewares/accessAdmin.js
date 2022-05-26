const admins= ["greta", "ada", "vin", "tim"];

const accessAdmin = (req, res, next)=>{
    if (!req.query.user){ // sino mandamos un usuario, lo redirijo a login
        return res.redirect('/login')
    }
    // si en el array incluye lo que me viene por el formulario, 
    if(admins.includes(req.query.user.toLowerCase())){
        next()
    }
    return res.redirect('/noEntry') // sino redirigir a la vista de acceso restringido
}

module.exports= accessAdmin