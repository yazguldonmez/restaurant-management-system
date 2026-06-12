<?php

namespace Database\Seeders;

use App\Models\ProductTopping;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductToppingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductTopping::create([
            'product_id'  => 1,
            'topping_id'  => 1,
        ]);

        ProductTopping::create([
            'product_id'  => 1,
            'topping_id'  => 2,
        ]);

        ProductTopping::create([
            'product_id'  => 1,
            'topping_id'  => 3,
        ]);

        ProductTopping::create([
            'product_id'  => 2,
            'topping_id'  => 4,
        ]);

        ProductTopping::create([
            'product_id'  => 2,
            'topping_id'  => 5,
        ]);
        ProductTopping::create([
            'product_id'  => 3,
            'topping_id'  => 4,
        ]);
        ProductTopping::create([
            'product_id'  => 3,
            'topping_id'  => 5,
        ]);
    }
}
