<?php

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

Route::get('/', function () {
    //return view('auth.login');
    return Redirect::to('/login');
});

Auth::routes();

Route::get('logout', function () {
    Auth::logout();
    return Redirect::to('/');
});

//Route::get('/', [App\Http\Controllers\Auth\LoginController::class, 'index'])->name('home');

//Route::get('/home', [App\Http\Controllers\DashboardController::class, 'index'])->name('home');
Route::get('/dashboard', [App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
Route::get('/cattle', [App\Http\Controllers\DashboardController::class, 'index'])->name('cattle');
Route::get('/milktally', [App\Http\Controllers\DashboardController::class, 'index'])->name('milktally');