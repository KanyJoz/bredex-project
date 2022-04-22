<?php

namespace Database\Seeders;

use App\Models\RacerTeam;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RacerTeamsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RacerTeam::create([
            'id' => 1,
            'name' => 'Meclaren Mercedes',
            'year_of_foundation' => 1901,
            'won_world_cups_number' => 10,
            'have_already_payed' => true,
        ]);

        RacerTeam::create([
            'id' => 2,
            'name' => 'Ferrari',
            'year_of_foundation' => 1922,
            'won_world_cups_number' => 8,
        ]);
    }
}
