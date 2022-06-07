import { Router } from "express";

import { createUserController } from "../modules/accounts/useCases/createUser";
import { listUsersController } from "../modules/accounts/useCases/listUsers";

const usersRoute = Router();

usersRoute.post("/", (req, res) => {
  return createUserController.handle(req, res);
});

usersRoute.get("/", async (req, res) => {
  const all = await listUsersController.handle(req, res);
  return all;
});

export { usersRoute };
