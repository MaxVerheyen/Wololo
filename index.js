require('dotenv').config();
const Discord = require('discord.js');
const { createReadStream } = require('fs');
const { join } = require('path');
const { joinVoiceChannel, createAudioPlayer, StreamType, createAudioResource } = require('@discordjs/voice');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] });

const player = createAudioPlayer();
// player.on('stateChange', (oldState, newState) => {
// 	console.log(`Audio player transitioned from ${oldState.status} to ${newState.status}`);
// });

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

function joinChannel(voiceChannel) {
	const connection = joinVoiceChannel({
		channelId: voiceChannel.id,
		guildId: voiceChannel.guild.id,
		adapterCreator: voiceChannel.guild.voiceAdapterCreator,
		selfDeaf: false,
		selfMute: false
	});
	return connection;
};

function playAudio(voiceChannel, taunt) {
	var connection = joinChannel(voiceChannel);
	// connection.on('stateChange', (oldState, newState) => {
	// 	console.log(`Connection transitioned from ${oldState.status} to ${newState.status}`);
	// });
	var resource = createAudioResource(createReadStream(join(__dirname, taunt), {
		inputType: StreamType.OggOpus,
	}));
	player.play(resource);
	connection.subscribe(player);
};

client.on('messageCreate', msg => {
	switch (msg.content) {
		case "taunt 1":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/1.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Yes.");
			break;
		case "taunt 2":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/2.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("No.");
			break;
		case "taunt 3":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/3.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Food please.");
			break;
		case "taunt 4":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/4.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Wood please.");
			break;
		case "taunt 5":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/5.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Gold please.");
			break;
		case "taunt 6":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/6.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Stone please.");
			break;
		case "taunt 7":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/7.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Ahh!");
			break;
		case "taunt 8":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/8.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("All hail, king of the losers!");
			break;
		case "taunt 9":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/9.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Ooh!");
			break;
		case "taunt 10":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/10.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("I'll beat you back to Age of Empires.");
			break;
		case "taunt 11":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/11.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("(Herb laugh)");
			break;
		case "taunt 12":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/12.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Ah! being rushed.");
			break;
		case "taunt 13":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/13.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Sure, blame it on your ISP.");
			break;
		case "taunt 14":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/14.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Start the game already!");
			break;
		case "taunt 15":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/15.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Don't point that thing at me!");
			break;
		case "taunt 16":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/16.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Enemy sighted!");
			break;
		case "taunt 17":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/17.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("It is good to be the king.");
			break;
		case "taunt 18":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/18.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Monk! I need a monk!");
			break;
		case "taunt 19":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/19.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Long time, no siege.");
			break;
		case "taunt 20":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/20.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("My granny could scrap better than that.");
			break;
		case "taunt 21":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/21.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Nice town, I'll take it.");
			break;
		case "taunt 22":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/22.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Quit touching me!");
			break;
		case "taunt 23":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/23.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Raiding party!");
			break;
		case "taunt 24":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/24.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Dadgum.");
			break;
		case "taunt 25":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/25.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Eh, smite me.");
			break;
		case "taunt 26":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/26.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("The wonder, the wonder, the... no!");
			break;
		case "taunt 27":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/27.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("You played two hours to die like this?");
			break;
		case "taunt 28":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/28.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Yeah, well, you should see the other guy.");
			break;
		case "taunt 29":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/29.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Roggan.");
			break;
		case "taunt 30":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/30.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Wololo.");
			break;
		case "taunt 31":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/31.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack an enemy now.");
			break;
		case "taunt 32":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/32.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Cease creating extra villagers.");
			break;
		case "taunt 33":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/33.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Create extra villagers.");
			break;
		case "taunt 34":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/34.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Build a navy.");
			break;
		case "taunt 35":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/35.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Stop building a navy.");
			break;
		case "taunt 36":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/36.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Wait for my signal to attack.");
			break;
		case "taunt 37":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/37.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Build a wonder.");
			break;
		case "taunt 38":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/38.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Give me your extra resources..");
			break;
		case "taunt 39":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/39.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("(Ally sound)");
			break;
		case "taunt 40":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/40.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("(Neutral sound)");
			break;
		case "taunt 41":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/41.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("(Enemy sound)");
			break;
		case "taunt 42":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/42.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("What age are you in?");
			break;
		case "taunt 43":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/43.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("What is your strategy?");
			break;
		case "taunt 44":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/44.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("How many resources do you have?");
			break;
		case "taunt 45":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/45.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Retreat now!");
			break;
		case "taunt 46":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/46.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Flare the location of your army.");
			break;
		case "taunt 47":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/47.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack in direction of the flared location.");
			break;
		case "taunt 48":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/48.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("I'm being attacked, please help!");
			break;
		case "taunt 49":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/49.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Build a forward base at the flared location.");
			break;
		case "taunt 50":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/50.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Build a fortification at the flared location.");
			break;
		case "taunt 51":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/51.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Keep your army close to mine and fight with me.");
			break;
		case "taunt 52":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/52.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Build a market at the flared location.");
			break;
		case "taunt 53":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/53.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Rebuild your base at the flared location..");
			break;
		case "taunt 54":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/54.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Build a wall between the two flared locations.");
			break;
		case "taunt 55":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/55.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Build a wall around your town.");
			break;
		case "taunt 56":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/56.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Train units which counter the enemy's army."); //
			break;
		case "taunt 57":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/57.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Stop training counter units.");
			break;
		case "taunt 58":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/58.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Prepare to send me all your resources so I can vanquish our foes!");
			break;
		case "taunt 59":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/59.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Stop sending me extra resources.");
			break;
		case "taunt 60":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/60.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Prepare to train a large army, I will send you as many resources as I can spare.");
			break;
		case "taunt 61":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/61.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack player 1! (Blue)");
			break;
		case "taunt 62":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/62.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack player 2! (Red)");
			break;
		case "taunt 63":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/63.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack player 3! (Green)");
			break;
		case "taunt 64":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/64.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack player 4! (Yellow)");
			break;
		case "taunt 65":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/65.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack player 5! (Cyan).");
			break;
		case "taunt 66":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/66.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack player 6! (Purple)");
			break;
		case "taunt 67":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/67.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack player 7! (Gray)");
			break;
		case "taunt 68":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/68.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack player 8! (Orange)");
			break;
		case "taunt 69":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/69.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Delete the object on the flared location.");
			break;
		case "taunt 70":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/70.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Delete your excess villagers.");
			break;
		case "taunt 71":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/71.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Delete excess warships.");
			break;
		case "taunt 72":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/72.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Focus on training infantry units.");
			break;
		case "taunt 73":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/73.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Focus on training cavalry units.");
			break;
		case "taunt 74":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/74.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Focus on training ranged units.");
			break;
		case "taunt 75":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/75.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Focus on training warships.");
			break;
		case "taunt 76":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/76.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Militia.");
			break;
		case "taunt 77":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/77.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Archers.");
			break;
		case "taunt 78":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/78.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Skirmishers.");
			break;
		case "taunt 79":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/79.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with a mix of Archers and Skirmishers.");
			break;
		case "taunt 80":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/80.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Scout Cavalry.");
			break;
		case "taunt 81":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/81.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Men-at-Arms.");
			break;
		case "taunt 82":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/82.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Eagle Scouts.");
			break;
		case "taunt 83":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/83.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Towers.");
			break;
		case "taunt 84":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/84.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Crossbowmen.");
			break;
		case "taunt 85":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/85.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Cavalry Archers.");
			break;
		case "taunt 86":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/86.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Unique Units.");
			break;
		case "taunt 87":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/87.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Knights.");
			break;
		case "taunt 88":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/88.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Battle Elephants.");
			break;
		case "taunt 89":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/89.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Scorpions.");
			break;
		case "taunt 90":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/90.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Monks.");
			break;
		case "taunt 91":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/91.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Monks and Mangonels.");
			break;
		case "taunt 92":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/92.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Eagle Warriors.");
			break;
		case "taunt 93":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/93.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Halberdiers and Rams.");
			break;
		case "taunt 94":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/94.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Elite Eagle Warriors.");
			break;
		case "taunt 95":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/95.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Arbalests.");
			break;
		case "taunt 96":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/96.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Champions.");
			break;
		case "taunt 97":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/97.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Galleys.");
			break;
		case "taunt 98":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/98.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Fire Galleys.");
			break;
		case "taunt 99":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/99.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Demolition Rafts.");
			break;
		case "taunt 100":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/100.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with War Galleys.");
			break;
		case "taunt 101":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/101.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Fire Ships.");
			break;
		case "taunt 102":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/102.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Attack the enemy with Unique Warships.");
			break;
		case "taunt 103":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/103.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Use an Onager to cut down trees at the flared location.");
			break;
		case "taunt 104":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/104.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("Don't resign!");
			break;
		case "taunt 105":
			var voiceChannel = msg.member.voice.channel;
			if (voiceChannel != null) {
				const taunt = './taunt/105.ogg';
				playAudio(voiceChannel, taunt);
			}
			msg.channel.send("You can resign again.");
			break;
	}
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token