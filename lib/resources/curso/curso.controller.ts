import * as mongoose from 'mongoose';
import {ProfesorService} from "./profesor.service";
import {Cursochema} from "./models/curso.model";
import {Request, Response} from 'express';

const Curso = mongoose.model('Curso', Cursochema);

export class CursoController {

  /**
   * Get all Actions from db
   *
   * @param {Request} req
   * @param {Response} res
   *
   * @memberof ActionController
   */
  getAlCursos(req: Request, res: Response): void {

    Curso.find({}, (err, contact) => {
      if(err){
        res.send(err);
      }
      res.json(contact);
    });

  }

  getCursoById(req: Request, res: Response): void {

    Curso.findById(req.params.profesorId, (err, profesor) => {
            if(err){
                res.send(err);
            }
            res.json(profesor);
        });

  }

  updateCursoById(req: Request, res: Response): void {

      Curso.findOneAndUpdate({ _id: req.params.cursoId }, req.body, { new: true }, (err, profesor) => {
            if(err){
                res.send(err);
            }
            res.json(profesor);
        });
  }

  deleteCursoById(req: Request, res: Response): void {

    Curso.deleteOne({ _id: req.params.cursoId }).then((response) => {
          res.send(response);
        }).catch( (err: Error) => {
          res.send(err);
        });

  }

  createCurso(req: Request, res: Response) {

    let newCurso = new Curso(req.body);
    newCurso.save((err, profesor) => {
            if(err){
                res.send(err);
            }
            res.json(profesor);
        });

  }

}
