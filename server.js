const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.redirect(`/${uuidv4()}`);
});
app.get("/:room", (req, res) => {
	res.render("room", { roomId: req.params.room });
});

app.listen(port, () => console.log(`Listening on Localhost: ${port}`));
