import {mongoose} from 'mongoose';

const Schema = mongoose.Schema;

const consultaSchema = new Schema( {
    date: {
        type: Date,
        required: [true, "Os dados são necessários para o agendamento."]
    },
    medicoId: {
        type: String,
        required: [true, "Os dados são necessários para o agendamento."],
        validate: {
            validator: function(v) {
                //Convertendo uma string que vai ser devolvida pela requisição em um Objeto ID para ser encontrado no banco.
                const id = new mongoose.Types.ObjectId(v);
                return Medico.exists({_id: id});
            },
            message: props => `Id do Medico ${props.value} não encontrado`
        } 
    },
    pacienteId: {
        type: String,
        required: [true, "Os dados são necessários para o agendamento."],
         validate: {
            validator: function(v) {
                //Convertendo uma string que vai ser devolvida pela requisição em um Objeto ID para ser encontrado no banco.
                const id = new mongoose.Types.ObjectId(v);
                return Paciente.exists({_id: id});
            },
            message: props => `Id do Paciente ${props.value} não encontrado`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const consulta = mongoose.model('Consulta', consultaSchema);

export default consulta;