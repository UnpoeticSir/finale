require("dotenv").config();

module.exports = {
    // BOT DETAILS
    token: process.env.TOKEN || " ", // your bot token
    prefix: process.env.PREFIX || "!",
    color: process.env.EMBED_COLOR || "#d99a3d", // your embeded hex color
    owner: process.env.OWNER_ID || "1000713605504827483", // your bot Owners ID
    guildLogs: process.env.GUILD_LOGS || " ", // your server join left logs Channel ID
    leaveTimeout: process.env.LEAVE_TIMEOUT || "1", // set leave TimeOut when bot was alone 1000 = 1sec

    // PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch", // recomended using "ytmsearch". You can change this to: "ytsearch" / "scsearch" / "spotify".
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // recomended using "ytmsearch". You can change this to: "ytsearch" / "scsearch" / "spsearch (need Lavasrc plugin)".
        clientID: process.env.SPOTIFY_ID || " ", // your Spotify Client ID
        clientSecret: process.env.SPOTIFY_SECRET || " ", // your Spotify Client Secret
        reconnectTries: "Infinity", // total attemps to try if reconnect failed. you can change it to "Infinity" for unlimited attemps.
        playlistLimit: 1, // 1 = 100 tracks
        albumLimit: 2, // 1 = 50 tracks
        artistLimit: 2, // 1 = 50 tracks
        searchMarket: "us",
    },
    nodes: [
        {
            name: process.env.NODE_NAME || "Main Node", // lavalink node name (anything you want)
            host: process.env.NODE_HOST || "Lavalink-hosting11.cheesynadash.repl.co", // lavalink host
            port: parseInt(process.env.NODE_PORT || "443"), //lavalink port
            password: process.env.NODE_PASSWORD || "UnpoeticNad", //lavalink pass/auth
            secure: parseBoolean(process.env.NODE_SECURE || "true"), //lavalink secure "true/false"
        },
    ],

    // LINK DETAILS
    mongoUri: process.env.MONGO_URI || "mongodb+srv://sestro:sestro@cluster0.zldd64l.mongodb.net/?retryWrites=true&w=majority", // your MongoDB Url
    supportUrl: process.env.SUPPORT_URL || "https://discord.gg/PwJSX4FQ4m", // your Support Server Link
    inviteUrl: process.env.INVITE_URL || "https://discord.com/api/oauth2/authorize?client_id=1100277275309654017&permissions=50568944807799&scope=bot", // your Bot Invite Link
    voteUrl: process.env.VOTE_URL || " ", // your Bot Vote Link [DONT FORGET TO VOTE MY BOT :)]
    imageUrl: process.env.IMAGE_URL || "https://i.kym-cdn.com/entries/icons/original/000/040/595/dfc.jpg", // your Bot Banner Imange Link to use on "help" & "about" command
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
