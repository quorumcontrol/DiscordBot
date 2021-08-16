
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const TOKEN = process.env['TOKEN']
const APP_ID = process.env['APP_ID']
const GUILD_ID = process.env['GUILD_ID']

const commands = [{
  name: 'fight',
  description: 'Replies with Pong!'
}]; 

const rest = new REST({ version: '9' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(APP_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();