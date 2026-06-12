<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductToppingController extends Controller
{
    public function setProductTopping()
    {
        $porducts = Product::findOrFail('toppings');
    }
}
