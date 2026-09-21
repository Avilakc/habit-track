import { ZodError } from "zod";

export function errorHandler(err, req, res, _next) {
  console.error(err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      error: "Invalid data",
      details: err.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  if (err.code === "P2025") {
    return res.status(404).json({ error: "Record not found" });
  }

  return res.status(500).json({ error: "Internal server error" });
}
