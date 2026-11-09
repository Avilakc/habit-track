// AI assistance: Claude (Anthropic) reviewed this code and helped fix bugs where needed.

import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
