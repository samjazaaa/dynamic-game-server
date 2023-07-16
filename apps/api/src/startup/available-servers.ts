import type { GameServer } from "src/types/game-server";
import { readdirSync, readFileSync, existsSync, lstatSync } from "fs";

export const availableServers: GameServer[] = [];
const templatePath = "./server-templates/";
const configFileName = "dyn-config.json";

export function scanAvailableServers(): void {
  getSubDirectories(templatePath)
    .filter((subDir) => {
      return isValidServerDir(templatePath + subDir);
    })
    .forEach((subDir) => {
      console.log("Creating Game Server object for sub dir " + subDir);
      availableServers.push(
        parseGameServer(templatePath + subDir + "/" + configFileName)
      );
    });

  console.log("Parsed servers:");
  console.log(availableServers);
}

function getSubDirectories(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

function isValidServerDir(path: string): boolean {
  const configPath = path + "/" + configFileName;
  return existsSync(configPath) && lstatSync(configPath).isFile();
}

function parseGameServer(configPath: string): GameServer {
  const gameServer: GameServer = JSON.parse(readFileSync(configPath, "utf-8"));
  gameServer.pathName = "TODO"; // TODO extract dir name from path?
  return gameServer;
}
