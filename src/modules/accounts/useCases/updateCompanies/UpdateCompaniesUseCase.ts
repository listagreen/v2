import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
  owned: string[];
}

@injectable()
class UpdateCompaniesUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id, owned }: IRequest): Promise<void> {
    await this.usersRepository.updateCompanies(id, owned);
  }
}

export { UpdateCompaniesUseCase };
