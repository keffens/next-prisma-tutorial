import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getCourses = () =>
  prisma.course.findMany({
    include: {
      lessons: true,
    },
  });
