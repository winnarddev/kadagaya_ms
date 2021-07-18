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
        return MilkTally::orderBy('id','desc')->with('cattle')->get();

    }

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //$input = $request->all();
        $request->validate([
            'cattle_id' => 'required',
            'date' => 'required',           
        ]);


        $data = MilkTally::create($request->all());
        //$data = new MilkTally; //::create($request->all());
        //$data->cattle_id = $input['cattle_id'];
        //$data->date = $input['date'];
        //$data->session = $input['session'];
        //$data->qty = $input['qty'];
        //$data->save();
        $data->load('cattle');
        return $data;

        //return MilkTally::where('id','=',$data->id)->with('cattle')->get();

       

        
        
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
        ]);


        $MilkTally = MilkTally::find($id);
        $MilkTally->update($request->all());
        $MilkTally->load('cattle');
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


    public function checkrecord($cattle, $date){
       // return $cattle;
        
       $data = MilkTally::where('cattle_id','=',$cattle)->where('date','=', $date)->first();
       return $data;

    }


}
