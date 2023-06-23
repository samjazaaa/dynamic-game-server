import { Collection } from "discord.js";
import { ExecutableCommand } from "./Command";
import { Hello } from "./commands/Hello";
import { Status } from "./commands/Status";
import { Available } from "./commands/Available";
import { Start } from "./commands/Start";
import { Stop } from "./commands/Stop";

const commandList: ExecutableCommand[] = [
  Hello,
  Status,
  Available,
  Start,
  Stop,
];

export const Commands = new Collection(
  commandList.map((command) => {
    return [command.command.name, command];
  })
);
