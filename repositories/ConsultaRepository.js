import Consulta  from '../modules/Consulta.js';

const getAllConsulta = async () => {
    return await Consulta.find();
}

const getConsulta = async (id) => {
    try{
        return await Consulta.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveConsulta = async ({date, medicoId, pacienteId}) => {
    try{
        const consulta = new Consulta({date, medicoId, pacienteId});
        return await consulta.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateConsulta = async (id, {date, medicoId, pacienteId}) => {
    try {
        return await Consulta.findByIdAndUpdate(id, {date, medicoId, pacienteId}, {new: true});
    } catch (error) {
        throw new Error(error);
        
    }
}

const deleteConsulta = async (id) => {
    try{
        return await Consulta.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const consultaRepository = {
    getAllConsulta,
    getConsulta,
    saveConsulta,
    updateConsulta,
    deleteConsulta
}

export default consultaRepository;