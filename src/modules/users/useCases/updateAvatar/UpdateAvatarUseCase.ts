import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest) {
    await this.usersRepository.findById(user_id);

    await this.usersRepository.updateAvatar(user_id, avatar_file);
  }
}

export { UpdateAvatarUseCase };
