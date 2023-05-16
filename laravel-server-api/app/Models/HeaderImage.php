<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeaderImage extends Model
{
   use HasFactory;

   protected $fillable = [
      "offsetPercentageX",
      "offsetPercentageU",
      "width",
      "height",
      "url"
   ];

   public function artwork()
   {
      return $this->belongsTo(Artwork::class);
   }
}
