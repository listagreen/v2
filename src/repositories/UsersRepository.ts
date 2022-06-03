import { User } from "@prisma/client";

import { prisma } from "../services/prismaClient";

interface ICreateUserDTO {
  name: string;
  surname: string;
  email: string;
  password: string;
  whatsapp: string;
}

class UsersRepository {
  async create({
    name,
    surname,
    email,
    password,
    whatsapp,
  }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        surname,
        email,
        password,
        whatsapp,
      },
    });

    return user;
  }

  async list(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findMany({
      where: {
        email,
      },
    });

    return user[0];
  }
}

export { UsersRepository };
