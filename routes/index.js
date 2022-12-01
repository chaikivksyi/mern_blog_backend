import { Router } from "express";
import userRoutes from './userRoutes.js';
import postRoutes from './postRoutes.js';
const route = Router();

route.use('/user', userRoutes);
route.use('/posts', postRoutes);

export default route;