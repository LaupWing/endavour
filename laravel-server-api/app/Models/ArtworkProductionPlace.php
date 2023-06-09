<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtworkProductionPlace extends Model
{
   use HasFactory;

   protected $fillable = [
      "production_place_id",
      "artwork_id"
   ];
}
