import { autor } from "../models/Autor.js";

class AutorController {


    static async buscarAutores(req, res) {
        try {
            const autores = await autor.find({});
            res.status(200).json(autores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao buscar autores` })
        }
    }

    static async buscarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao buscar autor por id` })
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao cadastrar autor` })
        }
    }

    static async deletarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(204).json({ message: "Autor deletado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao deletar autor` })
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao atualizar autor` });
        }
    }

}
export default AutorController;