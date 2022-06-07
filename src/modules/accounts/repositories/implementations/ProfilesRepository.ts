import { Profile } from "@prisma/client";

import { prisma } from "../../../../services/prismaClient";
import { ICreateProfileDTO, IProfilesRepository } from "../IProfilesRepository";

class ProfilesRepository implements IProfilesRepository {
  async create({
    name,
    surname,
    main_name,
    area,
    intereststags,
    job,
    profilepic,
    coverpic,
    userId,
  }: ICreateProfileDTO): Promise<Profile> {
    const profile = await prisma.profile.create({
      data: {
        name,
        surname,
        main_name,
        area,
        intereststags,
        job,
        profilepic,
        coverpic,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return profile;
  }
  list(): Promise<Profile[]> {
    throw new Error("Method not implemented.");
  }
}

export { ProfilesRepository };
