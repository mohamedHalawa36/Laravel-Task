<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{
    function getAllUsers(){
        $users = User::all();
        return response()->json([
            "status"=>"success",
            "users"=>$users
        ]);
    }

    function addUser(Request $request){
        $user = User::create([
            "firstname" => $request->input("firstname"),
            "lastname" => $request->input("lastname"),
            "age" => $request->input("age"),
            "email" => $request->input("email"),
            "password" => $request->input("password"),
        ]);

        return response()->json([
            "status"=>"success",
            "user"=>$user
        ],201);
    }
}
