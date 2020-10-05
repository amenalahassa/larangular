<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfilController extends Controller
{
    public function show () {
        return view('pages.about');
    }

    public function info ()
    {
        $info = [];
        $info['user'] = Auth::user()->get(['img', 'name', 'adr', 'email', 'tel', 'devise', 'tva', 'ref'])[0];
        $info['countFacture'] = Auth::user()->facture->count();
        $info['countArticle'] = Auth::user()->totalArticles();
        $info['ca'] = Auth::user()->totalFactureCA();
        $info['totalTva'] = Auth::user()->totalFactureCA() - Auth::user()->totalFactureCAHT();
        $info['totalDu'] = Auth::user()->totalDu();

        return response()->json(['data' => $info], 200);
    }

}
