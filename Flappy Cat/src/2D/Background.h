#pragma once

#include "../All/Object.hpp"
class Background : public Object
{
public:
	void Render(SDL_Renderer* ren, Tex* tex);
};

