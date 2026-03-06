import MedicoRepository from "../repositories/MedicoRepository.js";

const getAllMedico = async () => {
    return await MedicoRepository.getAllMedico(); 
}

const getMedico = async (id) => {
    return await MedicoRepository.getMedico(id); 
}

const saveMedico = async ({data, name, login, password, especialidadeMedica, registroMedico, email, telefone}) => {
    return await MedicoRepository.saveMedico({data, name, login, password, especialidadeMedica, registroMedico, email, telefone}); 
}

const updateMedico = async (id, {data, name, login, password, especialidadeMedica, registroMedico, email, telefone}) => {
    return await MedicoRepository.updateMedico(id, {data, name, login, password, especialidadeMedica, registroMedico, email, telefone}); 
}

const deleteMedico = async (id) => {
    return await MedicoRepository.deleteMedico(id); 
}

const getMedicoLogin = async (login) => {
    return await MedicoRepository.getMedicoLogin(login);
}
const medicoService = {
    getAllMedico,
    getMedico,
    saveMedico,
    updateMedico,
    deleteMedico,
    getMedicoLogin
}

export default medicoService;