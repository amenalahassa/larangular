<?php

namespace App\Http\Controllers;
use App\Models\Commande;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Barryvdh\Snappy\Facades\SnappyPdf as PDF;


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
        $factures = Commande::with('client',  'products')->where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')->limit(20)->get();
        return response()->json(['data' => $factures], 200);
    }

    public function find (Request $request)
    {
        $factures = Commande::with('client', 'products')->where('user_id', Auth::id())
            ->where('ref',  $request->data['item'])->get();
        return response()->json(['data' => $factures], 200);
    }


    public function delete (Request $request)
    {
        $factures = Commande::where('id', $request->data['item']);
        $factures->delete();
        return response()->json(null, 204);
    }


    public function download ($id)
    {
        $convocation = Commande::find($id);
        view()->share('convocation', $convocation);
        $pdfs = PDF::loadView('pages.pdf.convocation', $convocation)->setPaper('a4')->setOption('images', true)->setOption('no-outline', true);
        return $pdfs->download('Convocation-' . $convocation->identifiant . '.pdf');
    }




}
