import { User } from "@prisma/client";

interface ICreateUserDTO {
  email: string;
  password: string;
}

interface IUpdateProfileDTO {
  name: string;
  surname: string;
  main_name: string;
  bio: string;
  area: string[];
  intereststags: string[];
  job: string[];
  id: string;
}

interface IUsersRepository {
  create({ email, password }: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  updateProfile(data: IUpdateProfileDTO): Promise<User>;
  updateContact(id: string, phone: string, whatsapp: string): Promise<User>;
  updateCompanies(id: string, owned: string[]): Promise<User>;
  updateAvatar(id: string, avatar: string): Promise<User>;
  delete(email: string): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  updatePermissionsToEditor(id: string): Promise<User>;
  verifyUser(id: string): Promise<User>;
  unverifyUser(id: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO, IUpdateProfileDTO };
