import express from "express";

// const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("server successful");
});

app.get("/dir", (req, res) => {
  res.send("I am new example route");
});

app.get("/dir2", (req, res) => {
  res.send("I am another new example route");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "1st joke",
      joke: "I am first joke",
    },
    {
      id: 2,
      title: "2nd joke",
      joke: "I am second joke",
    },
    {
      id: 3,
      title: "3rd joke",
      joke: "I am third joke",
    },
    {
      id: 4,
      title: "4th joke",
      joke: "I am fourth joke",
    },
    {
      id: 5,
      title: "5th joke",
      joke: "I am fifth joke",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
