import { Request, Response } from "express";

import { CreateProfileUseCase } from "./CreateProfileUseCase";

class CreateProfileController {
  constructor(private createUserUseCase: CreateProfileUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      surname,
      main_name,
      job,
      area,
      intereststags,
      profilepic,
      coverpic,
    } = req.body;
    const { userId } = req.params;

    await this.createUserUseCase.execute({
      main_name,
      name,
      surname,
      job,
      area,
      intereststags,
      profilepic,
      coverpic,
      userId,
    });

    return res.status(201).send();
  }
}

export { CreateProfileController };
