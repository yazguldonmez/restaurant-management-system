<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create([
            'name'  => 'user.view',
            'group' => 'User',
            'status' => '1'
        ]);

        Permission::create([
            'name'  => 'user.edit',
            'group' => 'User',
            'status' => '1'
        ]);

        Permission::create([
            'name'  => 'user.delete',
            'group' => 'User',
            'status' => '1'
        ]);
    }
}
