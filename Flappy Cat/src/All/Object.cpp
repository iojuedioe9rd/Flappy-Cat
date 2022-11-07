#include "Object.hpp"
#include "../2D/Tex/TextureManager.hpp"

Object::Object()
{
	tex = NULL;
}

void Object::Render()
{

}

void Object::CreateTexture(const char* address, SDL_Renderer* ren)
{
	tex = TextureManager::Texture(address, ren);
}

Tex* Object::GetTex()
{
	return tex;
}


