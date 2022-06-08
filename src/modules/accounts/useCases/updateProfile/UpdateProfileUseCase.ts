import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

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
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    surname,
    main_name,
    area,
    intereststags,
    job,
    id,
  }: IRequest): Promise<void> {
    await this.usersRepository.updateProfile({
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
