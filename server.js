// Import json-server
const jsonServer = require("json-server");

// Create the server
const server = jsonServer.create();

// Point to your `db.json` file
const router = jsonServer.router("db.json");

// Use default middlewares (like logging, CORS, etc.)
const middlewares = jsonServer.defaults();

// Get the PORT from environment variables or default to 3001
const PORT = process.env.PORT || 3001;

// Apply the middlewares and router
server.use(middlewares);
server.use(router);

// Start the server
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});