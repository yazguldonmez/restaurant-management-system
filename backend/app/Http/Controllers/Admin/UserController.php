<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $this->authorize('viewAny', User::class);

        $users = User::with('roles')
            ->get();

        if ($users->isEmpty()) {
            return response()->json(['users' => []], 200);
        }

        $roles = Role::get();

        if ($roles->isEmpty()) {
            return response()->json(['roles' => []], 200);
        }

        return response()->json(['users' => $users, 'roles' => $roles], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

        $user = User::where('id', $id)
            ->with('roles')
            ->first();


        if ($user === null) {
            return response()->json(['message' => 'user not found!'], 200);
        }

        $this->authorize('view', $user);

        return response()->json(['user' => $user], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::where('id', $id)
            ->with('roles')
            ->first();

        if (!$user) {
            return response()->json(['message' => 'user not found!'], 404);
        }

        $this->authorize('update', $user);

        $validate = $request->validate([
            'name' => 'required|max:60',
            'roles' => 'required|array',
            'roles.*' => 'exists:roles,id',
        ]);

        try {
            DB::transaction(function () use ($user, $validate) {

                $update = $user->update(['name' => $validate['name']]);

                if (!$update) {
                   throw new \RuntimeException('User could not be updated');
                }

                $user->roles()->sync($validate['roles']);

                // throw new \RuntimeException('Transaction rollback test');

            });

            $user->load('roles');

            return response()->json(['message' => 'User updated!', 'user' => $user], 200);
        } catch (\Throwable $e) {
            report($e);

            return response()->json([
                'message' => 'An unexpected error occurred'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::where('id', $id)
            ->first();

        if (!$user) {
            return response()->json(['message' => 'user not found!'], 404);
        }

        $this->authorize('delete', $user);

        $delete = $user->delete();

        if (!$delete) {
            return response()->json(['message' => 'User could not be deleted'], 500);
        }

        return response()->json(['message' => 'User deleted'], 200);
    }
}
