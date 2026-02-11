import PacienteRepository from '../repositories/PacienteRepository.js';

const getAllPaciente = async () => {
    return PacienteRepository.getAllPaciente(); 
}

const getPaciente = async (id) => {
    return PacienteRepository.getPaciente(id); 
}

const savePaciente = async ({data, name, dataNascimento, email, telefone}) => {
    return PacienteRepository.savePaciente({data, name, dataNascimento, email, telefone}); 
}

const updatePaciente = async (id, {data, name, dataNascimento, email, telefone}) => {
    return PacienteRepository.updatePaciente(id, {data, name, dataNascimento, email, telefone}); 
}

const deletePaciente = async (id) => {
    return MedicoRepository.deletePaciente(id); 
}
const pacienteService = {
    getAllPaciente,
    getPaciente,
    savePaciente,
    updatePaciente,
    deletePaciente
}

export default pacienteService;