import * as PIXI from "pixi.js";

import type { Map, Texture, Tileset } from "~/types";

export const createApplication = () => {
	const app = new PIXI.Application();

	document.body.appendChild(app.view);

	return app;
};

export const createSprites = (map: Map, textures: Texture[], tileset: Tileset) => {
	const { layers } = map;
	const { tilewidth, tileheight } = tileset;
	const sprites: PIXI.Sprite[] = [];

	layers.forEach((layer, zIndex) => {
		const { data, width } = layer;

		data.forEach((id, i) => {
			const texture = textures.find((texture) => texture.id === id - 1);

			if (texture) {
				const sprite = new PIXI.Sprite(texture.data);
				const position = i % width;

				sprite.x = position * tilewidth;
				sprite.y = Math.floor(i / width) * tileheight;
				sprite.zIndex = zIndex;

				sprites.push(sprite);
			}
		});
	});

	return sprites;
};

export const createTextures = (baseTexture: PIXI.BaseTexture, tileset: Tileset) => {
	const { imagewidth, tilecount, tilewidth, tileheight } = tileset;
	const columns = imagewidth / tilewidth;
	const textures: Texture[] = [];

	for (let i = 0; i < tilecount; i++) {
		const x = (i % columns) * tilewidth;
		const y = Math.floor(i / columns) * tileheight;

		const frame = new PIXI.Rectangle(x, y, tilewidth, tileheight);
		const texture = new PIXI.Texture(baseTexture, frame);

		textures.push({
			id: i,
			data: texture,
		});
	}

	return textures;
};

export const drawMap = (app: PIXI.Application, sprites: PIXI.Sprite[]) => {
	sprites.forEach((sprite) => app.stage.addChild(sprite));
};
