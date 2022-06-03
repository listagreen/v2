import { Request, Response } from "express";

import { prisma } from "../services/prismaClient";

class CreateProfileController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const profile = await prisma.profile.create({
      data: {
        name,
      },
    });

    return response.json(profile);
  }
}

export { CreateProfileController };
