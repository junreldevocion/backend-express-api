import { Router } from "express";
import { addUser, editUser, getAllUsers, getUser, removeUser } from "../controllers/userControllers";

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.put('/:id', editUser);
router.delete('/:id', removeUser);

export default router;