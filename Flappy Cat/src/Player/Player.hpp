#pragma once
#include "../All/Object.hpp"

#define GAME_PLAYER
#define RD = 1

#ifdef RD
class Player : public Object
{
private:
	double g = .2;
	

	Tex* tex1;
	Tex* tex2;

	float Get();
public:
	Player();

	double Ypos = 256;
	double accelerator1 = 0;
	double accelerator2 = 0;
	bool isJumping = false;
	double jumpHeight = -6;
	double jumpTimer;
	double lastJump = 0;

	GAME_PLAYER void G();

	GAME_PLAYER void Jump();
	
	GAME_PLAYER void Update();
	GAME_PLAYER void Render(SDL_Renderer* ren);
};

#endif // RD


