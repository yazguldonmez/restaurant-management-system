<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\ProductDoughType;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            CarouselSeeder::class,
            AboutSeeder::class,
            CategorySeeder::class,
            DoughTypeSeeder::class,
            ToppingsSeeder::class,
            ProductSeeder::class,
            SizesSeeder::class,
            ProductVariantSeeder::class,
            ProductToppingSeeder::class,
            ProductDoughTypeSeeder::class,
        ]);
    }
}
