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
      Schema::create('artworks', function (Blueprint $table) {
         $table->id();
         $table->string("objectNumber")->unique();
         $table->string("title");
         $table->string("principalOrFirstMaker");
         $table->text("longTitle");
         $table->boolean("permitDownload");
         $table->foreignIdFor(
            \App\Models\ProductionPlace::class,
            "production_place_id"
         )->nullable()->constrained("production_places")->onDelete("cascade");
         $table->timestamps();
      });
   }

   /**
    * Reverse the migrations.
    */
   public function down(): void
   {
      Schema::dropIfExists('artworks');
   }
};
