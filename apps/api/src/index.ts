import express from "express";

const app = express();

// api key for communication with bot
const apiKey = process.env["API_KEY"];

// save all actual server data for the available game servers under this path
const serverDataPath = process.env["SERVER_DATA"];

// TODO check if all required env variables are provided and accessible

// require api key for any request
app.use((req, res, next) => {
  const sentApiKey = req.get("API-Key");
  if (!sentApiKey || sentApiKey !== apiKey) {
    res.status(401).json({ error: "unauthorised" });
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.get("/status", (req, res) => {
  res.status(200).json({ message: "status placeholder" });
});

app.get("/available", (req, res) => {
  res.status(200).json({ message: "available placeholder" });
});

app.get("/start", (req, res) => {
  res.status(200).json({ message: "start placeholder" });
});

app.get("/stop", (req, res) => {
  res.status(200).json({ message: "stop placeholder" });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
