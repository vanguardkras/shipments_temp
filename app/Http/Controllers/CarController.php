<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Type;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $cars = Car::all();

        return jsonResponse($cars);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $car = Car::create($request->all());

        return jsonResponse($car);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Car $car
     * @return string
     */
    public function update(Request $request, Car $car)
    {
        $car->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Car $car
     * @return string
     * @throws Exception
     */
    public function destroy(Car $car)
    {
        $car->delete();

        return 'Success';
    }

    /**
     * Get car types by the type
     *
     * @param Type $type
     * @return JsonResponse
     */
    public function getCarsByType(Type $type)
    {
        return jsonResponse($type->cars);
    }
}
