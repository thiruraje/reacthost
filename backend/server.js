import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { items } from "./data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// ✅ 1. Define API routes FIRST
app.get("/api/items", (req, res) => {
  res.json(items);
});

// ✅ 2. Serve React build
app.use(express.static(path.join(__dirname, "../frontend/build")));

// ✅ 3. Catch-all route (for React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
