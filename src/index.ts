import express from "express";
const app = express();
const port = "3010";

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`Server listen on : http://localhost:${port}`);
});
