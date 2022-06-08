import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProfileUseCase } from "./UpdateProfileUseCase";

class UpdateProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, surname, main_name, area, intereststags, job } = req.body;
    const { id } = req.user;

    const updateProfileUseCase = container.resolve(UpdateProfileUseCase);

    await updateProfileUseCase.execute({
      name,
      surname,
      main_name,
      area,
      intereststags,
      job,
      id,
    });

    return res.status(201).send();
  }
}

export { UpdateProfileController };
