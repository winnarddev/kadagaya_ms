<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\MilkTally;

class Cattle extends Model
{
    use HasFactory;
    use SoftDeletes;


    protected $table ='cattles';

    protected $fillable = [
        'user_id',
        'tag',
        'name',
        'origin',
        'type',
        'breed',
        'dateofbirth',
        'gender',
    ];

    public function milkTally()
    {
        return $this->hasMany(MilkTally::class);
    }

 }
