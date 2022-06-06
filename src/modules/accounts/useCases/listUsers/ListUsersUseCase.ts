import { User } from "@prisma/client";

import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUsersUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}
export { ListUsersUseCase };
