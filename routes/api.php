<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

//use App\http\Controllers\CattleController;
//use App\http\Controllers\MilkTallyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::get('/user', function () {
    return Auth::id();
});


/*Route::get('/cattles', [CattleController::class,'index']);
Route::post('/cattle/store', [CattleController::class,'store']);
Route::get('/cattle/show', [CattleController::class,'store']);*/


Route::resource('cattles', App\Http\Controllers\CattleController::class);
Route::get('/cattles/search/{string}', [App\Http\Controllers\CattleController::class,'search']);

Route::resource('/milktally',App\Http\Controllers\MilkTallyController::class);
Route::get('/milktally/check/{$cattle_id}/{$date}',[App\Http\Controllers\MilkTallyController::class, 'check_record']);
Route::get('/milktally/check/{cattle}/{date}',[App\Http\Controllers\MilkTallyController::class, 'checkrecord']);