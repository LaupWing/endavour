<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artwork extends Model
{
   use HasFactory;
   protected $fillable = [
      "objectNumber",
      "title",
      "principalOrFirstMaker",
      "longTitle",
      "permitDownload"
   ];

   public function productionPlaces()
   {
      return $this->belongsToMany(ProductionPlace::class, "artwork_production_places");
   }
}
