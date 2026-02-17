import  Receita  from '../modules/Receita.js';

const getAllReceita = async () => {
    return await Receita.find();
}

const getReceita = async (id) => {
    try{
        return await Receita.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveReceita = async ({date, consultaId, medicamento, dosagemMedicamento, instrucoes}) => {
    try{
        const receita = new Receita({date, consultaId, medicamento, dosagemMedicamento, instrucoes});
        return await receita.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateReceita = async (id, {date, consultaId, medicamento, dosagemMedicamento, instrucoes}) => {
    try {
        return await Receita.findByIdAndUpdate(id, {date, consultaId, medicamento, dosagemMedicamento, instrucoes}, {new: true});
    } catch (error) {
        throw new Error(error);
        
    }
}

const deleteReceita = async (id) => {
    try{
        return await Receita.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const receitaRepository = {
    getAllReceita,
    getReceita,
    saveReceita,
    updateReceita,
    deleteReceita
}
export default receitaRepository;