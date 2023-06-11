import { Collection } from "discord.js";
import { Command } from "./Command";
import { Hello } from "./commands/Hello";

const commandList: Command[] = [Hello];

export const Commands = new Collection(
  commandList.map((command) => {
    return [command.name, command];
  })
);
