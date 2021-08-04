import { getCourses } from "../../utils/db";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const courses = await getCourses();
  res.send(courses);
}
