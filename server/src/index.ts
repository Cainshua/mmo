import express from "express";

import map from "src/assets/maps/map.json";
import tileset from "src/assets/tilesets/tileset.json";

const PORT = Number(process.env.PORT) || 5000;

const app = express();

app.get("/map", (_, res) => {
	res.send(map);
});

app.get("/tileset", (_, res) => {
	res.send(tileset);
});

app.listen(PORT, () => {
	console.log(`Server listening at port ${PORT}.`);
});
