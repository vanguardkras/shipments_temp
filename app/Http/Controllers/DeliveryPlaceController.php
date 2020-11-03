<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\DeliveryPlace;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DeliveryPlaceController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(DeliveryPlace::class, 'delivery_place');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $deliveryPlaces = DeliveryPlace::all();

        return jsonResponse($deliveryPlaces);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $delivery_place = DeliveryPlace::create($request->all());

        return jsonResponse($delivery_place);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param DeliveryPlace $deliveryPlace
     * @return string
     */
    public function update(Request $request, DeliveryPlace $deliveryPlace)
    {
        $deliveryPlace->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param DeliveryPlace $deliveryPlace
     * @return string
     * @throws Exception
     */
    public function destroy(DeliveryPlace $deliveryPlace)
    {
        $deliveryPlace->delete();

        return 'Success';
    }

    /**
     * Get delivery places by the client
     *
     * @param Client $client
     * @return JsonResponse
     */
    public function getDeliveryPlacesByClient(Client $client)
    {
        return jsonResponse($client->deliveryPlaces);
    }
}
