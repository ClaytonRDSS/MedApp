import  Paciente  from '../modules/Paciente.js'

const getAllPaciente = async () => {
    return await Paciente.find();
}

const getPaciente = async (id) => {
    try{
        return await Paciente.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const savePaciente = async ({name, dataNascimento, email, telefone}) => {
    try{
        const paciente = new Paciente({name, dataNascimento, email, telefone});
        return await paciente.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updatePaciente = async (id, {name, dataNascimento, email, telefone}) => {
    try {
        return await Paciente.findByIdAndUpdate(id, {name, dataNascimento, email, telefone}, {new: true});
    } catch (error) {
        throw new Error(error);
        
    }
}

const deletePaciente = async (id) => {
    try{
        return await Paciente.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const pacienteRepository = {
    getAllPaciente,
    getPaciente,
    savePaciente,
    updatePaciente,
    deletePaciente
}
export default pacienteRepository;