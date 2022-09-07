const db = require('../database/models');

module.exports = {

    list: (req,res)=>{

        db.Actor.findAll({
            order : [
                ['first_name', 'ASC']
            ]
        }) // traigo todos los actores del modelo Actor
        //.then(actors=> res.send(actors)) // verifico la informacion 
        .then(actors=> res.render('actorsList',{
            actors
        }))
        .catch(error=>console.log(error)) // capturo errores en caso de haberlos y los muestro por consola
    },
    detail:(req,res)=>{
      db.Actor.findByPk(req.params.id)
      .then(actor=>{
        return res.render('actorDetail',{
            actor
        })

      })

    }
}