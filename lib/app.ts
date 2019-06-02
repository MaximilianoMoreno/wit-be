import * as mongoose from 'mongoose';
import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes/routes";

class App {

  public app: express.Application;
  public router: Routes = new Routes();
  // public router: Routes = new ProfesorRoutes();
  public mongoUrl: string = 'mongodb://localhost/wit';

  constructor() {
    this.app = express();
    this.config();
    this.router.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({extended: false}));
  }


  private mongoSetup(): void {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }

}

export default new App().app;