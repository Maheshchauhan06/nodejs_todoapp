const express = require("express");
const mongoose = require("mongoose");
const { valdate } = require("./Authutil");

// variables
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
mongoose.set("strictQuery", false);

// mongodb connect using mongoose
// const monourl = `mongodb+srv://mahesh:mahesh66@cluster0.1yayr1v.mongodb.net/?retryWrites=true&w=majority`;

// mongoose
//   .connect(monourl)
//   .then((res) => {})
//   .catch((error) => {
//     console.log(error);
//   });

app.get("/", (req, res) => {
  res.send("hi you are live");
});
// get for register
app.get("/register", (req, res) => {
  res.render("registerpage");
});
// get for login
app.get("/login", (req, res) => {
  res.render("loginpage");
});

// post req
app.post("/register", async (req, res) => {
  const { name, email, password, username } = req.body;
  console.log(req.body);
  try {
    await valdate({ name, email, password, username });
  } catch (error) {
    console.log(error);
    return res.send({
      status: 402,
      error: error,
    });
  }

  // create a user and store it in db
  return res.send({
    status: 200,
    msg: "register done",
    data: req.body,
  });
});

app.listen(port);
