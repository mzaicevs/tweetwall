import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as Twit from 'twit';
import * as cors from 'cors';
import {Config} from "./config/config";

const twit = new Twit({
    access_token: Config.access_token,
    access_token_secret: Config.access_token_secret,
    consumer_key: Config.consumer_key,
    consumer_secret: Config.consumer_secret,
});
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let stream: Twit.Stream;

wss.on('connection', (ws: WebSocket) => {
  console.log('connected to WebSocket');
  ws.on('message', (message: string) => {
    if (stream) {
      stream.stop();
    }
    console.log('Start streaming for ' + message);
    stream = twit.stream('statuses/filter', { track: [ message ] });
    stream.on('tweet', tweet => {
      if (ws.readyState === WebSocket.OPEN) {
        console.log(message + ': ' +  tweet.user.screen_name);
        ws.send(JSON.stringify(tweet));
      }
    });
  });
});

app.use(cors({origin: Config.host}));

app.get('/search/:keyword', function(req, res) {
	twit.get('search/tweets', {q: req.params.keyword, count: 10}, function(error, data) {
		res.send(data)
	});
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

server.listen(process.env.PORT || Config.port, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
