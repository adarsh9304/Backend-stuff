const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser')

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Handle socket.io connections
io.on('connection', (socket) => {
  console.log('A client connected');

  // Handle incoming chat messages
  socket.on('chat message', (msg) => {
    console.log('Message:', msg);
    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

// Handle HTTP requests to send messages
app.post('/send-message', (req, res) => {
  const { message } = req.body;
  
  // Emit the message to all connected clients
  io.emit('chat message', message);
  
  res.status(200).send('Message sent successfully');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
