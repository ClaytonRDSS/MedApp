import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const receitaSchema = new Schema({
    date : {
        type: Date,
         required: [true, "Os dados são necessários para o agendamento."]
    },
    consultaId: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."]
    },
    medicamento: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."]
    },
    dosagemMedicamento: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."]
    }, 
    instrucoes: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const receita = mongoose.model('Receita', receitaSchema);

export default receita;