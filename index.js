// Bring in the server
const server = require("./server");

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
