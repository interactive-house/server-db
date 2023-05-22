/**
 * This is a test of front end javascript file
 * It tries to connect to the server and open a socket communication
 * It succesfully makes a connection and commincated data with the server on lamp on/Off
 * This was developed before the project meeting one for testing
 */


// Connect to Socket.io server
const socket = io();

// Handle lamp button clicks
const lampOnBtn = document.getElementById('lamp-on-btn');
const lampOffBtn = document.getElementById('lamp-off-btn');
const lampResult = document.getElementById('lamp-result');

lampOnBtn.addEventListener('click', () => {
  console.log('Sending lamp:on message to server');
  socket.emit('lamp:on', {});
});

lampOffBtn.addEventListener('click', () => {
  console.log('Sending lamp:off message to server');
  socket.emit('lamp:off', {});
});

// Listen for lamp status updates from server
socket.on('lamp:status', (data) => {
  console.log(`Received lamp:status message with status: ${data.status}`);

  // Update lamp status for all connected clients
  lampResult.textContent = `Lamp is ${data.status}`;
});
