<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Cattle;

class CattleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Cattle::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*return Cattle::create([
            'tag' => '1452',
            'name' => 'Cattle 1',
            'origin' => 'NDA',
            'breed' => 'Holstien',
            'dateofbirth' => '2021-01-21',
            'gender'=> 'Male',
        ]);*/

        $request->validate([
            'dateofbirth' => 'required',
            'breed' => 'required',
            'gender' => 'required',
        ]);

        return Cattle::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Cattle::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'dateofbirth' => 'required',
            'breed' => 'required',
            'gender' => 'required',
        ]);

        $cattle = Cattle::find($id);
        $cattle->update($request->all());
        return $cattle;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Cattle::destroy($id);
    }


    /**
     * search
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($string)
    {
        return Cattle::where('name','like','%'.$string.'%')->orwhere('tag','like','%'.$string.'%')->get();
    }
}
