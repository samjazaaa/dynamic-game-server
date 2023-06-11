import {
  ApplicationCommandType,
  ChatInputCommandInteraction,
  Client,
} from "discord.js";
import { Command } from "src/Command";

// TODO use builder pattern instead?
export const Hello: Command = {
  name: "hello",
  description: "Returns a greeting",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: ChatInputCommandInteraction) => {
    const content = "Hello there!";

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
