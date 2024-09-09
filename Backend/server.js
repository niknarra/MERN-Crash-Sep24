import express from "express";

const app = express();
const PORT = 3500;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
