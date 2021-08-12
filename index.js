const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
require("dotenv").config();

const db = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wapcc.mongodb.net/venturepactDB?retryWrites=true&w=majority`;

mongoose.connect(
    db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    () => console.log("connected to db")
);

const api = require("./routes/api");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("client"));

app.use("/api", api);

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/client/index.html");
});

app.listen(PORT, function() {
    console.log(`server running...${PORT}`);
});