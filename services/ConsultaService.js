import ConsultaRepository from "../repositories/ConsultaRepository.js";

const getAllConsulta = async () => {
    return ConsultaRepository.getAllConsulta(); 
}

const getConsulta = async (id) => {
    return ConsultaRepository.getConsulta(id); 
}

const saveConsulta = async ({date, medicoId, pacienteId}) => {
    return ConsultaRepository.saveConsulta({date, medicoId, pacienteId}); 
}

const updateConsulta = async (id, {date, medicoId, pacienteId}) => {
    return ConsultaRepository.updateConsulta(id, {date, medicoId, pacienteId}); 
}

const deleteConsulta = async (id) => {
    return ConsultaRepository.deleteConsulta(id); 
}
const concultaService = {
    getAllConsulta,
    getConsulta,
    saveConsulta,
    updateConsulta,
    deleteConsulta
}

export default concultaService;