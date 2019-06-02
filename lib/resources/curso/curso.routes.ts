import { CursoController } from './curso.controller';

let cursoController: CursoController = new CursoController();

export class CursoRoutes {

  public routes(app): void {

    app.route('/').get(cursoController.getAlCursos)
      .post(cursoController.createCurso);

    app.route('/:cursoId')
        .get(cursoController.getCursoById)
        .put(cursoController.updateCursoById)
        .delete(cursoController.deleteCursoById);
  }

}
