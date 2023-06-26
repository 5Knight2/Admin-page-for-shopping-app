const express=require('express');
const parser=require('body-parser');
var cors=require('cors');
const Sequelize=require('sequelize')

const router_admin=require('./routers/admin')
const sequelize=require('./util/database')

const app=express();

app.use(parser.json());
app.use(cors());



app.use(router_admin);

sequelize
//.sync({force:true})
.sync()
.then((result)=>{console.log('connected to database')
    app.listen(8000);
})
.catch((err)=>{console.log(err)})




