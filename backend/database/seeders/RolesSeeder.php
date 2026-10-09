<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\Roles;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'name'  => 'admin',
            'status' => '1'
        ]);

        Role::create([
            'name'  => 'owner',
            'status' => '1'
        ]);

        Role::create([
            'name'  => 'author',
            'status' => '1'
        ]);
    }
}
