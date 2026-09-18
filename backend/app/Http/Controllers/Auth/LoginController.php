<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Email or password are incorrect'], 401);
        }

        $request->session()->regenerate();

        return response()->json(['user' => Auth::user()], 200);
    }


    public function logout(Request $request): JsonResponse
    {
        // Auth::logout();

        //session auth kullanıldığı için bu şekilde çıkış yapılmalı
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(['message' => 'Succesfully Logout'], 200);
    }
}
