import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({});

interface Details {
  name: string;
  email: string;
}

async function x(args: Details) {
  const user = await prisma.user.create({
    data: { name: args.name, email: args.email },
  });

  console.log(user);
}
