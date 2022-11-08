
#include "Player.hpp"
#ifdef RD



void Player::Update()
{
	g = g + .5;

	src.x = 0;
	src.y = 0;
	src.w = 60;
	src.h = 80;

	dest.x = 0;
	dest.y = g;
	dest.w = 60;
	dest.h = 80;
}

void Player::Render(SDL_Renderer* ren)
{
	SDL_RenderCopy(ren, GetTex()->tex, &src, &dest);
}
#endif