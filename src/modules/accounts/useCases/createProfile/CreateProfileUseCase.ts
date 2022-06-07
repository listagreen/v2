import { IProfilesRepository } from "../../repositories/IProfilesRepository";

interface IRequest {
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

class CreateProfileUseCase {
  constructor(private usersRepository: IProfilesRepository) {}

  async execute({
    main_name,
    name,
    surname,
    job,
    area,
    intereststags,
    coverpic,
    profilepic,
    userId,
  }: IRequest): Promise<void> {
    await this.usersRepository.create({
      name,
      surname,
      main_name,
      area,
      intereststags,
      job,
      profilepic,
      coverpic,
      userId,
    });
  }
}

export { CreateProfileUseCase };
