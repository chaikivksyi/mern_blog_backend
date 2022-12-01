import { Router } from "express";
import { getAll, login, register } from "../controllers/userController.js";
const route = Router();

route.get('/', getAll);
route.post('/register', register);
route.post('/login', login);

export default route;