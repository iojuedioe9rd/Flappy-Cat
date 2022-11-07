#pragma once
#include "../All/Object.hpp"

#define GAME_PLAYER
#define RD = 1

#ifdef RD
class Player : public Object
{
private:
public:
	
	GAME_PLAYER void Render(SDL_Renderer* ren, Tex* tex, SDL_Rect src, SDL_Rect dest);
};

#endif // RD


