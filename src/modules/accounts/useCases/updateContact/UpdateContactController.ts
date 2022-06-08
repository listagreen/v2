import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateContactUseCase } from "./UpdateContactUseCase";

class UpdateContactController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { phone, whatsapp } = req.body;

    const updateContactUseCase = container.resolve(UpdateContactUseCase);

    updateContactUseCase.execute({ id, phone, whatsapp });

    return res.status(200).send();
  }
}

export { UpdateContactController };
