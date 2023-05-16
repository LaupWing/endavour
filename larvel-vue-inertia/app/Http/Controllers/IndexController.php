<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class IndexController extends Controller
{
   public function index() {
      $apiKey = env('RIJKS_MUSEUM_APIKEY');
      $url = "https://www.rijksmuseum.nl/api/nl/collection?key={$apiKey}";

      $response = Http::get($url);
      $data = $response->json();
      
      return inertia("Index/Index", [
         "data" => $data["artObjects"]
      ]);
   }
   public function show($id) {
      dd($id);
      return inertia("Index/Show");
   }
   public function search(Request $request) {
      $searchTerm = $request["searchTerm"];
      $apiKey = env('RIJKS_MUSEUM_APIKEY');
      $url = "https://www.rijksmuseum.nl/api/nl/collection?key={$apiKey}&q={$searchTerm}";
      $response = Http::get($url);
      $data = $response->json();

      return inertia("Index/Search", [
         "data" => $data["artObjects"]
      ]);
   }
}
