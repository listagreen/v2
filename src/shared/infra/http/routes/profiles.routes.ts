import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { UpdateProfileController } from "../../../../modules/accounts/useCases/updateProfile/UpdateProfileController";
import { UpdateAvatarController } from "../../../../modules/accounts/useCases/updateProfilePic/UpdateAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const profilesRoute = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const updateProfileController = new UpdateProfileController();
const updateAvatarController = new UpdateAvatarController();

profilesRoute.post(
  "/profile",
  ensureAuthenticated,
  updateProfileController.handle
);

profilesRoute.patch(
  "/profilepic",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateAvatarController.handle
);

export { profilesRoute };
