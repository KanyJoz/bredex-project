<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RacerTeamUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'yearOfFoundation' => 'required|min:1700|integer',
            'wonWorldCups' => 'required|min:0|integer',
            'haveAlreadyPayed' => 'required|boolean',
        ];
    }
}
