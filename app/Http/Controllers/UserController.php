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
        $user->ref = strtoupper($request->ref);
        $user->fill($request->only(['tel', 'adr', 'tva', 'devise']));
        $user->save();
        return redirect()->route('home');

    }

    public function info () {
        if (Auth::check()){
            $data = [];
            $data['tva'] = Auth::user()->tva;
            $data['devise'] = Auth::user()->devise;
            return response()->json(['data' => $data], 200);
        }
        return response()->json(null, 204);
    }

}
