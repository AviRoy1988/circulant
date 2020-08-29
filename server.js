const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (err, response) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).send({ success: response });
    }
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server listening on port " + port);
});
