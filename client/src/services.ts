import type { Map, Tileset } from "~/types";

export const fetchMap = async (): Promise<Map> => {
	const response = await fetch("http://localhost:3000/map");
	const data = await response.json();

	return data;
};

export const fetchTileset = async (): Promise<Tileset> => {
	const response = await fetch("http://localhost:3000/tileset");
	const data = await response.json();

	return data;
};
