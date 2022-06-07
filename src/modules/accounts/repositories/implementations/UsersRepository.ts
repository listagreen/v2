import { Profile, User } from "@prisma/client";

import { prisma } from "../../../../services/prismaClient";
import {
  ICreateUserDTO,
  IUpdateProfileDTO,
  IUsersRepository,
} from "../IUsersRepository";

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

  async updateProfile({
    id,
    name,
    surname,
    main_name,
    area,
    intereststags,
    job,
  }: IUpdateProfileDTO): Promise<Profile> {
    const profile = await prisma.user.update({
      where: {
        id,
      },
      data: {
        profile: {
          name,
          surname,
          main_name,
          area,
          intereststags,
          job,
        },
      },
    });

    return profile;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findMany({
      where: {
        email,
      },
    });

    return user[0];
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.user.findMany({
      where: {
        id,
      },
    });

    return user[0];
  }
}

export { UsersRepository };
