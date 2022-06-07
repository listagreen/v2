import { Profile, User } from "@prisma/client";

interface ICreateUserDTO {
  email: string;
  password: string;
  profile?: Profile;
}

interface IUpdateProfileDTO {
  id: string;
  name: string;
  surname: string;
  main_name: string;
  area: string;
  intereststags: string[];
  job: string;
  profilepic: string;
  coverpic: string;
}

interface IUsersRepository {
  create({ email, password }: ICreateUserDTO): Promise<User>;
  updateProfile(data: IUpdateProfileDTO): Promise<Profile>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO, IUpdateProfileDTO };
