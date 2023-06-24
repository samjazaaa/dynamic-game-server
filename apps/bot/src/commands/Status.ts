import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { ExecutableCommand } from "src/Command";

export const Status: ExecutableCommand = {
  command: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Returns the current status of the dynamic game server"),
  run: async (interaction: ChatInputCommandInteraction) => {
    // TODO notify client that request is processed to prevent timeout?

    // TODO request actual status of game servers from api
    const status = { game: "Placeholder Craft", online: 42 };

    let content = status.game
      ? "Currently running:\n\nGame: " +
        status.game +
        "\nOnline: " +
        status.online
      : "No active game server";

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
