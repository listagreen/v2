import { Request, Response } from "express";
import { container } from "tsyringe";

import { VerifyUserUseCase } from "./VerifyUserUseCase";

class VerifyUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const verifyUserUseCase = container.resolve(VerifyUserUseCase);

    await verifyUserUseCase.execute({ id });

    return res.status(204).send();
  }
}

export { VerifyUserController };
