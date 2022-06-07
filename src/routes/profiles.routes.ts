import { Router } from "express";

import { createProfileController } from "../modules/accounts/useCases/createProfile";

const profilesRoute = Router();

profilesRoute.post("/profile/:id", (req, res) => {
  return createProfileController.handle(req, res);
});

export { profilesRoute };
