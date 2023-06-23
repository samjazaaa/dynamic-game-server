import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { ExecutableCommand } from "src/Command";

export const Status: ExecutableCommand = {
  command: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Returns the current status of the dynamic game server"),
  run: async (interaction: ChatInputCommandInteraction) => {
    const content = "Placeholder for game server status...";

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
