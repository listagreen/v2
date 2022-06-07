import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  pic_file: string;
}

@injectable()
class UpdateProfilePicUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, pic_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.profile) {
      user.profile.profilepic = pic_file;
    }

    await this.usersRepository.create(user);
  }
}

export { UpdateProfilePicUseCase };
