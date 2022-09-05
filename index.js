const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



// app.use("/api/v1/tools", toolsRoutes);


app.get("/", (req, res) => {
    res.send("Hello Buddy The surver is Running");
});

app.all("*", (req, res) => {
    res.send("NO route found.");
});

app.listen(port, () => {
    console.log(`Surver is Running on port ${port}`);
});