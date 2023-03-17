import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Conectando ao banco de dados...");

    mongoose.connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Conectado com Sucesso!"))
    .catch((err) => console.log(err));
};

export default connectDatabase;