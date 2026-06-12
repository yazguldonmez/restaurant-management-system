<?php

namespace Database\Seeders;

use App\Models\Carousel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarouselSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Carousel::create([
            'title' => 'Fast Food Restaurant',
            'content' => 'Sizzling flavors, freshly prepared meals, and mouth-watering bites crafted with passion to satisfy every craving. Step into a world where freshness meets taste, and every dish brings joy with every bite.',
            'button_text' => 'Order Now',
            'link' => '/order',
            'status' => '1'
        ]);

        Carousel::create([
            'title' => 'Fresh Ingredients Daily',
            'content' => 'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.',
            'button_text' => 'Book a Table',
            'link' => '/reservation',
            'status' => '1'
        ]);

        Carousel::create([
            'title' => 'Special Offers',
            'content' => 'Your favorite flavors now come with unbeatable value! Explore our weekly discounts, seasonal specials, and exclusive combo deals designed to satisfy your cravings without stretching your budget.',
            'button_text' => 'View Offers',
            'link' => '/offers',
            'status' => '1'
        ]);

        Carousel::create([
            'title' => 'Experience Flavor That Speaks Louder Than Words',
            'content' => 'From sizzling fries to juicy burgers, every mouth-watering moment crafted with love and served fresh.',
            'button_text' => 'Order Now',
            'link' => '/order',
            'status' => '0'
        ]);
    }
}
