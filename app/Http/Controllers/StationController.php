<?php

namespace App\Http\Controllers;

use App\Models\Station;
use App\Models\Type;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StationController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Station::class, 'station');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $stations = Station::all();

        return jsonResponse($stations);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $station = Station::create($request->all());

        return jsonResponse($station);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Station $station
     * @return string
     */
    public function update(Request $request, Station $station)
    {
        $station->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Station $station
     * @return string
     * @throws Exception
     */
    public function destroy(Station $station)
    {
        $station->delete();

        return 'Success';
    }

    /**
     * Get stations by the type
     *
     * @param Type $type
     * @return JsonResponse
     */
    public function getStationsByType(Type $type)
    {
        return jsonResponse($type->stations);
    }
}
