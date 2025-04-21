
const express = require('express');
const path = require('path');
const config = require("./config/config")
const app = express();



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

const PORT = config.server.port;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
