<?php

use App\Http\Controllers\CommandeController;
use App\Http\Controllers\FactureController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\UserController;
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


Route::middleware('auth')->group(function () {

    Route::get('/about', [UserController::class, 'show'])->name('about.user');
    Route::post('/about', [UserController::class, 'save']);


    Route::get('/home', [FactureController::class, 'index'])->name('home');
    Route::get('/list', [FactureController::class, 'show'])->name('list');


    Route::get('/forward', function () {
        return view('pages.forward');
    })->name('forward');


    Route::prefix('user')->group(function () {
        Route::get('info',[UserController::class, 'info']);
        Route::get('profil',[ProfilController::class, 'show'])->name('profil');
        Route::get('about',[ProfilController::class, 'info']);

        Route::prefix('update')->group(function () {
            Route::post('image',[ProfilController::class, 'updateImg']);
            Route::post('name',[ProfilController::class, 'updateName']);
            Route::post('adresse',[ProfilController::class, 'updateAdresse']);
            Route::post('email',[ProfilController::class, 'updateEmail']);
            Route::post('tel',[ProfilController::class, 'updateTel']);
        });
    });

    Route::post('article/find',[CommandeController::class, 'findArticle']);
    Route::post('commande/save',[CommandeController::class, 'saveCmd']);
    Route::post('client/find',[CommandeController::class, 'findClient']);

    Route::get('facture/list',[FactureController::class, 'list']);
    Route::post('facture/find',[FactureController::class, 'find']);

    Route::get('download/{id}',[FactureController::class, 'download']);
});


Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return view('auth.login');
    });
});

//   If a route is missing and because, angular don't use routing, do

Route::fallback(function($exception) {
    if(Auth::check())
    {
        return view('pages.welcome');
    }
    else {
        return view('pages.404');
    }
});
