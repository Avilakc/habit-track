import prisma from "../lib/prisma.js";
import { listLogsQuerySchema } from "../schemas/habit.schema.js";

function toDateString(date) {
  return date.toISOString().split("T")[0];
}

export async function list(req, res, next) {
  try {
    // req.query is read-only in Express 5, so we validate into a local variable
    const { from, to } = listLogsQuerySchema.parse(req.query);

    const logs = await prisma.habitLog.findMany({
      where: {
        date: {
          gte: new Date(from),
          lte: new Date(to),
        },
      },
      select: { habitId: true, date: true },
      orderBy: { date: "asc" },
    });

    res.json(
      logs.map((log) => ({
        habitId: log.habitId,
        date: toDateString(log.date),
      })),
    );
  } catch (err) {
    next(err);
  }
}
