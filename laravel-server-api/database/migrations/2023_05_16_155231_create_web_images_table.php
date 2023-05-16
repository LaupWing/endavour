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
      Schema::create("web_images", function (Blueprint $table) {
         $table->id();
         $table->string("guid")->unique();
         $table->timestamps();
         $table->foreignIdFor(
            \App\Models\Artwork::class,
            "artwork_id"
         )->constrained("artworks")->onDelete("cascade");
         $table->integer("offsetPercentageX")->default(0);
         $table->integer("offsetPercentageY")->default(0);
         $table->integer("width");
         $table->integer("height");
         $table->string("url");
      });
   }

   /**
    * Reverse the migrations.
    */
   public function down(): void
   {
      Schema::dropIfExists("web_images");
   }
};
