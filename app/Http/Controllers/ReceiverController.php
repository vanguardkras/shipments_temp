<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Receiver;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReceiverController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Receiver::class, 'receiver');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $receivers = Receiver::all();

        return jsonResponse($receivers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $load_place = Receiver::create($request->all());

        return jsonResponse($load_place);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Receiver $receiver
     * @return string
     */
    public function update(Request $request, Receiver $receiver)
    {
        $receiver->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Receiver $receiver
     * @return string
     * @throws Exception
     */
    public function destroy(Receiver $receiver)
    {
        $receiver->delete();

        return 'Success';
    }

    /**
     * Get load places by the client
     *
     * @param Client $client
     * @return JsonResponse
     */
    public function getReceiversByClient(Client $client)
    {
        return jsonResponse($client->receivers);
    }
}
