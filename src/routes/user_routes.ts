import { Router } from "express";
import userController from "../controllers/user_controller";

const routes = Router();

routes.get("/", userController.index);
routes.get("/create", userController.create);

export default routes;
