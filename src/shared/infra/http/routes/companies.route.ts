import { Router } from "express";

import { UpdateCompaniesController } from "../../../../modules/accounts/useCases/updateCompanies/UpdateCompaniesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const companiesRoute = Router();

const updateCompaniesController = new UpdateCompaniesController();

companiesRoute.post("/", ensureAuthenticated, updateCompaniesController.handle);

export { companiesRoute };
