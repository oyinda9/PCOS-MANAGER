const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Path to your db.json
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());

// Use default middlewares (logger, static files, etc.)
server.use(middlewares);

// Use the router
server.use(router);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
