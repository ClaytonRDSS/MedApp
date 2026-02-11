import { express } from 'node:express';

//importando os Controlles para o arquivo de rodas para costruir as rotas 
import consultaController from './ConsultaController.js';
import medicoController from './MedicoController.js';
import pacienteController from './PacienteController.js';
import receitaController from './Receita.Controller.js';


let router = express.Router();

router.get("/", function(req, res) {
    console.log("Oi!");
    res.status(200).jason({message: "Oi!"});
});

router.use('/', consultaController);
router.use('/', medicoController);
router.use('/', pacienteController);
router.use('/', receitaController);


export default router;