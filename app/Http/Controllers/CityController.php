<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->get('q');

        $cities = City::select(['id', 'name as text'])->where('name', 'like', "%$query%")->get();

        return new JsonResponse(['results' => $cities]);
    }
}
