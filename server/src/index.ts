import express from "express";

const PORT = Number(process.env.PORT) || 3000;

const app = express();

app.get("/", (_, res) => {
	res.send("Hello, world!!!");
});

app.listen(PORT, () => {
	console.log(`Server listening at port ${PORT}.`);
});
