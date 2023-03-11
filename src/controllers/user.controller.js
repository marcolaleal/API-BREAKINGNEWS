import userService from "../services/user.service.js";


const create = async (req,res) => {
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
};

export default { create };