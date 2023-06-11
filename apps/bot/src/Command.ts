import {
  ChatInputApplicationCommandData,
  ChatInputCommandInteraction,
  Client,
} from "discord.js";

// add run function to existing command data interface
export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: ChatInputCommandInteraction) => void;
}
