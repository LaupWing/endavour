<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Artwork>
 */
class ArtworkFactory extends Factory
{
   /**
    * Define the model's default state.
    *
    * @return array<string, mixed>
    */
   public function definition(): array
   {
      return [
         "objectNumber" => fake()->slug(),
         "title" => fake()->text(),
         "hasImage" => fake()->boolean(),
         "principalOrFirstMaker" => fake()->name(),
         "longTitle" => fake()->text(),
         "showImage" => fake()->boolean(),
         "permitDownload" => fake()->boolean()
      ];
   }
}
