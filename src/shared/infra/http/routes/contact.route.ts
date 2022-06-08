import { Router } from "express";

import { UpdateContactController } from "../../../../modules/accounts/useCases/updateContact/UpdateContactController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const contactRoute = Router();

const updateContactController = new UpdateContactController();

contactRoute.post("/", ensureAuthenticated, updateContactController.handle);

export { contactRoute };
