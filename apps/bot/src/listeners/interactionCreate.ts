import { ChatInputCommandInteraction, Client, Interaction } from "discord.js";
import { Commands } from "src/Commands";

const interactionCreate = (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) {
      return;
    }

    await handleSlashCommand(interaction);
  });
};

const handleSlashCommand = async (
  interaction: ChatInputCommandInteraction
): Promise<void> => {
  // find matching command if it exists
  const slashCommand = Commands.get(interaction.commandName);
  if (!slashCommand) {
    interaction.followUp({ content: "An error has occurred" });
    return;
  }

  await interaction.deferReply();

  slashCommand.run(interaction.client, interaction);
};

export default interactionCreate;
