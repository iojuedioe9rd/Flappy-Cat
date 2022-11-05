#pragma once

#include<SDL.h>
#include "../2D/Tex/TextureManager.hpp"
#include "vec2.h"

class GameLoop
{
private:
	const int HEIGHT = 640;
	const int WIDTH = 800;
	bool GameState;
	SDL_Event event;
	SDL_Window* window;
	SDL_Renderer* renderer;

	Tex* player;
	Tex* background;

	vec2 playerPos;
	SDL_Rect srcPlayer, destPlayer;
	int playerW = 60, playerH = 80;
public:
	GameLoop();
	bool getGameState();
	void Update();
	void Init();
	void Event();
	void Render();
	void Clear();
};

