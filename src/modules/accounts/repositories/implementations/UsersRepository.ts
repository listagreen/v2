import { User } from "@prisma/client";

import { prisma } from "../../../../shared/infra/prisma/services/prismaClient";
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

  async delete(email: string): Promise<void> {
    await prisma.user.delete({
      where: {
        email,
      },
    });
  }

  async updateProfile({
    id,
    name,
    surname,
    main_name,
    area,
    intereststags,
    job,
  }: IUpdateProfileDTO): Promise<User> {
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

  async updateAvatar(id: string, avatar_file: any): Promise<void> {
    await prisma.user.update({
      data: {
        profile: {
          profilepic: avatar_file,
        },
      },
      where: {
        id,
      },
    });
  }

  async updateContact(
    id: string,
    phone: string,
    whatsapp: string
  ): Promise<User> {
    const contact = await prisma.user.update({
      where: {
        id,
      },
      data: {
        contact: {
          phone,
          whatsapp,
        },
      },
    });

    return contact;
  }

  async updateCompanies(id: string, owned: string[]): Promise<User> {
    const company = await prisma.user.update({
      where: {
        id,
      },
      data: {
        companies: {
          owned,
        },
      },
    });

    return company;
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
