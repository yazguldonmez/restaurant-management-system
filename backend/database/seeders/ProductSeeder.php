<?php

namespace Database\Seeders;

use App\Models\Product;
use Cocur\Slugify\Slugify;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name'             => 'Pepperoni Pizza',
            'image'            => 'uploads/281.jpg',
            // 'size'             => 'Medium',
            'category_id'      => 1,
            // 'dough_type_id'    => 2,
            'status'           => '1'

        ]);

        Product::create([
            'name'             => 'Classic Pizza',
            'image'            => 'uploads/f3.png',
            // 'size'             => 'Medium',
            'category_id'      => 1,
            // 'dough_type_id'    => 1,
            'status'           => '1'

        ]);

        Product::create([
            'name'             => 'Hamburger',
            'image'            => 'uploads/29709.jpg',
            'category_id'      => 2,
            // 'price'            => 12.99,
            'status'           => '1'

        ]);
    }
}
