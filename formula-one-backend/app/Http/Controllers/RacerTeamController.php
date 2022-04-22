<?php

namespace App\Http\Controllers;

use App\Http\Requests\RacerTeamStoreRequest;
use App\Http\Requests\RacerTeamUpdateRequest;
use App\Http\Resources\RacerTeamResource;
use App\Models\RacerTeam;
use Illuminate\Http\Request;

class RacerTeamController extends Controller
{
    public function index()
    {
        $allRacerTeams = RacerTeam::all();
        return RacerTeamResource::collection($allRacerTeams);
    }

    public function store(RacerTeamStoreRequest $request)
    {
        $newRacerTeam = RacerTeam::create($request->all());
        return new RacerTeamResource($newRacerTeam);
    }

    public function update(RacerTeam $racerTeam, RacerTeamUpdateRequest $request) {
        $racerTeam->update($request->all());
        return new RacerTeamResource($racerTeam);
    }

    public function destroy(RacerTeam $racerTeam) {
        $racerTeam->delete();
        return new RacerTeamResource($racerTeam);
    }
}
