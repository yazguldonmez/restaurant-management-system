<?php

namespace Database\Seeders;

use App\Models\ProductDoughType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductDoughTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductDoughType::create([
            'dough_type_id' => 1,
            'product_id' => 2,
        ]);

        ProductDoughType::create([
            'dough_type_id' => 2,
            'product_id' => 1,
        ]);
    }
}
