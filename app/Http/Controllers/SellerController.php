<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Seller::class, 'seller');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $sellers = Seller::all();

        return jsonResponse($sellers);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $seller = Seller::create($request->all());

        return jsonResponse($seller);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Seller $seller
     * @return string
     */
    public function update(Request $request, Seller $seller)
    {
        $seller->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Seller $seller
     * @return string
     * @throws Exception
     */
    public function destroy(Seller $seller)
    {
        $seller->delete();

        return 'Success';
    }
}
