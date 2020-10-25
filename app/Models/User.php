<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'tel', 'adr', 'tva', 'devise', 'ref', 'ifu'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
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
