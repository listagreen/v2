import express from "express";

import { createProfileRoute } from "./routes/createProfile.routes";
import { createUserRoute } from "./routes/createUser.routes";
import { createUserProfileRoute } from "./routes/createUserProfile.routes";

const app = express();

app.use(express.json());
app.use("/user", createUserRoute);
app.use("/profile", createProfileRoute);
app.use("/userProfile", createUserProfileRoute);

app.listen(3333, () => console.log("Server started on port 3333"));
