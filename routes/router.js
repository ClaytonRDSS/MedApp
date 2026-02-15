import  express  from 'express';

//importando os Controlles para o arquivo de rodas para costruir as rotas 
import consultaController from './ConsultaController.js';
import medicoController from './MedicoController.js';
import pacienteController from './PacienteController.js';
import receitaController from './Receita.Controller.js';


const router = express.Router();

router.get("/", function(req, res) {
    console.log("Oi!");
    res.status(200).json({message: "Oi!"});
});

router.use('/', consultaController);
router.use('/', medicoController);
router.use('/', pacienteController);
router.use('/', receitaController);


export default router;