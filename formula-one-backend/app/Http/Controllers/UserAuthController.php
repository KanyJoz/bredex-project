<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserAuthLoginRequest;
use App\Http\Requests\UserAuthRegisterRequest;
use App\Models\User;

class UserAuthController extends Controller
{
    public function register(UserAuthRegisterRequest $request)
    {
        $userDataFromRequest = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ];

        $userDataFromRequest['password'] = Hash::make($request->password);

        $user = User::create($userDataFromRequest);

        $token = $user->createToken('API Token')->accessToken;

        return response([ 'user' => $user, 'token' => $token]);
    }

    public function login(UserAuthLoginRequest $request)
    {
        $userDataFromRequest = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ];

        if (!auth()->attempt($userDataFromRequest)) {
            return response([
                'error_message' => 'Incorrect Details. Please try again'
            ]);
        }

        $token = auth()->user()->createToken('API Token')->accessToken;

        return response(['user' => auth()->user(), 'token' => $token]);

    }
}
