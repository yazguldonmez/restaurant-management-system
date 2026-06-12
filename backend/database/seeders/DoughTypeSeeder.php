<?php

namespace Database\Seeders;

use App\Models\DoughTypes;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoughTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DoughTypes::create([
            'name'          => 'Classic',
            'description'   => 'Classic style thin dough',
            'status'        => '1',
        ]);
        DoughTypes::create([
            'name'          => 'Italian',
            'description'   => 'Italian style traditional dough',
            'price'   => 7.50,
            'status'        => '1',
        ]);
    }
}
