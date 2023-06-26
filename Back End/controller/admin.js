const Product=require('../model/product');



exports.get=(req,res,next)=>{
    Product.findAll()
    .then((products)=>{res.send(products)})
    .catch(err=>{console.log(err)})
}

exports.add=(req,res,next)=>{
    const obj=req.body
    Product.create({
    price:obj.price,
    type:obj.type,
    name:obj.name,
})
.then(()=>{return res.end()})
.catch(err=>{console.log(err)})
}

exports.delete=(req,res,next)=>{
    const id=req.params.id;
    Product.findByPk(id)
    .then((product)=>{
        return product.destroy()

        })
        .then(()=>{ return res.end()})
        .catch(err=>{console.log(err)})
    .catch(err=>{console.log(err)})
}