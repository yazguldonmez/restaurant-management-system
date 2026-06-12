<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name'      => 'Pizza',
            'status'    => '1',
        ]);

        Category::create([
            'name'       => 'Burger',
            'status'     => '1',
        ]);
    }
}
