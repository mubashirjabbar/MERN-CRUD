require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./src/routes");
const port = process.env.PORT || 3000;

app.use("/api", routes);
// send back a 404 error for any unknown api request
app.use('*', (req, res,) => {
    res.send({message:'Route does not exist'}).status(404)
});
//port
app.listen(port, () => {
  console.log(`Listening on ${port} port`);
});
