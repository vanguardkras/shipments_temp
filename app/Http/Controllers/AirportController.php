<?php

namespace App\Http\Controllers;

use App\Models\Airport;
use App\Models\Type;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class AirportController
 *
 * @package App\Http\Controllers
 */
class AirportController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Airport::class, 'airport');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $airports = Airport::all();

        return jsonResponse($airports);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $airport = Airport::create($request->all());

        return jsonResponse($airport);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Airport $airport
     * @return string
     */
    public function update(Request $request, Airport $airport)
    {
        $airport->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Airport $airport
     * @return string
     * @throws Exception
     */
    public function destroy(Airport $airport)
    {
        $airport->delete();

        return 'Success';
    }

    /**
     * Get airports by the type
     *
     * @param Type $type
     * @return JsonResponse
     */
    public function getAirportsByType(Type $type)
    {
        return jsonResponse($type->airports);
    }
}
