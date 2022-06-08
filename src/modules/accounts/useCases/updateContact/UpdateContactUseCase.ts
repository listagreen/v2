import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
  phone: string;
  whatsapp: string;
}

@injectable()
class UpdateContactUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id, phone, whatsapp }: IRequest): Promise<void> {
    await this.usersRepository.updateContact(id, phone, whatsapp);
  }
}

export { UpdateContactUseCase };
