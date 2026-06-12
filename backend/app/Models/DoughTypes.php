<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DoughTypes extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    // public function products(): hasMany
    // {
    //     return $this->hasMany(Product::class);
    // }

    public function product(): BelongsToMany
    {
        return $this->belongsToMany(
            Product::class,
            'product_dough_types',
            'product_id',
            'dough_type_id',

        );
    }
}
