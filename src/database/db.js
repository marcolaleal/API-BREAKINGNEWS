import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Conectando ao banco de dados...");

    mongoose.connect(
        "mongodb+srv://root:root@breackingnews.xtinu1r.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Conectado com Sucesso!"))
    .catch((err) => console.log(err));
};

export default connectDatabase;