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
      Schema::create("artwork_production_places", function (Blueprint $table) {
         $table->id();
         $table->timestamps();
         $table->foreignIdFor(
            \App\Models\Artwork::class,
            "artwork_id"
         )->constrained("artworks")->onDelete("cascade");
         $table->foreignIdFor(
            \App\Models\ProductionPlace::class,
            "production_place_id"
         )->constrained("production_places")->onDelete("cascade");
      });
   }

   /**
    * Reverse the migrations.
    */
   public function down(): void
   {
      Schema::dropIfExists("artwork_production_places");
   }
};
