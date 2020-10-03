<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'tel' => ['required', 'string', 'max:255'],
            'devise' => ['required', 'string', 'max:255'],
            'ref' => ['required', 'string', 'max:3', 'unique:users,ref'],
            'adr' => ['required', 'string', 'max:255'],
            'tva' => ['required', 'integer'],
            'photo'=> ['required','file','mimes:png,jpg,jpeg'],
        ];
    }
}
