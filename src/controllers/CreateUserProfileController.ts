import { Request, Response } from "express";

import { prisma } from "../services/prismaClient";

class CreateUserProfileController {
  async handle(request: Request, response: Response) {
    const { id_user, id_profile } = request.body;

    const userProfile = await prisma.userProfile.create({
      data: {
        id_profile,
        id_user,
      },
    });

    return response.json(userProfile);
  }
}

export { CreateUserProfileController };
