<?php

namespace Database\Seeders;

use App\Models\Toppings;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ToppingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Toppings::create([
            'name' => '100% Mozerella',
            'price' => 0.99,
            'status' => '1',
        ]);

        Toppings::create([
            'name' => 'Pepperoni',
            'price' => 0.99,
            'status' => '1'
        ]);

        Toppings::create([
            'name' => 'Peppers',
            'price' => 0.99,
            'status' => '1'
        ]);

        Toppings::create([
            'name' => 'Meat',
            'price' => 0.99,
            'status' => '1'
        ]);

        Toppings::create([
            'name' => 'Cheddar',
            'price' => 0.99,
            'status' => '1'
        ]);
    }
}
