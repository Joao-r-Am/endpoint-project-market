const database = require('../models');

class UsuariosController {
    static async achaUsuarios(req,res) {
        const { id } = req.params;
        try {
            const comprador30 =  await database.Produtos.findOne({nome, preco, createdAt, where: { id: Number(id) }});
            if(nome === 'Leite' && preco >= 30){
                res.status(200).json(comprador30);
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

