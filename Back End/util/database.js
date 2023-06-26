const Sequelize=require('sequelize');

const DB=new Sequelize('project1','root','Password@123',{
    dialect :'mysql',
    host:'localhost'
})

module.exports=DB;