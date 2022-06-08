import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { companiesRoute } from "./companies.route";
import { contactRoute } from "./contact.route";
import { profilesRoute } from "./profiles.routes";
import { usersRoute } from "./users.routes";

const router = Router();

router.use("/users", usersRoute);
router.use("/contact", contactRoute);
router.use("/companies", companiesRoute);
router.use("/", profilesRoute);
router.use(authenticateRoutes);

export { router };
