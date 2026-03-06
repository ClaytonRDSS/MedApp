import jwt from 'jsonwebtoken';

function veficarToken(req, res, next) {
    const token = req.header('Authorization');
    if(!token) {
        return res.status(401).json({error: 'Acesso negado'});
    }
    try {
        const decodificado = jwt.verify(token, 'Sua-chave-secreta');
        req.medicoId = decodificado.medicoId;
        next();
    }catch (error){
        res.status(401).json({error: 'Token Invalido'});
    }
};

export default veficarToken;