const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("AWS Cities!!!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
