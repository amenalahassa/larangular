<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Commande;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CommandeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Commande::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $total = $this->faker->randomNumber(4);
        $tva = ($total * 18 ) / 100;
        return [
            'client_id' => $this->faker->numberBetween(1, count(Client::all())),
            'user_id' => $this->faker->numberBetween(1, count(User::all())),
            'tel'=> $this->faker->e164PhoneNumber,
            'adr'=>$this->faker->address,
            'ssTotal' =>  $total,
            'tva' => $tva,
            'monnaie' => $this->faker->randomFloat(2, 500, 10000),
            'ref' => 'FAC/'. date("Y-m-d") . '/' . str_pad( $total + 1, 4, '0', STR_PAD_LEFT),
        ];
    }
}
