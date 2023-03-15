import userService from "../services/user.service.js";


const create = async (req,res) => {
    try {
        const {name, username, email, password, avatar, background} = req.body;
    
        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).json({message:"Submit all field for registration"});
        }
    
        const user = await userService.create(req.body);
    
        if (!user){
            res.status(400).json({message:"Error creating User"});
        }
    
        res.status(201).send({
            message: "User created successfuly",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
                background
        }});    
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

const findAll = async (req,res) => {
    const users = await userService.findAll();

    if (users.length === 0) {
        return res.status(400).send({message: "Não há usuarios cadastrados"})
    }

    res.send(users);
};

const findById = async (req,res) => {
    const user = req.user
    res.send(user);
};

const update = async (req,res) => {
    const {name, username, email, password, avatar, background} = req.body;
    

    if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).json({message:"Submit at least one field for update"});
    }

    const id = req.id;

    await userService.update(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    )

    res.send({message: "Usuario atualizado com sucesso"})


};

export default { 
    create, 
    findAll,
    findById,
    update,
};