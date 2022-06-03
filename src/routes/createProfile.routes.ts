import { Router } from "express";

import { CreateProfileController } from "../controllers/CreateProfileController";

const createProfileRoute = Router();

const createProfile = new CreateProfileController();

createProfileRoute.post("/", createProfile.handle);

export { createProfileRoute };
