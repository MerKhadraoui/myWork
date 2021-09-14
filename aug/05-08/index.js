require("dotenv").config();
const http = require("http");
const PORT = process.env.PORT || 5000;
// console.log(process.env.PORT);
const firstRes = function (req, res) {
  res.writeHead(200);
  res.end("Hey I'm server ");
};
const server = http.createServer(firstRes);
server.listen(PORT, () => console.log(`server is listen en PORT=${PORT}`));
