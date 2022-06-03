import express from "express";

import { createProfileRoute } from "./routes/createProfile.routes";
import { createUserProfileRoute } from "./routes/createUserProfile.routes";
import { usersRoute } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/users", usersRoute);
app.use("/profile", createProfileRoute);
app.use("/userProfile", createUserProfileRoute);

app.listen(3333, () => console.log("Server started on port 3333"));
