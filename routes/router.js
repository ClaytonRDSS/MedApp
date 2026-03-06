import  express  from 'express';

//importando os Controlles para o arquivo de rodas para costruir as rotas 
import consultaController from './ConsultaController.js';
import medicoController from './MedicoController.js';
import pacienteController from './PacienteController.js';
import receitaController from './Receita.Controller.js';
import medicoService from '../services/MedicoService.js';
import bcrypt from 'bcrypt'
import veficarToken from '../middleware/authMiddleware.js';

import jwt from 'jsonwebtoken';


const router = express.Router();

router.get("/", function(req, res) {
    console.log("Oi!");
    res.status(200).json({message: "Oi!"});
});


// Mapeamento de Login
router.post('/login', async(req, res) => {
    try{
        const { login, password } = req.body;

        const medico = await medicoService.getMedicoLogin(login);
        if(!medico) {
            return res.status(401).json({error: 'Falha na Autenticação'});
        }

        const passwordCorresponde = await bcrypt.compare(password, medico.password);
        if(!passwordCorresponde) {
            return res.status(401).json({error: 'Falha na Autenticação'})
        }

        const token = jwt.sign({medicoId: medico._id}, 'Sua-Chave-Secreta', {
            expiresIn: '1h', 
        });
        res.status(200).json({token})

    }catch(error) {
        console.log(error);
        res.status(500).json({error: 'Falha no Login'});
    }
})


router.use('/', veficarToken, consultaController);
router.use('/', veficarToken, medicoController);
router.use('/', veficarToken, pacienteController);
router.use('/', veficarToken, receitaController);


export default router;