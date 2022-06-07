import { Router } from "express";

import { profilesRoute } from "./profiles.routes";
import { usersRoute } from "./users.routes";

const router = Router();

router.use("/users", usersRoute);
router.use("/", profilesRoute);

export { router };
