const express = require("express");
const env = require("dotenv").config();
const PORT = process.env.PORT || 500;
const Route = require("./routes/v1");
const errorHandler = require("./middlewares/error.middleware");
const connectionDb = require("./config/db.connection");
const app = express();
const cors = require("cors");
// enable cors

connectionDb();
app.use(express.json());
app.use(cors());
app.use("/v1/", Route);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}...`);
});
