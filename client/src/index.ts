import * as PIXI from "pixi.js";

import { createApplication, createSprites, createTextures, drawMap } from "~/helpers";
import { fetchMap, fetchTileset } from "~/services";
import type { Texture } from "~/types";

const init = async () => {
	const map = await fetchMap();
	const tileset = await fetchTileset();

	const baseTexture = PIXI.Texture.from("assets/sprites/tilesets/tileset.png").baseTexture;

	if (baseTexture) {
		const app = createApplication();
		const textures: Texture[] = createTextures(baseTexture, tileset);
		const sprites: PIXI.Sprite[] = createSprites(map, textures, tileset);

		drawMap(app, sprites);
	}
};

init();
