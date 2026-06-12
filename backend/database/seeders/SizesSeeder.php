<?php

namespace Database\Seeders;

use App\Models\ProductVariant;
use App\Models\Sizes;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SizesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Sizes::create([
            'name'             => 'Small - 6 slices',
            'status'           => '1'
        ]);

         Sizes::create([
            'name'             => 'Medium - 12 slices',
            'status'           => '1'
        ]);

         Sizes::create([
            'name'             => 'Large - 18 slices',
            'status'           => '1'
        ]);

         Sizes::create([
            'name'             => 'standart',
            'status'           => '1'
        ]);
    }
}
