#pragma once

#include "Texture.hpp"
#include <SDL_render.h>

class TextureManager
{
public:
	static Tex* Texture(const char* filelocation, SDL_Renderer* ren);
};

