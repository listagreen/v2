import { User } from "@prisma/client";

interface ICreateUserDTO {
  email: string;
  password: string;
}

interface IUpdateProfileDTO {
  name: string;
  surname: string;
  main_name: string;
  area: string[];
  intereststags: string[];
  job: string[];
  id: string;
}

interface IUsersRepository {
  create({ email, password }: ICreateUserDTO): Promise<User>;
  updateProfile(data: IUpdateProfileDTO): Promise<User>;
  updateContact(id: string, phone: string, whatsapp: string): Promise<User>;
  updateCompanies(id: string, owned: string[]): Promise<User>;
  delete(email: string): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  updateAvatar(id: string, avatar_file: any): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO, IUpdateProfileDTO };
