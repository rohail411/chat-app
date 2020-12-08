const app = require('express')();
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
	console.log('connection Established');
	socket.on('join', ({ name, room }, callback) => {
		if (true) callback({ error: 'error' });
	});
	socket.on('disconnect', () => {
		console.log('Dis Connected');
	});
});

app.use(router);

app.listen(POST, () => console.log('Server Start'));
