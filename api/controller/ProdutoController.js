const database = require('../models/produtos');

class ProdutosController {
    static async pegaTodosProdutos(req, res) {
        try {
        const todosProdutos = await database.Produtos.findAll();
        return res.status(200).json(todosProdutos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmProduto(req, res){
        const { id } = req.params;
        try {
        const umProduto = await database.Produtos.findOne({ where: { id: Number(id) }});
        return res.status(200).json(umProduto);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async criaProduto(req, res){
        const novoProduto = req.params;
        try {
        const novoProdutoCriado = await database.Produtos.create(novoProduto)
        return res.status(200).json(novoProdutoCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaProduto(req, res){
        const novasInfos = req.params;
        const { id } = req.params;
        try {
            await database.Produtos.update(novasInfos, { where: { id: Number(id) }});
            const produtoAtualizado = await database.Produtos.findOne({ where: { id: Number(id) }});
            res.status(200).json(produtoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async deletaProduto(req, res){
        const { id } = req.params;
        try {
            await database.Produtos.destroy( { where: { id: Number(id) }});
            res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


}

module.exports = ProdutosController;