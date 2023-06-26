const sequelize=require('../util/database')

const Sequelize=require('sequelize')

const Product=sequelize.define('productforadmin',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false,
    }, 
    type:{
        type:Sequelize.STRING,
        allowNull:false,
    },
})

module.exports=Product;