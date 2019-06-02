import { ProfesorController } from './profesor.controller';

let profesorController: ProfesorController = new ProfesorController();

export class ProfesorRoutes {

  public routes(app): void {

    app.route('/profesor').get(profesorController.getAllProfesors)
      .post(profesorController.createProfesor);

    app.route('/profesor/:profesorId')
        .get(profesorController.getProfesorById)
        .put(profesorController.updateProfesorById)
        .delete(profesorController.deleteProfesorById);
  }

}
