// exporto una funcion que contiene el modelo
module.exports= (sequelize,dataTypes)=>{

    const alias = "Movie"

    // segun el diagrama defino las columnas y sus propiedades.
    const cols = {

        id:{
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        title:{
            type : dataTypes.STRING(500),
            allowNull:false,
        },
        rating :{
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull:false
        },
        awards :{
            type :dataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            defaultValue:0
        },
        release_date :{

            type : dataTypes.DATE,
            allowNull : false
        },
        length:{
            type: dataTypes.INTEGER,
            allowNull:true
        },
        genre_id:{
            type: dataTypes.INTEGER,
            allowNull:true
        }
    }

    const config = {
        tableName : "movies",// defino el nombre de la tabla no empieza con minuscula, buena practica para Linux
        timestamps : true,  // si la tabla tiene marcas de tiempo no es necesario
        underscored: true // el nombre de los timestams estan hechos con "_"
    }

    const Movie = sequelize.define(alias,cols,config);
    return Movie
}
