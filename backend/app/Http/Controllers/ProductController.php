<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\DoughTypes;
use App\Models\Product;
use App\Models\ProductDoughType;
use App\Models\ProductVariant;
use App\Models\Sizes;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('category')
            ->where('status', '1')
            ->get();
        return response()->json(['data' => $products], 200);
    }

    public function getAllProductsWithToppingsByCategory(string $slug)
    {
        $category = Category::where('status', '1')
            ->where('slug', $slug)
            ->first();

        if (!$category) {
            return response()->json(['message' => 'Category not found!'], 404);
        }

        $id = $category['id'];

        $products = Product::with('toppings')
            // ->with('category')
            ->where('category_id', $id)
            ->where('status', '1')
            ->get();

        // dd($products);

        if (!$products) { // || isEmpty($products) hata veriyor!
            return response()->json(['message' => 'Product Not Found'], 404);
        }

        return response()->json(['data' => $products, 'category' => $category]);
    }

    public function getProductDetails(string $categorySlug, string $productSlug)
    {

        $category = Category::where('status', '1')
            ->where('slug', $categorySlug)
            ->firstOrFail();

        $categoryId = $category['id'];

        $product = Product::with('toppings')
            ->with('doughTypes')
            ->with('productVariants')
            ->where('category_id', $categoryId)
            ->where('slug', $productSlug)
            ->where('status', '1')
            ->first();

        // dd($product);

        $variants = $product->productVariants;

        foreach ($variants as $variant) {
            $variant->sizes;
        }


        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        // dd($product);

        $productId = $product['id'];

        // $sizes = Sizes::where('status', '1')->get();

        // $sizes = Sizes::where('status', '1')
        //     ->get();

        // dd($sizes);

        if ($category->slug === 'pizza') {

            $doughTypes = DoughTypes::get();

            return response()->json(['data' => $product, 'doughTypes' => $doughTypes]);
        }

        return response()->json(['data' => $product]);
    }


    public function showProductWithCategoriesAndToppings(int $productId)
    {
        $product = $productId;
        $getProduct = Product::where('status', '1')->get();
        return response()->json(['data' => $getProduct], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $user = User::find(1);

        // $user->roles()->attach($roleId);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
