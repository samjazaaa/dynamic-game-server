import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { ExecutableCommand } from "src/Command";

export const Stop: ExecutableCommand = {
  command: new SlashCommandBuilder()
    .setName("stop")
    .setDescription("Stops the currently running game server"),
  run: async (interaction: ChatInputCommandInteraction) => {
    // TODO notify client that request is processed to prevent timeout?

    // TODO post actual stop message
    const response = { success: true, game: "Placeholder Craft" };

    let content = response.success
      ? "Successfully stopped server: " + response.game
      : "Could not stop game server" + response.game
      ? ": " + response.game
      : " because no server was running";

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
