import {createService, findAllService} from '../services/news.service.js';
import { ObjectId } from 'mongoose';

const create = async (req,res) => {
    try {
        const { title, text, banner } = req.body;
        
        if(!title || !text || !banner) {
            res.status(400).send({message: "Envie todos os campos para publicar uma Noticia"});    
        }

        await createService({
            title,
            text,
            banner,
            user: {_id: "6414335b243b8db2aa3e3d46"},
        });
        
        res.send(201);

    } catch (error) {
        res.status(500).send({message: error.message});
    }


};

const findAll = async (req,res) => {
    const news = await findAllService();

    if (news.length === 0) {
        return res.status(400).send({message: "Não há usuarios cadastrados"})
    }

    res.send(news);
};

export { create, findAll};
