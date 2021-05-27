const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

const players = {};

app.get("/updates", (req, res) => {
  res.send(JSON.stringify(players));
});

app.post("/start", (req, res) => {
  const username = req.body.username;
  players[username] = 0;
  res.send("{}");
});

app.post("/bingo", (req, res) => {
  const username = req.body.username;
  if (players[username] !== undefined) {
    players[username] = players[username] + 1;
  }
  res.send("{}");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
