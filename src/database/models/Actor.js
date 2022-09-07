// exporto una funcion que contiene el modelo
module.exports= (sequelize,dataTypes)=>{

    const alias = "Actor"

    // segun el diagrama defino las columnas y sus propiedades.
    const cols = {

        id:{
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        first_name:{
            type : dataTypes.STRING(100),
            allowNull:false,
        },
       last_name :{
            type : dataTypes.STRING(100),
            allowNull:false,    
        },
        rating:{
            type :dataTypes.DECIMAL(3,1)
         
        },
        favorite_movie_id :{

            type : dataTypes.INTEGER.UNSIGNED,
            
        }
        
    }

    const config = {
        tableName : "actors",// defino el nombre de la tabla no empieza con minuscula, buena practica para Linux
        timestamps : true,  // si la tabla tiene marcas de tiempo no es necesario
        underscored: true // el nombre de los timestams estan hechos con "_"
    }

    const Actor = sequelize.define(alias,cols,config);
    return Actor
}
