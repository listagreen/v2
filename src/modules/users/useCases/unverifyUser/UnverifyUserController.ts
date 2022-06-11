import { Request, Response } from "express";
import { container } from "tsyringe";

import { UnverifyUserUseCase } from "./UnverifyUserUseCase";

class UnverifyUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const unverifyUserUseCase = container.resolve(UnverifyUserUseCase);

    await unverifyUserUseCase.execute({ id });

    return res.status(204).send();
  }
}

export { UnverifyUserController };
