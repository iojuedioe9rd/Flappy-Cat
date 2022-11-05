#include "GameLoop.hpp"
#include <iostream>
using namespace std;

GameLoop::GameLoop()
{
	window = NULL;
	renderer = NULL;
	GameState = false;
	playerPos = vec2();
}

bool GameLoop::getGameState()
{
	return GameState;
}

void GameLoop::Update()
{
	srcPlayer.h = playerH;
	srcPlayer.w = playerW ;
	srcPlayer.x = srcPlayer.y - 0;

	
	playerPos.x = 10;
	playerPos.y++;

	destPlayer.w = playerW;
	destPlayer.h = playerH;
	destPlayer.x = playerPos.x;
	destPlayer.y = playerPos.y;

}

void GameLoop::Init()
{
	SDL_Init(SDL_INIT_EVERYTHING);
	window = SDL_CreateWindow("Flappy Cat", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, WIDTH, HEIGHT, SDL_WINDOW_RESIZABLE);
	if (window)
	{
		renderer = SDL_CreateRenderer(window, -1, 0);

		if (!renderer)
		{
			cout << "renderer is not created!";
			return;
		}

		cout << "renderer and window is created!" << endl << "^_^"; 
		GameState = true;
		player = TextureManager::Texture("res/Cat.png", renderer);
		background = TextureManager::Texture("res/Background.png", renderer);
	}
	else
	{
		cout << "window is not created!" << endl;
	};

	
}

void GameLoop::Event()
{
	SDL_PollEvent(&event);
	if (event.type == SDL_QUIT)
	{
		GameState = false;
	}
	if (event.type == SDL_KEYDOWN)
	{
		if (event.key.keysym.sym == SDLK_UP)
		{
			cout << "pressed!" << endl;
		}
	}
	
}

void GameLoop::Render()
{
	SDL_RenderClear(renderer);
	SDL_RenderCopy(renderer, background->tex, NULL, NULL);
	SDL_RenderCopy(renderer, player->tex, &srcPlayer, &destPlayer);
	
	SDL_RenderPresent(renderer);

}

void GameLoop::Clear()
{
	SDL_DestroyRenderer(renderer);
	SDL_DestroyWindow(window);
}
