import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { ExecutableCommand } from "src/Command";

export const Start: ExecutableCommand = {
  command: new SlashCommandBuilder()
    .setName("start")
    .setDescription("Starts the specified type of game server"),
  run: async (interaction: ChatInputCommandInteraction) => {
    // TODO get requested game from parameter
    const game = "World of Placeholder";

    // TODO notify client that request is processed to prevent timeout?

    // TODO post actual start message
    const response = { success: true, stopped: "Placeholder Craft" };

    let content = "";

    if (response.success) {
      content += "Successfully started server: " + game;
      if (response.stopped) {
        content += " and stopped " + response.stopped;
      }
    } else {
      content += "Could not start game server" + game;
      if (response.stopped) {
        content += " but stopped " + response.stopped;
      }
    }

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
