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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->longText('seo_code')->nullable();
            $table->string('image');
            $table->string('big_image');
            $table->string('alt_image')->nullable();
            $table->integer('category_id');
            $table->boolean('is_full_image')->default(false);
            $table->json('specifications')->nullable();
            $table->json('slug')->nullable();
            $table->string('download_file');
            $table->string('download_link')->nullable();
            $table->text('win_r_link')->nullable();
            $table->string('size_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
