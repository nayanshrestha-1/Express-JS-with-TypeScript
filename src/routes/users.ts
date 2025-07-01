import { Router } from "express";
import { createUser, getUsers, getUsersById } from "../handlers/users";

const router = Router();

// /api/users
router.get("/", getUsers);

// /api/users/123
router.get("/:id", getUsersById)

// /api/users
router.post("/", createUser);  //for creating user

export default router;