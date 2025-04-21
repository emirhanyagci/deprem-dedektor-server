
const express = require('express');
const path = require('path');
const config = require("./config/config")
const { createServer } = require("http")
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*", // Be more restrictive in production
        methods: ["GET", "POST"]
    }
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));



app.use('/api', require('./routes'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'production' ? {} : err
    });
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Example: Handle earthquake updates
    socket.on('earthquake-update', (data) => {
        // Broadcast to all connected clients
        io.emit('new-earthquake', data);
    });
});

const PORT = config.server.port;

httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});