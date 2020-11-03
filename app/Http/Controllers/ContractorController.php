<?php

namespace App\Http\Controllers;

use App\Models\Contractor;
use App\Models\Type;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContractorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $contractors = Contractor::all();

        return jsonResponse($contractors);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $contractor = Contractor::create($request->all());

        return jsonResponse($contractor);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Contractor $contractor
     * @return string
     */
    public function update(Request $request, Contractor $contractor)
    {
        $contractor->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Contractor $contractor
     * @return string
     * @throws Exception
     */
    public function destroy(Contractor $contractor)
    {
        $contractor->delete();

        return 'Success';
    }

    /**
     * Get contractors by the type
     *
     * @param Type $type
     * @return JsonResponse
     */
    public function getContractorsByType(Type $type)
    {
        return jsonResponse($type->contractors);
    }
}
