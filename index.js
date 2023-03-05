const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("express").Router();

const app = express();
const port = process.env.PORT || 5000;

const fetch = require("node-fetch");

async function getCityAndDescription() {
  try {
    const cityRes = await fetch("http://localhost:5001/city");
    const cityData = await cityRes.json();
    const descriptionRes = await fetch("http://localhost:5002/description");
    const descriptionData = await descriptionRes.json();
    return {
      city: cityData,
      description: descriptionData,
    };
  } catch (error) {
    return "ERROR";
  }
}

app.use(cors());

app.get("/", async (req, res) => {
  const { city, description } = await getCityAndDescription();

  if (city === "error" || description === "error") {
    return res.status(500).json({ message: "error" });
  }

  res.status(200).json(`${city.cityname} is ${description.description}`);
});

app.get("/", (req, res) => res.send("AWS Cities!!!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
