<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\MilkTally;

class MilkTallyController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MilkTally::orderBy('id','desc')->get();

    }

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
        $request->validate([
            'cattle_id' => 'required',
            'date' => 'required',
            'session' => 'required',
            'qty' => 'required',
        ]);


        return MilkTally::create($request->all());
    }


      /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return MilkTally::find($id);
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
            'cattle_id' => 'required',
            'date' => 'required',
            'session' => 'required',
            'qty' => 'required',
        ]);


        $MilkTally = MilkTally::find($id);
        $MilkTally->update($request->all());
        return $MilkTally;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
        return MilkTally::destroy($id);
    }


}
