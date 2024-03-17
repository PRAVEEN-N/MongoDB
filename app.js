const express = require('express');
const blogRouter = require('./routes/BlogRoutes');

const app = express();

app.use(express.json());

app.use('/api/blogs', blogRouter);

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
});
