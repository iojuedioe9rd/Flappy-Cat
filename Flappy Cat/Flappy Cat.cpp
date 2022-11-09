// Flappy Cat.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include "src/GamePlay/GameLoop.hpp"

GameLoop* g = new GameLoop();

int main(int argc, char** argv)
{
    double first;
    double last = 0;
    

    g->Init();

    while (g->getGameState())
    {
        
        g->Render();
        g->Event();
        g->Update();
        first = SDL_GetTicks();
        if (first - last < 16.7)
        {
            SDL_Delay(1 / -(first - last));
        }
        std::cout << first - last << std::endl;
        last = first;
    }
    g->Clear();
    
    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
