const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const connection = mongoose.connection;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });
connection.on("error", console.error.bind(console, "connection error: "));
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// API (needs to be kept above catch all routes)
app.get("/api", function (request, response) {
    response.send("hello world");
});

// Accessing the path module
const path = require("path");
// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});