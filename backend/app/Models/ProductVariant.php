<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductVariant extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    // public function sluggable(): array
    // {
    //     return [
    //         'slug' => [
    //             'source' => ['title', 'name']
    //         ]
    //     ];
    // }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function sizes(): BelongsTo
    {
        return $this->belongsTo(Sizes::class, 'size_id');
    }
}
