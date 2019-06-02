import * as mongoose from 'mongoose';
import {ICursoInterface} from "./interfaces/curso.interface";
import {Cursochema} from "./models/curso.model";

const  Curso = mongoose.model('Curso', Cursochema);

export class ProfesorService {

  // static getAll(): Promise <Array<IHorarioInterface>> {
  //   return Profesor.find({});
  // }
  //
  // static getById(profesorId: string):Promise<IHorarioInterface> {
  //   return Profesor.findById(profesorId);
  // }
  //
  // static updateById(profesorId: string, body: IHorarioInterface):Promise<IHorarioInterface> {
  //   return Profesor.findOneAndUpdate({_id: profesorId}, body);
  // }
  //
  // static remove(profesorId: string):Promise<IHorarioInterface> {
  //   return Profesor.remove({_id: profesorId})
  // }
  //
  // static createCurso(profesorData: IHorarioInterface): Promise<IHorarioInterface> {
  //   profesorData.createdDate = new Date();
  //   return Profesor.create(profesorData);
  // }

}