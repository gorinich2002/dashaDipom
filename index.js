const express = require("express");
const app = express(); // create express app

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
// start express server on port 5000
app.listen(8080, () => {
  console.log("server started on port 8080");
  }
)
app.use(express.static("build"));

