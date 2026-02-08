import {mongoose} from 'node:mongoose';

const Schema = mongoose.Schema;

const consultaSchema = new Schema( {
    date: {
        type: Date,
        required: [true, "Os dados são necessários para o agendamento."]
    },
    medicoId: {
        type: String,
        required: [true, "Os dados são necessários para o agendamento."] 
    },
    pacienteId: {
        type: String,
        required: [true, "Os dados são necessários para o agendamento."]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const consulta = mongoose.model('Consulta', consultaSchema);

export default consulta;