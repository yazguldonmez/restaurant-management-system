<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_dough_types', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('dough_type_id');
            $table->unsignedBigInteger('product_id');
            $table->timestamps();

            $table->foreign('dough_type_id')->references('id')->on('dough_types')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_dough_types');
    }
};
