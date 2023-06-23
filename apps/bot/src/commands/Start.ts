import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { ExecutableCommand } from "src/Command";

export const Start: ExecutableCommand = {
  command: new SlashCommandBuilder()
    .setName("start")
    .setDescription("Starts the specified type of game server"),
  run: async (interaction: ChatInputCommandInteraction) => {
    const content = "Placeholder for start message...";

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
