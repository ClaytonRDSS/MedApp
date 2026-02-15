import express  from 'express';
import ConsultaService from '../services/ConsultaService.js';


let router = express.Router();

router.get('/consulta', async(req, res) => {
    try {
        const consulta = await ConsultaService.getAllConsulta();
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getConsulta/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const consulta = await ConsultaService.getConsulta(id);
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postConsulta', async(req, res) => {
    const {date, medicoId, pacienteId} = req.body;
    try {
        const consulta = await ConsultaService.saveConsulta({date, medicoId, pacienteId});
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/consulta/:id', async(req, res) => {
    const {id} = req.params;
    const {date, medicoId, pacienteId} = req.body;
    try {
        const consulta = await ConsultaService.updateConsulta(id, {date, medicoId, pacienteId});
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/consulta/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const consulta = await ConsultaService.deleteConsulta(id);
        res.send(consulta);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;