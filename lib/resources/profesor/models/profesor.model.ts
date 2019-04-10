import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProfesorSchema = new Schema({
  createDate: {
    type: Date,
		default: Date.now
  },
  nombreProfesor: {
    type: String,
    required: 'Ingrese el nombre'
  },
  apellidoProfesor: {
    type: String,
    required: 'Ingrese el apellido'
  },
  dni: {
    type: String
  },
  legajo: {
    type: String
  },
  telefono: {
    type: String
  },
  direccion: {
    type: String
  },
  estado: {
    type: Boolean,
    default: true
  }
});