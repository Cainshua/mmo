import * as PIXI from "pixi.js";

type Layer = {
	data: number[];
	width: number;
};

export type Map = {
	layers: Layer[];
};

export type Texture = {
	id: number;
	data: PIXI.Texture;
};

export type Tileset = {
	imagewidth: number;
	tilecount: number;
	tilewidth: number;
	tileheight: number;
};
