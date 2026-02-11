import MedicoRepository from "../repositories/MedicoRepositoryRepository";

const getAllMedico = async () => {
    return MedicoRepository.getAllMedico(); 
}

const getMedico = async (id) => {
    return MedicoRepository.getMedico(id); 
}

const saveMedico = async ({data, name, login, password, especialidadeMedica, registroMedico, email, telefone}) => {
    return MedicoRepository.saveMedico({data, name, login, password, especialidadeMedica, registroMedico, email, telefone}); 
}

const updateMedico = async (id, {data, name, login, password, especialidadeMedica, registroMedico, email, telefone}) => {
    return MedicoRepository.updateMedico(id, {data, name, login, password, especialidadeMedica, registroMedico, email, telefone}); 
}

const deleteMedico = async (id) => {
    return MedicoRepository.deleteMedico(id); 
}
const concultaService = {
    getAllMedico,
    getMedico,
    saveMedico,
    updateMedico,
    deleteMedico
}

export default MedicoService;