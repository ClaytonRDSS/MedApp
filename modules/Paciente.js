import { mongoose } from 'node:mongoose';

const Schema = mongoose.Schema;

const pacienteSchema = new Schema({
    name: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."]
    },
    dataNascimento: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."]
    },
    email: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."]
    },
    telefone: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const paciente = mongoose.model('Paciente', pacienteSchema);

export default paciente;

