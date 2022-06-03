import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

class CreateUserProfileController {
  async handle(request: Request, response: Response) {
    const { id_user, id_profile } = request.body;

    const userProfile = await prismaClient.userProfile.create({
      data: {
        id_profile,
        id_user,
      },
    });

    return response.json(userProfile);
  }
}

export { CreateUserProfileController };
