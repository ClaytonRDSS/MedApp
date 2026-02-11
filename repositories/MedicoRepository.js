import { Medico } from '../modules/Medico.js';

const getAllMedico = async () => {
    return await Medico.find();
}

const getMedico = async (id) => {
    try{
        return await Medico.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveMedico = async ({data, name, login, password, especialidadeMedica, registroMedico, email, telefone}) => {
    try{
        const medico = new Medico({data, name, login, password, especialidadeMedica, registroMedico, email, telefone});
        return await medico.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateMedico = async (id, {data, name, login, password, especialidadeMedica, registroMedico, email, telefone}) => {
    try {
        return await Medico.findByIdAndUpdate(id, {data, name, login, password, especialidadeMedica, registroMedico, email, telefone}, {new: true});
    } catch (error) {
        throw new Error(error);
        
    }
}

const deleteMedico = async (id) => {
    try{
        return await Medico.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const medicoRepository = {
    getAllMedico,
    getMedico,
    saveMedico,
    updateMedico,
    deleteMedico
}

export default medicoRepository;