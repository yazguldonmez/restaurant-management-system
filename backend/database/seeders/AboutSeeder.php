<?php

namespace Database\Seeders;

use App\Models\About;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        About::create([
            'title'   => 'We Are Feane',
            'image'   => 'uploads/about-img.png',
            'content' => 'At Feane, we believe that food is more than just a meal — it’s an experience that brings people together.
                          From our freshly baked pizzas to our juicy burgers and handcrafted desserts, every item on our menu is made with love, premium ingredients, and a pinch of creativity.
                          Our chefs take pride in blending traditional recipes with modern tastes, creating dishes that not only satisfy your hunger but also excite your senses. Whether you’re dining in, ordering online, or grabbing a quick bite, Feane is here to serve freshness and happiness on every plate.
                          Come taste the difference — where every bite tells a story of quality, passion, and perfection.',
            'status' => '1',
        ]);
    }
}
