'use strict';
const express = require('express');
const app = express();
const port = 3000;
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');

app.use('/cat', catRoute);

app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


