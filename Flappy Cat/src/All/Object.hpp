#pragma once

#include "../2D/Tex/Texture.hpp"

class Object
{
private:
	SDL_Rect src, dest;
	Tex* tex;
public:
	void Render();
	void CreateTexture(const char* address, SDL_Renderer* ren, Tex* tex);

	Object();

};

