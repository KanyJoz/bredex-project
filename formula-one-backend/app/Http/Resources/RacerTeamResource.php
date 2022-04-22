<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RacerTeamResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $racerTeam = $this->resource;

        return [
            'id' => $racerTeam->id,
            'name' => $racerTeam->name,
            'yearOfFoundation' => $racerTeam->year_of_foundation,
            'wonWorldCupsNumber' => $racerTeam->won_world_cups_number,
            'haveAlreadyPayed' => $racerTeam->have_already_payed,
        ];
    }
}
