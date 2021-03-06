import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
}

interface IResponse {
  user: {
    email: string;
    permissions: string;
    profile: {
      name: string;
      surname: string;
    };
  };
}

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UsersRepository")
    private readonly usersRepository: IUsersRepository
  ) {}

  async execute({ id }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User not found!");
    }

    const response: IResponse = {
      user: {
        email: user.email,
        permissions: user.permissions,
        profile: {
          name: user.profile.name,
          surname: user.profile.surname,
        },
      },
    };

    return response;
  }
}

export { ListUserUseCase };
