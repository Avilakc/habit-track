import prisma from "../src/lib/prisma.js";

const predefinedHabits = [
  { name: "Sleep 8 hours", icon: "😴", color: "#6366F1" },
  { name: "Drink water", icon: "💧", color: "#0EA5E9" },
  { name: "Exercise", icon: "💪", color: "#F97316" },
  { name: "Read", icon: "📖", color: "#22C55E" },
];

async function main() {
  const alreadySeeded = await prisma.habit.count({
    where: { isPredefined: true },
  });

  if (alreadySeeded > 0) {
    console.log("Predefined habits already exist, skipping seed.");
    return;
  }

  await prisma.habit.createMany({
    data: predefinedHabits.map((habit) => ({ ...habit, isPredefined: true })),
  });

  console.log(`Seeded ${predefinedHabits.length} predefined habits.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
