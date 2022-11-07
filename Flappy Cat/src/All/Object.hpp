#pragma once

#include "../2D/Tex/Texture.hpp"

class Object
{
private:
	
	Tex* tex;
public:
	void Render();
	void CreateTexture(const char* address, SDL_Renderer* ren);

	Tex* GetTex();

	SDL_Rect src, dest;

	Object();

};

