import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // await prisma.course.create({
  //   data: {
  //     title: "Learning to code!",
  //     lessons: {
  //       create: { title: "Learn the terminal" },
  //     },
  //   },
  // });
  const courses = await prisma.course.findMany({
    include: { lessons: true },
  });
  res.send(courses);
}
