const express = require("express");
const app = express();
// express in version 4.16.0 (no need for bodyParser)
app.use(express.json());

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use("/api/employees", require("./routes/api/employees"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started and running on port ${PORT}`)
);
