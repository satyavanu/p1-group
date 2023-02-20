import express, { Application } from "express";
import http from "http";
import bodyParser from "body-parser";

const app: Application = express();
const server = http.createServer(app);

// Setup
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));

// ANONYMOUS ROUTES
const authAnonymousRoutes = require("./routes/tickets/tickets");
app.use("/tickets", authAnonymousRoutes);

server.listen(5000);

export default app;
