import express from "express";
const path = require('path');
import cors from "cors";
import { items } from "./data.js";

const app = express();
app.use(cors());

// Serve React build
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.get("/api/items", (req, res) => {
  res.json(items);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
