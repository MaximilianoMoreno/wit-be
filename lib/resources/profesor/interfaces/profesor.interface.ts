import * as moment from "moment";

export interface IProfesorInterface{
  createdDate: Date;
  nombre: string;
  apellido: string;
  dni: string;
  legajo: string;
  telefono: string;
  direccion: string;
  estado: boolean;
}