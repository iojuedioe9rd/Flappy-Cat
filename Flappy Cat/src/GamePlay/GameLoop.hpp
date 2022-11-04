#pragma once

#include<SDL.h>
#include "../2D/Tex/TextureManager.hpp"

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
public:
	GameLoop();
	bool getGameState();
	void Init();
	void Event();
	void Render();
	void Clear();
};

