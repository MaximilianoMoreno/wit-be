import * as mongoose from 'mongoose';
import {IProfesorInterface} from "./interfaces/profesor.interface";
import {ProfesorSchema} from "./models/profesor.model";

const  Profesor = mongoose.model('Profesor', ProfesorSchema);

export class ProfesorService {

  // static getAll(): Promise <Array<IProfesorInterface>> {
  //   return Profesor.find({});
  // }
  //
  // static getById(profesorId: string):Promise<IProfesorInterface> {
  //   return Profesor.findById(profesorId);
  // }
  //
  // static updateById(profesorId: string, body: IProfesorInterface):Promise<IProfesorInterface> {
  //   return Profesor.findOneAndUpdate({_id: profesorId}, body);
  // }
  //
  // static remove(profesorId: string):Promise<IProfesorInterface> {
  //   return Profesor.remove({_id: profesorId})
  // }
  //
  // static createCurso(profesorData: IProfesorInterface): Promise<IProfesorInterface> {
  //   profesorData.createdDate = new Date();
  //   return Profesor.create(profesorData);
  // }

}