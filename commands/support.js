const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
      const XLink = "https://x.com/RavagedWorks";
      const githubLink = "https://github.com/RavagedKing";

      const embed = new EmbedBuilder()
        .setColor('#b300ff')
        .setAuthor({
          name: 'De rien les gars!',
        })
        .setDescription(`\n🍈 **Follow on:**\n- GitHub - ${githubLink}\n- X - ${XLink}`)
        .setImage('https://images-ext-1.discordapp.net/external/uS2UFLS7XJsvheFom6cEm3-wUy6L_wLBXIkXwA43n54/https/i.kym-cdn.com/photos/images/newsfeed/002/638/553/929.jpg?format=webp')
        .setTimestamp();

      const button1 = new ButtonBuilder()
        .setLabel('Le rêve de Thomas')
        .setURL('https://i.redd.it/f8maeka25atb1.jpg')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Clique Giannix')
        .setURL('https://www.youtube.com/watch?v=ZrrQMlUzar8')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Lel')
        .setURL(XLink)
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder().addComponents(button1, button2, button3);

      return interaction.reply({ embeds: [embed], components: [row] });
      
    } catch (e) {
      console.error(e);
    }
  },
};
