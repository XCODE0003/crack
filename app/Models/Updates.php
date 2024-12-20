<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Updates extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'date_created',

    ];

    protected $casts = [
        'date_created' => 'date:d.m.Y',
    ];
}
