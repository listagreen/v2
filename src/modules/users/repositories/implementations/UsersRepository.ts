import { User } from "@prisma/client";

import { prisma } from "../../../../shared/infra/prisma/services/prismaClient";
import {
  ICreateUserDTO,
  ICreateUserTokensDTO,
  IUpdateProfileDTO,
} from "../../dtos/IUsersDTO";
import { IUsersRepository } from "../IUsersRepository";

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

  async createRefreshToken({
    userId,
    refreshToken,
    expiresDate,
  }: ICreateUserTokensDTO): Promise<User> {
    const userToken = prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        userTokens: {
          refreshToken,
          expiresDate,
        },
      },
    });

    return userToken;
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
    bio,
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
          bio,
          area,
          intereststags,
          job,
        },
      },
    });

    return profile;
  }

  async updateAvatar(id: string, avatar: string): Promise<User> {
    const profile = await prisma.user.update({
      where: {
        id,
      },
      data: {
        images: {
          avatar,
        },
      },
    });

    return profile;
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

  async verifyUser(id: string): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        verified: true,
      },
    });

    return user;
  }

  async unverifyUser(id: string): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        verified: false,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async list(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }
}

export { UsersRepository };
