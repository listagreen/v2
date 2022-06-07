import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProfileUseCase } from "./CreateProfileUseCase";

class CreateProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, surname, main_name, job, area, intereststags, id } = req.body;

    const createProfileUseCase = container.resolve(CreateProfileUseCase);

    await createProfileUseCase.execute({
      main_name,
      name,
      surname,
      job,
      area,
      intereststags,
      id,
    });

    return res.status(201).send();
  }
}

export { CreateProfileController };
