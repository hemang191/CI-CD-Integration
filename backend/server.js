const http = require("http");
require("dotenv").config();

const { connectDB } = require("./DB/index");

connectDB();
const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
