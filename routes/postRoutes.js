import { Router } from "express";
import auth from '../middleware/auth.js';
import { create, getAll } from "../controllers/postController.js";
const route = Router();

route.get('/', getAll);
route.post('/', create);
// route.get('/:id', login);

export default route;