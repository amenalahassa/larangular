<?php

namespace Database\Seeders;

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
    }
}
