import {
  ApplicationCommandType,
  ChatInputCommandInteraction,
} from "discord.js";
import { Command } from "src/Command";

// TODO use builder pattern instead?
export const Hello: Command = {
  name: "hello",
  description: "Returns a greeting",
  type: ApplicationCommandType.ChatInput,
  run: async (interaction: ChatInputCommandInteraction) => {
    const content = "Hello there!";

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
