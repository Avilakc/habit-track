import prisma from "../lib/prisma.js";
import { calculateStreak } from "../lib/streak.js";

export async function list(req, res, next) {
  try {
    const habits = await prisma.habit.findMany({
      include: { logs: true },
      orderBy: { createdAt: "asc" },
    });

    const habitsWithStreak = habits.map((habit) => ({
      id: habit.id,
      name: habit.name,
      icon: habit.icon,
      color: habit.color,
      isPredefined: habit.isPredefined,
      streak: calculateStreak(habit.logs.map((log) => log.date)),
    }));

    res.json(habitsWithStreak);
  } catch (err) {
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    const habit = await prisma.habit.create({
      data: req.body,
    });

    res.status(201).json(habit);
  } catch (err) {
    next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const habit = await prisma.habit.findUniqueOrThrow({
      where: { id: req.params.id },
    });

    if (habit.isPredefined) {
      return res
        .status(403)
        .json({ error: "Predefined habits cannot be deleted" });
    }

    await prisma.habit.delete({ where: { id: habit.id } });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

export async function createLog(req, res, next) {
  try {
    const log = await prisma.habitLog.upsert({
      where: {
        habitId_date: {
          habitId: req.params.id,
          date: new Date(req.body.date),
        },
      },
      update: {},
      create: {
        habitId: req.params.id,
        date: new Date(req.body.date),
      },
    });

    res.status(201).json(log);
  } catch (err) {
    next(err);
  }
}

export async function removeLog(req, res, next) {
  try {
    await prisma.habitLog.delete({
      where: {
        habitId_date: {
          habitId: req.params.id,
          date: new Date(req.params.date),
        },
      },
    });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

export async function listLogs(req, res, next) {
  try {
    const logs = await prisma.habitLog.findMany({
      where: { habitId: req.params.id },
      orderBy: { date: "desc" },
    });

    res.json(logs);
  } catch (err) {
    next(err);
  }
}
