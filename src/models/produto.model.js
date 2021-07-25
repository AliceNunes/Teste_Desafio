const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    produto: String,
    descricao: String,
    preco: Number
},{
    timestamps:true
});

const produtos = mongoose.model('Produtos', DataSchema);
module.exports = produtos;