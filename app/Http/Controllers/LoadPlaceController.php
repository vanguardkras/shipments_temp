<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\LoadPlace;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LoadPlaceController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(LoadPlace::class, 'load_place');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $loadPlaces = LoadPlace::all();

        return jsonResponse($loadPlaces);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $load_place = LoadPlace::create($request->all());

        return jsonResponse($load_place);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param LoadPlace $loadPlace
     * @return string
     */
    public function update(Request $request, LoadPlace $loadPlace)
    {
        $loadPlace->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param LoadPlace $loadPlace
     * @return string
     * @throws Exception
     */
    public function destroy(LoadPlace $loadPlace)
    {
        $loadPlace->delete();

        return 'Success';
    }

    /**
     * Get load places by the client
     *
     * @param Client $client
     * @return JsonResponse
     */
    public function getLoadPlacesByClient(Client $client)
    {
        return jsonResponse($client->loadPlaces);
    }
}
