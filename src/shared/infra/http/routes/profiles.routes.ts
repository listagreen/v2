import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { UpdateAvatarController } from "../../../../modules/users/useCases/updateAvatar/UpdateAvatarController";
import { UpdateProfileController } from "../../../../modules/users/useCases/updateProfile/UpdateProfileController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const profilesRoute = Router();

const uploadAvatar = multer(uploadConfig);

const updateProfileController = new UpdateProfileController();
const updateAvatarController = new UpdateAvatarController();

profilesRoute.post(
  "/profile",
  ensureAuthenticated,
  updateProfileController.handle
);

profilesRoute.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateAvatarController.handle
);

export { profilesRoute };
