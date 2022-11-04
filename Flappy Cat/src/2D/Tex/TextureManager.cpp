#include "TextureManager.hpp"
#include "Texture.hpp"

Tex* TextureManager::Texture(const char* filelocation, SDL_Renderer* ren)
{
	SDL_Surface* surface;
	surface = IMG_Load(filelocation);

	SDL_Texture* tex;
	tex = SDL_CreateTextureFromSurface(ren, surface);

	Tex* v = new Tex(tex);

	return v;
}
