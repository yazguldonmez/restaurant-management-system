"<?php

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
            Schema::create('product_toppings', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('topping_id');
                $table->unsignedBigInteger('product_id');
                // $table->float('price', 8, 2);
                $table->timestamps();

                $table->foreign('topping_id')->references('id')->on('toppings')->onDelete('cascade');
                $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            });
        }

        /**
         * Reverse the migrations.
         */
        public function down(): void
        {
            Schema::dropIfExists('product_toppings');
        }
    };
