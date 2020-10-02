<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'commande_id',
        'article_id',
        'prix',
        'qte'
    ];

    public function article ()
    {
        return $this->belongsTo('App\Models\Article');
    }
}
