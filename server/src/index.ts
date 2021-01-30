import chalk from "chalk";
import cors from "cors";
import express from "express";

import map from "~/assets/maps/map.json";
import tileset from "~/assets/tilesets/tileset.json";

const PORT = Number(process.env.PORT) || 3000;

const app = express();

app.use(cors());

app.get("/map", (_, res) => {
	res.send(map);
});

app.get("/tileset", (_, res) => {
	res.send(tileset);
});

app.listen(PORT, () => {
	console.log(`${chalk.whiteBright("Server running at")} ${chalk.cyanBright(`http://localhost:${PORT}`)}`);
});
