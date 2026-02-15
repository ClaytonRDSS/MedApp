import  express  from 'express';
import ReceitaService from '..//services/ReceitaService.js';



let router = express.Router();

router.get('/receita', async(req, res) => {
    try {
        const receita = await ReceitaService.getAllReceita();
        res.send(receita);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getReceita/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const receita = await ReceitaService.getReceita(id);
        res.send(receita);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postReceita', async(req, res) => {
    const {date, consultaId, medicamento, dosagemMedicamento, instrucoes} = req.body;
    try {
        const receita = await ReceitaService.saveReceita({date, consultaId, medicamento, dosagemMedicamento, instrucoes});
        res.send(receita);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/receita/:id', async(req, res) => {
    const {id} = req.params;
    const {date, consultaId, medicamento, dosagemMedicamento, instrucoes} = req.body;
    try {
        const receita = await ReceitaService.updateReceita(id, {date, consultaId, medicamento, dosagemMedicamento, instrucoes});
        res.send(receita);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/receita/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const receita = await ReceitaService.deleteReceita(id);
        res.send(receita);
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;