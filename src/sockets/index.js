const { store, list } = require('../models/chats.js');

module.exports = (io, socket) => {
  socket.on('ping', (data) => {
    socket.emit('ping-response', data);
  });
  // join private room
  socket.on('join-room', (data) => {
    const { id, username, password } = data;
    socket.join(id);
  });

  // post private room
  socket.on('send-message', (data) => {
    store(data)
      .then(async () => {
        const listChats = await list(data.sender, data.receiver);
        io.to(data.receiver).emit('send-message-response', listChats.rows);
      })
      .catch((err) => {
        console.log('error send message');
        console.log(err);
      });
  });

  // get history chat
  socket.on('chat-history', async (data) => {
    try {
      console.log(data);
      const listChats = await list(data.sender, data.receiver);
      io.to(data.sender).emit('send-message-response', listChats.rows);
    } catch (err) {
      console.log('Error chat-history');
      console.log(err);
    }
  });
};
