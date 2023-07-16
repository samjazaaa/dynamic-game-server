import express from "express";
import fs from "fs";
import { registerAuth } from "./startup/auth";
import { registerRoutes } from "./startup/routes";
import { scanAvailableServers } from "./startup/available-servers";

const app = express();

// api key for communication with bot
const apiKey = process.env["API_KEY"];
if (!apiKey) {
  console.log(
    "No API key specified. Please set the environment variable API_KEY"
  );
  process.exit(1);
}

// save all actual server data for the available game servers under this path
const serverDataPath = process.env["SERVER_DATA"];
if (!serverDataPath || !fs.existsSync(serverDataPath)) {
  console.log(
    "No valid data path specified. Please set the environment variable SERVER_DATA and make sure the directory exists."
  );
  process.exit(1);
}

// scan all available game server templates
scanAvailableServers();

// require api key for any request
registerAuth(app, apiKey);
registerRoutes(app);

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
