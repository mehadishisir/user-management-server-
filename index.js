const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world how are you?    ");
});

app.get("/users", (req, res) => {
  res.send([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 40 },
  ]);
});
app.listen(port);
