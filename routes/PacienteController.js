import  express  from 'express';
import PacienteService from '../services/PacienteService.js';

let router = express.Router();
router.get('/paciente', async(req, res) => {
    try {
        const paciente = await PacienteService.getAllPaciente();
        res.send(paciente);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/paciente/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const paciente = await PacienteService.getPaciente(id);
        res.send(paciente);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postPaciente', async(req, res) => {
    const {data, name, dataNascimento, email, telefone} = req.body;
    try {
        const paciente = await PacienteService.savePaciente({data, name, dataNascimento, email, telefone});
        res.send(paciente);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/paciente/:id', async(req, res) => {
    const {id} = req.params;
    const {data, name, dataNascimento, email, telefone} = req.body;
    try {
        const paciente = await PacienteService.updatePaciente(id, {data, name, dataNascimento, email, telefone});
        res.send(paciente);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/paciente/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const paciente = await PacienteService.deletePaciente(id);
        res.send(paciente);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;