import express from "express";
import { getUsers, addUser, deleteUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

export default router;