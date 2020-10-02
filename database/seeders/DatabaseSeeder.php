<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Client;
use App\Models\Commande;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         User::factory(1)->create([
             'name' => 'Amen Alahassa',
             'email' => 'a.an@yoo.com',
             'password' => bcrypt('amen2000'),
         ]);

         Article::factory()->count(10)->create();
         Client::factory()->count(10)->create();
//         Commande::factory()->count(150)->create();
//         Product::factory()->count(200)->create();



    }
}
