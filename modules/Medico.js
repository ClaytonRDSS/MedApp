import {mongoose} from 'mongoose';

const Schema = mongoose.Schema;

const medicoSchema = new Schema( {
    date: {
        type: Date,
        required: [true, "Os dados são necessários para o agendamento."]
    },
    name: {
        type: String,
        required: [true, "Os dados são necessários para o agendamento."]
    },
    login: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."],
         unique: true
    },
    password: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."]
    },
    especialidadeMedica: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."]
    },
    registroMedico: {
        type: String,
         required: [true, "Os dados são necessários para o agendamento."],
         unique: true
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

const medico = mongoose.model('Medico', medicoSchema);

export default medico;