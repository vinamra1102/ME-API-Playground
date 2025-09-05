// backend/src/app.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));

module.exports = app;