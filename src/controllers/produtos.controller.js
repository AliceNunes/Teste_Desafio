const Produto = require('../models/produto.model');

module.exports = {
    
    async index(req,res){
        const product = await Produto.find();
        res.json(product);
    },
    async create(req,res){
        const {produto, descricao, preco} = req.body;
        let data ={};
        let product = await Produto.findOne({produto});

    if(!product){
        data = {produto, descricao, preco};

        product = await Produto.create(data);
        return res.status(200).json(product);
    }else{
        return res.status(500).json(product);
    }
    }
}
