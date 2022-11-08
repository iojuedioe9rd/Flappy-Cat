#pragma once
#include "../All/Object.hpp"

#define GAME_PLAYER
#define RD = 1

#ifdef RD
class Player : public Object
{
private:
	double g = 1;
public:
	GAME_PLAYER void Update();
	GAME_PLAYER void Render(SDL_Renderer* ren);
};

#endif // RD


