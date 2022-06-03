import { Request, Response } from "express";

import { prisma } from "../services/prismaClient";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const users = await prisma.user.findMany();

    return response.json(users);
  }
}

export { ListUsersController };
