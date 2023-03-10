const express = require("express");

function Server() {
  this.app = express();

  this.app.get("/health", (req, res) =>
    res.status(200).send("✅ Web Service is healthy")
  );

  this.start = () => {
    const PORT = process.env.PORT || 3000;

    this.app.listen(PORT, () =>
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
    );
  };
}

module.exports = { Server };
