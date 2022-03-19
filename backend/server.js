const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/ejffl', require('./routes/leagueRoutes'));

app.listen(port, () => {
    console.log(`server start on http://localhost:${port}`);
})
