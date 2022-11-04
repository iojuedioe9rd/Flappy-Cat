#pragma once
#include <SDL_image.h>


class Tex
{
public:
	SDL_Texture* tex;

	Tex(SDL_Texture* tex);
	~Tex();
	
	static Tex* New(SDL_Texture* tex);
};

