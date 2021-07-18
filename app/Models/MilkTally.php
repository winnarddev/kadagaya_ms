<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Cattle;

class MilkTally extends Model
{
    use HasFactory;

    use SoftDeletes;


    protected $table ='milk_tally';

    protected $fillable = [
        'cattle_id',
        'date',
        'am_qty',
        'pm_qty',        
    ];


    public function cattle()
    {
        return $this->belongsTo(Cattle::class);
    }


}
