import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { ExecutableCommand } from "src/Command";

export const Stop: ExecutableCommand = {
  command: new SlashCommandBuilder()
    .setName("stop")
    .setDescription("Stops the currently running game server"),
  run: async (interaction: ChatInputCommandInteraction) => {
    const content = "Placeholder for stop message...";

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
