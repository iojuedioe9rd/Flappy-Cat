#pragma once

#ifndef VEC_EXPORTS
#define VEC_API __declspec(dllexport)
#else
#define VEC_API __declspec(dllimport)
#endif // !VEC_EXPORTS
