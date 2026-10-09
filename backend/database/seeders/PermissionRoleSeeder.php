<?php

namespace Database\Seeders;

use App\Models\PermissionRole;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PermissionRole::create([
            'permission_id'  => 1,
            'role_id' => 1
        ]);

        PermissionRole::create([
            'permission_id'  => 2,
            'role_id' => 1
        ]);

        PermissionRole::create([
            'permission_id'  => 3,
            'role_id' => 1
        ]);
    }
}
