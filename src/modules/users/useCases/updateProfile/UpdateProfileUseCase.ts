import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  surname: string;
  main_name: string;
  bio: string;
  area: string[];
  intereststags: string[];
  job: string[];
  id: string;
}

@injectable()
class UpdateProfileUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    surname,
    main_name,
    bio,
    area,
    intereststags,
    job,
    id,
  }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    await this.usersRepository.updateProfile({
      name,
      surname,
      main_name,
      bio,
      area,
      intereststags,
      job,
      id,
    });
  }
}

export { UpdateProfileUseCase };
