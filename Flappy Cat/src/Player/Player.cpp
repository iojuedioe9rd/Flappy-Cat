
#include "Player.hpp"
#include <Timer.hpp>
#include <iostream>
#ifdef RD



Player::Player()
{
	
}

void Player::G()
{
	if (isJumping)
	{
		accelerator1 = accelerator1 + 0.035;
		accelerator2 = accelerator2 + 0.035;
		jumpHeight = jumpHeight + g;
		Ypos = Ypos + g + accelerator1 + accelerator2 + jumpHeight;

		dest.x = 25;
		dest.y = Ypos;
		dest.w = 60;
		dest.h = 80;
	}
	

	Ypos = Ypos + (g);
	dest.x = 25;
	dest.y = Ypos;
	dest.w = 60;
	dest.h = 80;
}

void Player::Jump()
{
	if (jumpTimer - lastJump > 180)
	{
		accelerator1 = 0;
		accelerator2 = 0;

		isJumping = true;
		lastJump = jumpTimer;
	}
	else
	{
		G();
	}
}



void Player::Update()
{
	jumpTimer = SDL_GetTicks();

	std::cout << g + (0.2 * Timer::Instance()->DeltaTime() * 10);

	g = g + (0.2 *20 * Timer::Instance()->DeltaTime());

	src.x = 0;
	src.y = 0;
	src.w = 60;
	src.h = 80;

	dest.x = 0;
	dest.y = g;
	dest.w = 60;
	dest.h = 80;

	G();
}

void Player::Render(SDL_Renderer* ren)
{
	SDL_RenderCopy(ren, GetTex()->tex, &src, &dest);
}
#endif