import {
  ChatInputApplicationCommandData,
  ChatInputCommandInteraction,
} from "discord.js";

// add run function to existing command data interface
export interface Command extends ChatInputApplicationCommandData {
  run: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
