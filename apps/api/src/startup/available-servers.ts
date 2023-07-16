import type { GameServer } from "src/types/game-server";

export const availableServers: GameServer[] = [];

export function scanAvailableServers() {
  // TODO scan server templates directory and parse all configs
  // TODO add each found server to the global array

  const example: GameServer = {
    name: "example Server",
  };

  availableServers.push(example);
}
