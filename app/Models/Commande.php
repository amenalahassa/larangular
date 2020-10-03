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

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function products ()
    {
        return $this->hasMany('App\Models\Product');
    }

    public function ssTotal ()
    {
        $sstotal = 0;
        foreach ($this->products as $product)
        {
            $sstotal += $product->qte * $product->prix;
        }
        return $sstotal;
    }

    public function tva ()
    {
        return ($this->ssTotal() * $this->user->tva) / 100;
    }

}
