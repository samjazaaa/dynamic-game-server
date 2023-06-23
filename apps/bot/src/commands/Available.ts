import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { ExecutableCommand } from "src/Command";

export const Available: ExecutableCommand = {
  command: new SlashCommandBuilder()
    .setName("available")
    .setDescription("Returns the available game server types"),
  run: async (interaction: ChatInputCommandInteraction) => {
    // TODO notify client that request is processed to prevent timeout?

    // TODO request actual list of available game servers from api
    const availableServers = [
      "Placeholder Craft",
      "Trouble in Placeholder Town",
      "World of Placeholder",
    ];

    let content = "Currently available game servers:\n";

    availableServers.forEach((server) => {
      content = content.concat("\n- " + server);
    });

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
