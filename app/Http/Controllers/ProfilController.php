<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfilController extends Controller
{
    public function show ()
    {
        if (Auth::user()->tel === null || Auth::user()->tva === null)
        {
            return redirect()->route('about.user');
        }
        return view('pages.about');
    }

    public function info ()
    {
        $info['user'] = User::find(Auth::id())->only('img', 'name', 'adr', 'email', 'tel', 'devise', 'tva', 'ref');
        $info['countFacture'] = Auth::user()->facture->count();
        $info['countArticle'] = Auth::user()->totalArticles();
        $info['ca'] = Auth::user()->totalFactureCA();
        $info['totalTva'] = Auth::user()->totalFactureCA() - Auth::user()->totalFactureCAHT();
        $info['totalDu'] = Auth::user()->totalDu();
        return response()->json(['data' => $info], 200);
    }

    public function updateImg (Request $request)
    {
        $validatedData = $request->validate([
            'photo' => ['required','file','mimes:png,jpg,jpeg'],
        ]);
        $path = $request->file('photo')->storeAs('public', "profil-" . time().'.'.$request->file('photo')->getClientOriginalExtension() );
        unlink(storage_path("app/". Auth::user()->img));
        Auth::user()->img = $path;
        Auth::user()->save();
        return response()->json(null, 204);
    }

    public function updateName (Request $request)
    {
        $validatedData = $request->validate([
            'data' => ['required','string', 'max:255'],
        ]);
        Auth::user()->name = $request->data;
        Auth::user()->save();
        return response()->json(null, 204);
    }

    public function updateAdresse (Request $request)
    {
        $validatedData = $request->validate([
            'data' => ['required','string', 'max:255'],
        ]);
        Auth::user()->adr = $request->data;
        Auth::user()->save();
        return response()->json(null, 204);
    }

    public function updateEmail (Request $request)
    {
        $validatedData = $request->validate([
            'data' =>  ['required', 'string', 'email', 'max:255', 'unique:users,email'],
        ]);
        Auth::user()->email = $request->data;
        Auth::user()->save();
        return response()->json(null, 204);
    }

    public function updateTel (Request $request)
    {
        $validatedData = $request->validate([
            'data' => ['required', 'string', 'max:255'],
        ]);
        Auth::user()->tel = $request->data;
        Auth::user()->save();
        return response()->json(null, 204);
    }

}
