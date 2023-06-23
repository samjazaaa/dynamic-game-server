import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { ExecutableCommand } from "src/Command";

export const Available: ExecutableCommand = {
  command: new SlashCommandBuilder()
    .setName("available")
    .setDescription("Returns the available game server types"),
  run: async (interaction: ChatInputCommandInteraction) => {
    const content = "Placeholder for the available game servers...";

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
