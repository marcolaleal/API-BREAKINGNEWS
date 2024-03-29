import {createService, findAllService} from '../services/news.service.js';

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
            user: req.userId,
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
