
const { Op } = require('sequelize');
const { sequelize } = require('../database/models');
const db = require('../database/models'); // traigo todos los modelos
const Movie = require('../database/models/Movie');

module.exports = {

    list:(req,res)=>{ // creo el metodo listar

        db.Movie.findAll()  // traigo todas las peliculas de la tabla peliculas
        .then(movies=>{
           // return res.send(movies) // compruebo que me traiga las peliculas
           return res.render('moviesList',{ //renderizo la vista y mando las peliculas
            movies
           })
        })
        .catch(error=>console.log(error)) // capturo los errores 
    },
    detail: (req,res)=>{ // creo el metodo detalle

        db.Movie.findByPk(req.params.id) // de modelos eligo el modelo movie y encuentro el id que que coincida con el q viene por url
        .then(movie=>{
            return res.render('moviesDetail',{ // renderizo la vista detalle cuando obtenga la informacion con la respectiva pelicula
                movie
            })
        })
        .catch(error=>console.log(error)) //capturo los errores
    },
    new : (req,res)=>{

        db.Movie.findAll({
           order: [
            ['release_date', 'DESC']
         ],
         limit: 5
        })
        .then(movies=> res.render('newestMovies',{
            movies
        }))
        .catch(error=>console.log(error))
    },
    recomended :(req,res)=>{


       /*  db.Movie.findAll({

            where: {
                rating:{
                   [Op.gte] : 9
                }
            }
        }) */
        db.Movie.findAll({
           /* A way to filter the data. */
            where : {
                [Op.and] : [
                    {

                      /* Filtering the data. */
                       rating: {

                            /* mayor o igual a . */
                            [Op.gte] : 9
                       }
                    },
                    {
                        awards :{
                             
                            /* mayor a . */
                            [Op.gt] : 3
                        }

                    }
                ]
            },
           /* Ordering the movies by rating and awards. */
            order :[
                ['rating', 'DESC'],
                [ 'awards', 'DESC']
            ]
        })
        .then(movies=> res.render('recommendedMovies',{
            movies
        }))
        .catch(error=>console.log(error))
    }
}