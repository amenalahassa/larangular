<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();


Route::get('/home', [\App\Http\Controllers\FactureController::class, 'index'])->name('home');


Route::post('article/find',[\App\Http\Controllers\FactureController::class, 'findArticle']);
Route::post('client/find',[\App\Http\Controllers\FactureController::class, 'findClient']);
Route::post('commande/save',[\App\Http\Controllers\FactureController::class, 'saveCmd']);


Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return view('auth.login');
    });
});

//   If a route is missing, do

Route::fallback(function($exception) {
    if(Auth::check())
    {
        return view('pages.welcome');
    }
    else {
        return view('auth.login');
    }
});
