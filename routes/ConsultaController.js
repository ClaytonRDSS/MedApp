import { express } from 'node:express';
import ConcultaService from '../services/ConsultaService';


let router = express.Router();

router.get('/consulta', async(req, res) => {
    try {
        const consulta = await ConcultaService.getAllConsulta();
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/consulta/: id', async(req, res) => {
    const {id} = req.params;
    try {
        const consulta = await ConcultaService.getConsulta(id);
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postConsulta', async(req, res) => {
    const {data, medicoId, pacienteId} = req.body;
    try {
        const consulta = await ConcultaService.saveConsulta(data, medicoId, pacienteId);
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/consulta/:id', async(req, res) => {
    const {id} = req.params;
    const {data, medicoId, pacienteId} = req.body;
    try {
        const consulta = await ConcultaService.updateConsulta(id, {data, medicoId, pacienteId});
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/Consulta/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const consulta = await ConcultaService.deleteConsulta(id);
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router();