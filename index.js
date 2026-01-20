const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world how are you?");
});
app.post("/users", (req, res) => {
  console.log("users post method");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  res.send(newUser);
});

app.get("/users", (req, res) => {
  res.send([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 40 },
  ]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
