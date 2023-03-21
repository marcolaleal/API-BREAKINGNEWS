import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import userService from '../services/user.service.js';

dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;
    
        if (!authorization) {
            res.status(400).send({ message: "Usuario nao altorizado" });
        }
    
        const parts = authorization.split(" ");
    
        if (parts.length !== 2) {
            return res.send(401);
        }
    
        const [schema, token] = parts;
    
    
        if (schema !== "Bearer") {
            return res.send(401);
        }
    
        jwt.verify(token,process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({message: "Token Invalido"});
            }
            const user = await userService.findById(decoded.id);
    
            if (!user || !user.id) {
                return res.status(401).send({message: "Token Invalido"});
            }
    
            req.userId = user._id;    
            
            return next();
        })

        
    } catch (error) {
        res.status(500).send({message: error.message});
    }

    
};
