<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
        'tel', 'adr', 'tva', 'devise',
        'ref', 'img'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function facture ()
    {
        return $this->hasMany('App\Models\Commande');
    }


    public function totalArticles ()
    {
        $total = 0;
        foreach ($this->facture as $facture)
        {
            $total += $facture->products->count();
        }
        return $total;
    }

    public function totalFactureCA ()
    {
        $total = 0;
        foreach ($this->facture as $facture)
        {
            $total += ($facture->ssTotal() + $facture->tva()) ;
        }
        return $total;
    }


    public function totalFactureCAHT ()
    {
        $total = 0;
        foreach ($this->facture as $facture)
        {
            $total += ($facture->ssTotal()) ;
        }
        return $total;
    }

    public function totalDu ()
    {
        $total = 0;
        foreach ($this->facture as $facture)
        {
            $reliquat = $facture->monnaie - ($facture->ssTotal() + $facture->tva());
            if ( $reliquat < 0 )
            {
                $total += abs($reliquat);
            }
        }
        return $total;
    }

}
