import { ProfilesRepository } from "../../repositories/implementations/ProfilesRepository";
import { CreateProfileController } from "./CreateProfileController";
import { CreateProfileUseCase } from "./CreateProfileUseCase";

const profilesRepository = new ProfilesRepository();
const createProfileUseCase = new CreateProfileUseCase(profilesRepository);
const createProfileController = new CreateProfileController(
  createProfileUseCase
);

export { createProfileController };
