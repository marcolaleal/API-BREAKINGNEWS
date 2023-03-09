

const create = (req,res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.json({message:"Submit all field for registration"});
    }

    res.json("OK");
};

export default { create };