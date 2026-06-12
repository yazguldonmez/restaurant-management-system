<?php

namespace Database\Seeders;

use App\Models\ProductVariant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductVariant::create([
            'size_id'        => 1,
            'price'          => 12.50,
            'product_id'     => 1,
            'is_default'     => false,
            'status'         => '1',
        ]);

        ProductVariant::create([
            'size_id'        => 2,
            'price'          => 14.50,
            'product_id'     => 1,
            'is_default'     => true,
            'status'         => '1',
        ]);

        ProductVariant::create([
            'size_id'        => 3,
            'price'          => 16.50,
            'product_id'     => 1,
            'is_default'     => false,
            'status'         => '1',
        ]);
        ProductVariant::create([
            'size_id'        => 1,
            'price'          => 13.50,
            'product_id'     => 2,
            'is_default'     => false,
            'status'         => '1',
        ]);

        ProductVariant::create([
            'size_id'        => 2,
            'price'          => 15.50,
            'product_id'     => 2,
            'is_default'     => true,
            'status'         => '1',
        ]);

        ProductVariant::create([
            'size_id'        => 3,
            'price'          => 17.50,
            'product_id'     => 2,
            'is_default'     => false,
            'status'         => '1',
        ]);

        ProductVariant::create([
            'size_id'        => 4,
            'price'          => 12.50,
            'product_id'     => 3,
            'is_default'     => true,
            'status'         => '1',
        ]);
    }
}
