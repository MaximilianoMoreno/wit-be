import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Cursochema = new Schema({
  createDate: {
    type: Date,
		default: Date.now
  },
  nombreCurso: {
    type: String,
    required: 'Ingrese el nombre del curso'
  },
  codigoCurso: {
    type: String
  },
  descripcionCurso: {
    type: String
  },
  ubicacionCurso: {
    type: String
  },
  estadoCurso: {
    type: Boolean,
    default: true
  }
});