import { Profile, User } from "@prisma/client";

interface ICreateUserDTO {
  email: string;
  password: string;
  profile?: Profile;
}
interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  list(): Promise<User[]>;
  create({ email, password }: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
