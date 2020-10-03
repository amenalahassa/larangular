<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function show ()
    {
        if (Auth::user()->tel !== null || Auth::user()->tva !== null)
        {
            return redirect()->route('home');
        }
        return view('auth.about');
    }

    public function save (UserRequest $request)
    {
        if(isset($request->photo)){
            $path = $request->file('photo')->storeAs('public', "profil-" . time().'.'.$request->file('photo')->getClientOriginalExtension() );
        }
        else {
            $path = "";
        }
        $user = Auth::user();
        $user->img = $path;
        $user->fill($request->only(['tel', 'adr', 'tva', 'devise',
            'ref']));
        $user->save();
        return redirect()->route('home');

    }

}
