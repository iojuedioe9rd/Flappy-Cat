#pragma once
#include <SDL.h>

#ifndef TIMER_EXPORTS
#define TIMER_API __declspec(dllexport)
#else
#define TIMER_API __declspec(dllimport)
#endif // !TIMER_EXPORTS


class Timer
{
private:

	static Timer* sInstance;

	unsigned int mStartTicks;
	unsigned int mElapsedTicks;
	float mDeltaTime;
	float mTimeScale;

public:
	
	TIMER_API static Timer* Instance();
	
	TIMER_API static void Release();

	TIMER_API void Reset();
	TIMER_API float DeltaTime();

	TIMER_API void TimeScale(float t);
	TIMER_API float TimeScale();

	TIMER_API void Update();

private:
	Timer();
	~Timer();
};

