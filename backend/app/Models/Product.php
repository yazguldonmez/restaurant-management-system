<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    use Sluggable;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => ['title', 'name']
            ]
        ];
    }

    // public function doughType(): BelongsTo
    // {
    //     return $this->belongsTo(DoughTypes::class);
    // }

    public function doughTypes(): BelongsToMany
    {
        return $this->belongsToMany(
            DoughTypes::class,
            'product_dough_types',
            'product_id',
            'dough_type_id',
        );
    }

    public function toppings(): BelongsToMany
    {
        return $this->belongsToMany(
            Toppings::class,
            'product_toppings',
            'product_id',
            'topping_id',
        );
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function productVariants(): HasMany
    {
        return $this->hasMany(ProductVariant::class);
    }
}
