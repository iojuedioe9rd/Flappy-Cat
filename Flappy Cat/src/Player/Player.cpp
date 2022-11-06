
#include "Player.hpp"
#ifdef RD



void Player::Render(SDL_Renderer* ren, Tex* tex, SDL_Rect src, SDL_Rect dest)
{
	SDL_RenderCopy(ren, tex->tex, &src, &dest);
}
#endif