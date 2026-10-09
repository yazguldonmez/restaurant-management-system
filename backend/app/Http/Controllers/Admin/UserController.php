<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $this->authorize('viewAny', User::class);

        $users = User::with('roles')
            ->get();


        if ($users->isEmpty()) {
            return response()->json(['users' => []], 200);
        }

        return response()->json(['users' => $users], 200);
    }

    // public function deleteUser(int $id)
    // {

    // }

    // public function assignRole()
    // {

    // }
}
