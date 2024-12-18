<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'big_image',
        'category_id',
        'alt_image',
        'is_full_image',
        'specifications',
        'slug',
        'download_file',
        'download_link',
        'win_r_link',
        'size_file',
        'seo_code',
    ];

    protected $casts = [
        'specifications' => 'array',
        'slug' => 'array',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
