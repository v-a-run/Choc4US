const express = require("express");

const app = express();

app.listen(process.env.port || 5000, () => {
  console.log("Express server is running");
});
