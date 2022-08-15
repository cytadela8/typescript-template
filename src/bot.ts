import { REST, Routes, Client, GatewayIntentBits } from "discord.js";

import { getLogger } from "./logging";
import { unwrap } from "./utils";

import "dotenv/config";
import axios from "axios";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "ser",
    description: "Gives ser status",
  },
];

const logger = getLogger("bot");

const TOKEN = unwrap(process.env.TOKEN);
const CLIENT_ID = unwrap(process.env.CLIENT_ID);

const rest = new REST({ version: "10" }).setToken(TOKEN);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  logger.info(`Logged in as ${client.user?.tag ?? "unknown"}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case "ping": {
      const subLogger = logger.child({ id: interaction.id });
      subLogger.debug("Got a Ping!");
      await interaction.reply("Pong!");
      subLogger.debug("Pong!");
      break;
    }

    case "ser": {
      const subLogger = logger.child({ id: interaction.id });
      subLogger.debug("Got a Ping!");
      const response = await axios.get("http://czyjestser.www/ser.txt");
      await interaction.reply(response.data as string);
      subLogger.debug("Pong!");
      client.user?.setPresence({});
      break;
    }
  }
});

const main = async (): Promise<void> => {
  logger.info("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  logger.info("Successfully reloaded application (/) commands.");

  await client.login(TOKEN);

  logger.info("Client logged-in");
};

if (require.main === module) {
  main()
    .then(() => {
      logger.info("Started!");
    })
    .catch((err: Error) => {
      logger.error(logger.exceptions.getAllInfo(err));
      throw err;
    });
}
