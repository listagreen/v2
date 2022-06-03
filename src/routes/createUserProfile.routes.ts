import { Router } from "express";

import { CreateUserProfileController } from "../controllers/CreateUserProfileController";

const createUserProfileRoute = Router();

const createUserProfile = new CreateUserProfileController();

createUserProfileRoute.post("/", createUserProfile.handle);

export { createUserProfileRoute };
