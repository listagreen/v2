import { Router } from "express";
// import multer from "multer";

import { CreateProfileController } from "../modules/accounts/useCases/createProfile/CreateProfileController";

const profilesRoute = Router();

// const upload = multer({
//   dest: "./tmp",
// });

const createProfileController = new CreateProfileController();

profilesRoute.post("/profile/:id", createProfileController.handle);

// profilesRoute.post("/profilepic", upload.single("file"), (req, res) => {
//   const { file } = req;
//   return res.send();
// });

export { profilesRoute };
