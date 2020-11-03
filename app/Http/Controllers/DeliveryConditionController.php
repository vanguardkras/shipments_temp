<?php

namespace App\Http\Controllers;

use App\Models\DeliveryCondition;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DeliveryConditionController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(DeliveryCondition::class, 'delivery_condition');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $deliveryConditions = DeliveryCondition::all();

        return jsonResponse($deliveryConditions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $delivery_condition = DeliveryCondition::create($request->all());

        return jsonResponse($delivery_condition);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param DeliveryCondition $deliveryCondition
     * @return string
     */
    public function update(Request $request, DeliveryCondition $deliveryCondition)
    {
        $deliveryCondition->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param DeliveryCondition $deliveryCondition
     * @return string
     * @throws Exception
     */
    public function destroy(DeliveryCondition $deliveryCondition)
    {
        $deliveryCondition->delete();

        return 'Success';
    }
}
