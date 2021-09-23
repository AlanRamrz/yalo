const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const ErrorHandler = require('./src/utils/ErrorHandler');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/yalo', routes);
app.use(ErrorHandler);

app.listen(3000);
