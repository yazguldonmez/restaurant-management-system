<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/slider', [CarouselController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/menu/{category}', [ProductController::class, 'getAllProductsWithToppingsByCategory']);
Route::get('/menu/{category}/{product}', [ProductController::class, 'getProductDetails']);
Route::get('/category', [CategoryController::class, 'index']);

//auth
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware(['auth:sanctum']);

//dashboard
Route::prefix('dashboard')
    ->middleware(['auth:sanctum'])
    ->name('dashboard')
    ->group(function () {
        Route::get('/', [DashboardController::class, 'index']);
    });
