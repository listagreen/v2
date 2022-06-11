import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);

    deleteUserUseCase.execute({ email });

    return res.status(200).json({ message: "Deleted" });
  }
}

export { DeleteUserController };
