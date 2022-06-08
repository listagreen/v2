import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateCompaniesController } from "../modules/accounts/useCases/updateCompanies/UpdateCompaniesController";

const companiesRoute = Router();

const updateCompaniesController = new UpdateCompaniesController();

companiesRoute.post("/", ensureAuthenticated, updateCompaniesController.handle);

export { companiesRoute };
