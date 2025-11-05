// getTeachers.js
const { PrismaClient } = require('./generated/prisma'); // ✅ use your generated path
const prisma = new PrismaClient();

async function getTeachers() {
  const teachers = await prisma.teachers.findMany();
  console.log(teachers);
}

getTeachers()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
