const express = require('express');
const cors = require(`cors`);
const cookieParser = require('cookie-parser');
const bodyParser = require(`body-parser`);
require(`dotenv`).config();
const socket = require('socket.io');
const http = require('http');

const mainRouter = require('./src/routes/index');
const socketController = require('./src/sockets/index');

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', mainRouter);

const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('new user connect');
  socketController(io, socket);
});

server.listen(port, () => {
  console.log(`🚀 Example app listening on port ${port}`);
});
