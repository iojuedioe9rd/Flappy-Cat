#pragma once
#include "../All/Object.hpp"

#define GAME_PLAYER
#define RD = 1

#ifdef RD
class Player : public Object
{
private:
	double g;
	float Get();
public:
	Player();
	GAME_PLAYER void Update();
	GAME_PLAYER void Render(SDL_Renderer* ren);
};

#endif // RD


