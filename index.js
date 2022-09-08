const express = require("express");
const cors = require("cors");
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
const userRoute = require("./routes/users.route.js")


app.use(cors());
app.use(express.json());



app.use("/user", userRoute);


app.get("/", (req, res) => {
    res.send("Hello Buddy The surver is Running vercel");
});

app.all("*", (req, res) => {
    res.send("NO route found.");
});

app.listen(port, () => {
    console.log(`Surver is Running on port ${port}`);
});