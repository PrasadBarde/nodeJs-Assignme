const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes

const blogRoute = require('./routes/blog');

//Router MIddlewares
// app.use(express.json());
app.use('/', blogRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// module.exports = app;
