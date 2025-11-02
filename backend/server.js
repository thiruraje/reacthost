import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { items } from "./data.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "build")));


const app = express();
app.use(express.json());

// API route
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Serve React build

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
