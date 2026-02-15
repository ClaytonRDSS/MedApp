import ReceitaRepository from "../repositories/ReceitaRepository.js";

const getAllReceita = async () => {
    return ReceitaRepository.getAllReceita(); 
}

const getReceita = async (id) => {
    return ReceitaRepository.getReceita(id); 
}

const saveReceita = async ({date, consultaId, medicamento, dosagemMedicamento, instrucoes}) => {
    return ReceitaRepository.saveReceita({date, consultaId, medicamento, dosagemMedicamento, instrucoes}); 
}

const updateReceita = async (id, {date, consultaId, medicamento, dosagemMedicamento, instrucoes}) => {
    return ReceitaRepository.updateReceita(id, {date, consultaId, medicamento, dosagemMedicamento, instrucoes}); 
}

const deleteReceita = async (id) => {
    return ReceitaRepository.deleteReceita(id); 
}
const receitaService = {
    getAllReceita,
    getReceita,
    saveReceita,
    updateReceita,
    deleteReceita
}

export default receitaService;