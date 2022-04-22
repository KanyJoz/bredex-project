<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RacerTeam extends Model
{
    protected $table = 'racer_teams';
    protected $fillable = [
        'name',
        'year_of_foundation',
        'won_world_cups_number',
        'have_already_played',
    ];
}
