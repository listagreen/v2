import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

class CreateProfileController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const profile = await prismaClient.profile.create({
      data: {
        name,
      },
    });

    return response.json(profile);
  }
}

export { CreateProfileController };
