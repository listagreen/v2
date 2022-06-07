import { Request, Response } from "express";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  constructor(private listUsersuseCase: ListUsersUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const all = await this.listUsersuseCase.execute();

    return res.json(all);
  }
}

export { ListUsersController };
