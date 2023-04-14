import { Router } from "express";
import { userController } from "../controllers/user.controller";

const routes = Router();

// Get Users
routes.get("/", userController.index);

// Create User
routes.post("/create", userController.createUser);

// Get Unique User
routes.get("/:id", userController.findUniqueUser);

// Update Particular User Based On Id
routes.put("/update/:id", userController.updateUser);

// Delete Particular User Based On Id
routes.delete("/delete/:id", userController.deleteUser);

export default routes;
