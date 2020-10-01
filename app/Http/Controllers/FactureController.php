<?php

namespace App\Http\Controllers;
use App\Models\Commande;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FactureController extends Controller
{
    public function index ()
    {
        return view('pages.welcome');
    }


    public function show ()
    {
        return view('pages.liste');
    }


    public function list ()
    {
        $factures = Commande::with('client')->where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')->limit(20)->get();

        foreach ($factures as $facture)
        {
            $facture['product_count'] = $facture->productCount();
        }

        return response()->json(['data' => $factures], 200);
    }

    public function find (Request $request)
    {
        $factures = Commande::with('client')->where('user_id', Auth::id())
            ->where('ref',  $request->data['item'])->get();

        foreach ($factures as $facture)
        {
            $facture['product_count'] = $facture->productCount();
        }

        return response()->json(['data' => $factures], 200);
    }


    public function delete (Request $request)
    {
        $factures = Commande::where('id', $request->data['item']);
        $factures->delete();
        return response()->json(null, 204);
    }






}
