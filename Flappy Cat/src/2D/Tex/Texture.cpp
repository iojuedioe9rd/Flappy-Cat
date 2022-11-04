#include "Texture.hpp"

Tex::Tex(SDL_Texture* tex)
{
	this->tex = tex;
}

Tex::~Tex()
{
	SDL_DestroyTexture(tex);
}

Tex* Tex::New(SDL_Texture* tex)
{
	return new Tex(tex);
}
