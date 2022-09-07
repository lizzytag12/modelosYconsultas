// exporto una funcion que contiene el modelo
module.exports= (sequelize,dataTypes)=>{

    const alias = "Genre"

    // segun el diagrama defino las columnas y sus propiedades.
    const cols = {

        id:{
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        name:{
            type : dataTypes.STRING(100),
            allowNull: false,
           
        },
        ranking:{
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
            unique: true
        },
       active:{
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    }

    const config = {
        tableName : "genres",// defino el nombre de la tabla no empieza con minuscula, buena practica para Linux
       
        underscored : true
    }

    const Genre = sequelize.define(alias,cols,config);
    return Genre
}
