<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cattle extends Model
{
    use HasFactory;
    use SoftDeletes;


    protected $table ='cattles';

    protected $fillable = [
        'tag',
        'name',
        'origin',
        'breed',
        'dateofbirth',
        'gender',
    ];
}
