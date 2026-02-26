import { mongoose } from 'mongoose';

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
         required: [true, "Os dados são necessários para o agendamento."],
         validate: {
            validator: function(v) {
                //Regex/expreção regular = usado para alidar capos que possuam caracteres diversos como número, pontos e traços.
                return /\d{2} 9\d{4}-\d{4}/.test(v);
            },
            message: props => `${props.value} Não é um número de telefone válido. Favor informar o número de telefone no formato 99 91234-5678.`
         }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const paciente = mongoose.model('Paciente', pacienteSchema);

export default paciente;

