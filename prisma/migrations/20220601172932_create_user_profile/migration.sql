-- CreateTable
CREATE TABLE "users_profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_user" TEXT NOT NULL,
    "id_profile" TEXT NOT NULL,
    CONSTRAINT "users_profile_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "users_profile_id_profile_fkey" FOREIGN KEY ("id_profile") REFERENCES "profiles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
