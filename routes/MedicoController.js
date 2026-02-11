import { express } from 'node:express';
import MedicoService from '../services/MedicoService';

let router = express.Router();

router.get('/medico', async(req, res) => {
    try {
        const medico = await MedicoService.getAllMedico();
        res.send(medico);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/medico/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const medico = await MedicoService.getMedico(id);
        res.send(medico);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postMedico', async(req, res) => {
    const {data, name, login, password, especialidadeMedica, registroMedico, email, telefone} = req.body;
    try {
        const medico = await MedicoService.saveMedico({data, name, login, password, especialidadeMedica, registroMedico, email, telefone});
        res.send(medico);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/medico/:id', async(req, res) => {
    const {id} = req.params;
    const {data, name, login, password, especialidadeMedica, registroMedico, email, telefone} = req.body;
    try {
        const medico = await MedicoService.updateMedico(id, {data, name, login, password, especialidadeMedica, registroMedico, email, telefone});
        res.send(medico);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/medico/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const medico = await MedicoService.deleteMedico(id);
        res.send(medico);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router();