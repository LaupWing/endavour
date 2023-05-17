<?php

namespace Database\Factories;

use App\Models\Artwork;
use App\Models\ProductionPlace;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ArtworkProductionPlaceFactory extends Factory
{
   /**
    * Define the model's default state.
    *
    * @return array<string, mixed>
    */
   public function definition(): array
   {
      return [
         "artwork_id" => Artwork::all()->random()->id,
         "production_place_id" => ProductionPlace::all()->random()->id
      ];
   }
}
