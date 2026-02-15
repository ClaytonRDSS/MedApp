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

const saveConsulta = async ({data, medicoId, pacinteId}) => {
    try{
        const receita = new Consulta({data, medicoId, pacinteId});
        return await receita.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateConsulta = async (id, {data, medicoId, pacinteId}) => {
    try {
        return await Consulta.findByIdAndUpdate(id, {data, medicoId, pacinteId}, {new: true});
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