import { User } from "@prisma/client";

import {
  ICreateUserDTO,
  ICreateUserTokensDTO,
  IUpdateProfileDTO,
} from "../dtos/IUsersDTO";

interface IUsersRepository {
  create({ email, password }: ICreateUserDTO): Promise<User>;
  createRefreshToken({
    userId,
    refreshToken,
    expiresDate,
  }: ICreateUserTokensDTO): Promise<User>;
  list(): Promise<User[]>;
  updateProfile(data: IUpdateProfileDTO): Promise<User>;
  updateContact(id: string, phone: string, whatsapp: string): Promise<User>;
  updateCompanies(id: string, owned: string[]): Promise<User>;
  updateAvatar(id: string, avatar: string): Promise<User>;
  delete(email: string): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  verifyUser(id: string): Promise<User>;
  unverifyUser(id: string): Promise<User>;
}

export { IUsersRepository };
