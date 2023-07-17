const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getAllFortunes, getFortune, createFortune,deleteFortune, updateFortune  } = require('./controller')

app.get("/api/fortunes", getAllFortunes);
app.get("/api/fortunes/:index", getFortune);
app.post("/api/fortunes", createFortune);
app.delete("/api/fortunes/:index", deleteFortune);
app.put("/api/fortunes/:index", updateFortune)


app.listen(4000, () => console.log("Server running on 4000"));
