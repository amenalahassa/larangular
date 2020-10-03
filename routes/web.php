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


Route::get('/about', [\App\Http\Controllers\UserController::class, 'show'])->name('about.user');
Route::post('/about', [\App\Http\Controllers\UserController::class, 'save']);


Route::get('/home', [\App\Http\Controllers\FactureController::class, 'index'])->name('home');
Route::get('/list', [\App\Http\Controllers\FactureController::class, 'show'])->name('list');


Route::prefix('user')->group(function () {
    Route::get('info',[\App\Http\Controllers\UserController::class, 'info']);

});


Route::post('article/find',[\App\Http\Controllers\CommandeController::class, 'findArticle']);
Route::post('commande/save',[\App\Http\Controllers\CommandeController::class, 'saveCmd']);
Route::post('client/find',[\App\Http\Controllers\CommandeController::class, 'findClient']);

Route::get('facture/list',[\App\Http\Controllers\FactureController::class, 'list']);
Route::post('facture/delete',[\App\Http\Controllers\FactureController::class, 'delete']);
Route::post('facture/find',[\App\Http\Controllers\FactureController::class, 'find']);

Route::get('download/{id}',[\App\Http\Controllers\FactureController::class, 'download']);


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
