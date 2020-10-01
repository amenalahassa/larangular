<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\Commande;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'commande_id' => $this->faker->numberBetween(1, count(Commande::all())),
            'article_id' => $this->faker->numberBetween(1, count(Article::all())),
            'prix' => $this->faker->randomNumber(4),
            'qte' => $this->faker->randomNumber(4),
        ];
    }
}
