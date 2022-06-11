import { hash } from "bcryptjs";

import { prisma } from "../services/prismaClient";

async function seed() {
  const password = await hash("admin", 8);

  await prisma.user.create({
    data: {
      email: "admin@listagreen.com",
      password,
      permissions: "SUPERADMIN",
    },
  });

  console.log("Admin created!");
}

seed()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
