import ConsultaRepository from "../repositories/ConsultaRepository";

const getAllConsulta = async () => {
    return ConsultaRepository.getAllConsulta(); 
}

const getConsulta = async (id) => {
    return ConsultaRepository.getConsulta(id); 
}

const saveConsulta = async ({data, medicoId, pacinteId}) => {
    return ConsultaRepository.saveConsulta({data, medicoId, pacinteId}); 
}

const updateConsulta = async (id, {data, medicoId, pacinteId}) => {
    return ConsultaRepository.updateConsulta(id, {data, medicoId, pacinteId}); 
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