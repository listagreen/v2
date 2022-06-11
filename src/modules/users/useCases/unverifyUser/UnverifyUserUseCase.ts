import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
}

@injectable()
class UnverifyUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ id }: IRequest) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User doesn't exists!");
    }

    if (!user.verified) {
      throw new AppError("User already unverified!");
    }

    await this.usersRepository.unverifyUser(id);
  }
}

export { UnverifyUserUseCase };
