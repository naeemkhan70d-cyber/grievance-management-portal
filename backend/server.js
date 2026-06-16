const dns = require("dns");

// Temporary DNS Fix
dns.setServers([
  "8.8.8.8",
  "8.8.4.4",
]);

require("dotenv").config();

const app = require("./src/app");

const connectDB = require(
  "./src/config/db"
);

const PORT =
  process.env.PORT || 5000;

// First Connect Database
connectDB()
  .then(() => {
    // Then Start Server
    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(
      "Server Startup Failed:",
      error
    );
  });