// Setup
var tmi = require("tmi.js")
var secret = require('./secret')

// tmi.js Config
var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "kapap_bot",
        password: secret.oauth
    },
    channels: ["bobdanoob"]
}

var client = new tmi.client(options);

// tmi.js Connect
client.on('connected', function(address, port) {
	console.log("*** Kapap_Bot Connected ***");
})

// // tmi.js Messages
// client.on('chat', function(channel, userstate, message, self){
// 	newCommand = message.toLowerCase();

// 	if(newCommand === "!kappa"){
// 		client.say('bobdanoob', 'http://imgur.com/reszHmQ')
// 	}
// 	if(newCommand === "!nickelkapap"){
// 		client.say('bobdanoob', 'http://imgur.com/ApXsnwo')
// 	}

// })

// Connect the client to the server..
client.connect()