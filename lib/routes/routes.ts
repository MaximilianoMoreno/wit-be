import {ProfesorController} from "../resources/profesor/profesor.controller";
import {CursoController} from "../resources/curso/curso.controller";

let profesorController: ProfesorController = new ProfesorController();
let cursoController: CursoController = new CursoController();

export class Routes {
  // TODO: separar los routes en archivos distintos para modularizar

  public routes(app): void {

    app.route('/profesor').get(profesorController.getAllProfesors)
        .post(profesorController.createProfesor);

    app.route('/profesor/:profesorId')
        .get(profesorController.getProfesorById)
        .put(profesorController.updateProfesorById)
        .delete(profesorController.deleteProfesorById);

    app.route('/curso').get(cursoController.getAlCursos)
        .post(cursoController.createCurso);

    app.route('/curso/:cursoId')
        .get(cursoController.getCursoById)
        .put(cursoController.updateCursoById)
        .delete(cursoController.deleteCursoById);
  }
}