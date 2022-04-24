<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RacerTeamController;
use App\Http\Controllers\UserAuthController;

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

Route::group(['name' => 'all'], function() {
    Route::group(['name' => 'public'], function() {
        Route::post('/register', [UserAuthController::class, 'register']);
        Route::post('/login', [UserAuthController::class, 'login']);
    });
    Route::group(['name' => 'private'], function() {
        Route::apiResource('racer_teams', RacerTeamController::class)
            ->only(['index', 'show', 'store', 'update', 'destroy']);
    });
});
