
const express = require('express');
const path = require('path');
const config = require("./config/config")
const { createServer } = require("http")
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
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

io.on("connection", (socket) => {

    console.log("Yeni bağlantı:", socket.id);
});


const PORT = config.server.port;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

exports.io = { io }