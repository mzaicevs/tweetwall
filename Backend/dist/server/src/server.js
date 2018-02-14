"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const Twit = require("twit");
const cors = require("cors");
const config_1 = require("./config/config");
const twit = new Twit({
    access_token: config_1.Config.access_token,
    access_token_secret: config_1.Config.access_token,
    consumer_key: config_1.Config.access_token,
    consumer_secret: config_1.Config.access_token,
});
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let stream;
wss.on('connection', (ws) => {
    console.log('connected to WebSocket');
    ws.on('message', (message) => {
        if (stream) {
            stream.stop();
        }
        console.log('Start streaming for ' + message);
        stream = twit.stream('statuses/filter', { track: [message] });
        stream.on('tweet', tweet => {
            if (ws.readyState === WebSocket.OPEN) {
                console.log(message + ': ' + tweet.user.screen_name);
                ws.send(JSON.stringify(tweet));
            }
        });
    });
});
app.use(cors({ origin: config_1.Config.host }));
app.get('/search/:keyword', function (req, res) {
    twit.get('search/tweets', { q: req.params.keyword, count: 10 }, function (error, data) {
        res.send(data);
    });
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
server.listen(process.env.PORT || config_1.Config.port, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
//# sourceMappingURL=server.js.map