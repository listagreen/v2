import { User } from "@prisma/client";

import { prisma } from "../../../../services/prismaClient";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  async create({ email, password }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email,
        password,
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
