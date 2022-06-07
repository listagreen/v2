import { container } from "tsyringe";

import { ProfilesRepository } from "../../modules/accounts/repositories/implementations/ProfilesRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IProfilesRepository } from "../../modules/accounts/repositories/IProfilesRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IProfilesRepository>(
  "ProfilesRepository",
  ProfilesRepository
);
