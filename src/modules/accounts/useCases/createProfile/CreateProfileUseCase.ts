import { inject, injectable } from "tsyringe";

import { IProfilesRepository } from "../../repositories/IProfilesRepository";

interface IRequest {
  name: string;
  surname: string;
  main_name: string;
  area: string[];
  intereststags: string[];
  job: string[];
  id: string;
}

@injectable()
class CreateProfileUseCase {
  constructor(
    @inject("ProfilesRepository")
    private usersRepository: IProfilesRepository
  ) {}

  async execute({
    main_name,
    name,
    surname,
    job,
    area,
    intereststags,
    id,
  }: IRequest): Promise<void> {
    await this.usersRepository.create({
      name,
      surname,
      main_name,
      area,
      intereststags,
      job,
      id,
    });
  }
}

export { CreateProfileUseCase };
