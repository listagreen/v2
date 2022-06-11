import { Router } from "express";

import { UpdateCompaniesController } from "../../../../modules/users/useCases/updateCompanies/UpdateCompaniesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const companiesRoute = Router();

const updateCompaniesController = new UpdateCompaniesController();

companiesRoute.post("/", ensureAuthenticated, updateCompaniesController.handle);

export { companiesRoute };
