import express from "express";
import cors from "cors";
import { items } from "./data.js";

const app = express();
app.use(cors());

// Serve React build
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get("/api/items", (req, res) => {
  res.json(items);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
