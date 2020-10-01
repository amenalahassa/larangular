<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'user_id',
        'tel',
        'adr',
        'ssTotal',
        'tva',
        'monnaie',
        'ref'
    ];

    public function client()
    {
        return $this->belongsTo('App\Models\Client');
    }

    public function productCount ()
    {
        $count = Product::where('commande_id', $this->id)->get()->count();
        return $count;
    }

}
