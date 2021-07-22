const db = require ("./db/connection");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const checkServer = require("./utils/checkServer");