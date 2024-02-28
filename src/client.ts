// Import Socket.IO client library
import io from 'socket.io-client';

// Define the URL of your backend server
const serverURL = 'http://localhost:3000';

// Connect to the Socket.IO server
const socket = io(serverURL);

// Listen for 'message' event from the server
socket.on('message', (payload) => {
    console.log('Received message from server:', payload);
});


socket.emit('joinRoom', "MrScript");


// Send a 'message' event to the server
socket.emit('message', 'Another hello from client!');


