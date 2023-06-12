// Import packages
const express = require("express");
const home = require("./routes/home");
const test = require("./routes/test");
const cors = require('cors');

// Middlewares
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/home", home);
app.use("/test", test);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
