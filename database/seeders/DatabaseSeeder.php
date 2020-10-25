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
//         An user for test :

         User::factory(1)->create([
             'name' => 'Larangular Inc',
             'email' => 'a.an@yoo.com',
             'password' => bcrypt('amen2000'),
             'profile_photo_path' => null,
             'tel' => "62 62 62 62",
             'ifu' => 32000700015618,
             'devise' => 'FCFA',
             'tva' => 18,
             'ref' => "LAI",
             'adr' => 'Agla',
         ]);

//         For testing datas :

//         Article::factory()->count(10)->create();
//         Client::factory()->count(10)->create();
//         Commande::factory()->count(150)->create();
//         Product::factory()->count(200)->create();

    }
}
