export function calculateStreak(dates) {
  if (dates.length === 0) return 0;

  const dateStrings = new Set(
    dates.map((date) => date.toISOString().split("T")[0]),
  );

  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  const todayString = cursor.toISOString().split("T")[0];
  if (!dateStrings.has(todayString)) {
    cursor.setDate(cursor.getDate() - 1);
  }

  while (dateStrings.has(cursor.toISOString().split("T")[0])) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}
