import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { profilesRoute } from "./profiles.routes";
import { usersRoute } from "./users.routes";

const router = Router();

router.use("/users", usersRoute);
router.use("/", profilesRoute);
router.use(authenticateRoutes);

export { router };
