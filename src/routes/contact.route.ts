import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateContactController } from "../modules/accounts/useCases/updateContact/UpdateContactController";

const contactRoute = Router();

const updateContactController = new UpdateContactController();

contactRoute.post("/", ensureAuthenticated, updateContactController.handle);

export { contactRoute };
