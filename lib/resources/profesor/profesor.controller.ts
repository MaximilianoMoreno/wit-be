import * as mongoose from 'mongoose';
import {ProfesorService} from "./profesor.service";
import {ProfesorSchema} from "./models/profesor.model";
import {Request, Response} from 'express';

const Profesor = mongoose.model('Profesor', ProfesorSchema);

export class ProfesorController {

  /**
   * Get all Actions from db
   *
   * @param {Request} req
   * @param {Response} res
   *
   * @memberof ActionController
   */
  getAllProfesors(req: Request, res: Response): void {
      // ProfesorService.getAll()
      //   .then((profesores: Array<Profesor>) => {
      //     res.send( profesores);
      //   }).catch((err: Error) => {
      //     res.send(err);
      //   });
    Profesor.find({}, (err, contact) => {
      if(err){
        res.send(err);
      }
      res.json(contact);
    });

  }

  getProfesorById(req: Request, res: Response): void {
      // ProfesorService.getById(req.params.profesorId)
      //   .then((profesor: IProfesorInterface) => {
      //     res.send( profesor);
      //   }).catch((err: Error) => {
      //     res.send(err);
      //   });
    Profesor.findById(req.params.profesorId, (err, profesor) => {
            if(err){
                res.send(err);
            }
            res.json(profesor);
        });

  }

  updateProfesorById(req: Request, res: Response): void {
      // ProfesorService.updateById(req.params.profesorId, req.body)
      //   .then((profesor: Profe) => {
      //     res.send( profesor);
      //   }).catch((err: Error) => {
      //     res.send(err);
      //   });
      Profesor.findOneAndUpdate({ _id: req.params.profesorId }, req.body, { new: true }, (err, profesor) => {
            if(err){
                res.send(err);
            }
            res.json(profesor);
        });
  }

  deleteProfesorById(req: Request, res: Response): void {
      // ProfesorService.remove(req.params.profesorId)
      //   .then((respone) => {
      //     res.send(respone);
      //   }).catch( (err: Error) => {
      //     res.send(err);
      //   });
    Profesor.deleteOne({ _id: req.params.profesorId }).then((response) => {
          res.send(response);
        }).catch( (err: Error) => {
          res.send(err);
        });

  }

  createProfesor(req: Request, res: Response) {
    // ProfesorService.createCurso(req.body)
    //     .then( (profesor: Profesor) => {
    //       res.send(profesor);
    //     }).catch( (err: Error) => {
    //       res.send(err);
    //     })
    let newProfesor = new Profesor(req.body);
    newProfesor.save((err, profesor) => {
            if(err){
                res.send(err);
            }
            res.json(profesor);
        });

  }




}
