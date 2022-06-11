import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCompaniesUseCase } from "./UpdateCompaniesUseCase";

class UpdateCompaniesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { owned } = req.body;

    const updateCompaniesUseCase = container.resolve(UpdateCompaniesUseCase);

    updateCompaniesUseCase.execute({ id, owned });

    return res.status(200).send();
  }
}

export { UpdateCompaniesController };
