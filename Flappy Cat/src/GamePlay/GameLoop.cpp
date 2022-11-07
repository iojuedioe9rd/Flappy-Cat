#include "GameLoop.hpp"
#include <iostream>
using namespace std;

GameLoop::GameLoop()
{
	window = NULL;
	renderer = NULL;
	GameState = false;
	
	
}

bool GameLoop::getGameState()
{
	return GameState;
}

void GameLoop::Update()
{
	p.src.h = playerH;
	p.src.w = playerW ;
	p.src.x = p.src.y - 0;

	
	p.dest.x = 10;
	p.dest.y++;

	p.dest.w = playerW;
	p.dest.h = playerH;
	

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
		p = Player();
		p.CreateTexture("res/Cat.png", renderer);
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
	SDL_RenderCopy(renderer, p.GetTex()->tex, &p.src, &p.dest);
	
	SDL_RenderPresent(renderer);

}

void GameLoop::Clear()
{
	SDL_DestroyRenderer(renderer);
	SDL_DestroyWindow(window);
}
