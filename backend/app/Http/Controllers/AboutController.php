<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index(): JsonResponse
    {
        $about = About::where('status', '1')->first();
        return response()->json(['data' => $about], 200);
    }
}
