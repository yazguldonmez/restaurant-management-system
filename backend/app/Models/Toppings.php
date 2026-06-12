<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Toppings extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'status'];

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(
            Product::class,
            'product_toppings',
            'topping_id',
            'product_id',
        );
    }
}
