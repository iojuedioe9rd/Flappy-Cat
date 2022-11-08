#include "Background.h"

void Background::Render(SDL_Renderer* ren, Tex* tex)
{
	SDL_RenderCopy(ren, GetTex()->tex, NULL, NULL);
}
