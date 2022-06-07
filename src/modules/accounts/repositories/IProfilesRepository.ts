import { Profile } from "@prisma/client";

interface ICreateProfileDTO {
  name: string;
  surname: string;
  main_name: string;
  area: string[];
  intereststags: string[];
  job: string[];
  profilepic?: string;
  coverpic?: string;
  userId: string;
}

interface IProfilesRepository {
  list(): Promise<Profile[]>;
  create({
    name,
    surname,
    main_name,
    area,
    intereststags,
    job,
    profilepic,
    coverpic,
    userId,
  }: ICreateProfileDTO): Promise<Profile>;
}

export { IProfilesRepository, ICreateProfileDTO };
