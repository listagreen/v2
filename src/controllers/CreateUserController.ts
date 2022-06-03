import { Request, Response } from "express";

import { UsersRepository } from "../repositories/UsersRepository";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, surname, email, password, whatsapp } = request.body;

    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = await usersRepository.create({
      name,
      surname,
      email,
      password,
      whatsapp,
    });

    return response.json(user);
  }
}

export { CreateUserController };
