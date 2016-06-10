<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
        	'name' => 'Lady Morganne',
        	'email' => 'ladymorgannelumbre05@gmail.com',
        	'password' => \Hash::make('pass'),
        ]);
    }
}
