<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class FactureController extends Controller
{
    public function index ()
    {
        return view('pages.welcome');
    }


    public function findArticle (Request $request)
    {
        $articles = Article::where('libelle', 'like',  '%'.$request->data['item'].'%')->get();
        return response()->json(['data' => $articles], 200);
    }

}
