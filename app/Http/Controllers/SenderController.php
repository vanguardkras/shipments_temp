<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Sender;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SenderController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Sender::class, 'sender');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $loadPlaces = Sender::all();

        return jsonResponse($loadPlaces);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $load_place = Sender::create($request->all());

        return jsonResponse($load_place);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Sender $sender
     * @return string
     */
    public function update(Request $request, Sender $sender)
    {
        $sender->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Sender $sender
     * @return string
     * @throws Exception
     */
    public function destroy(Sender $sender)
    {
        $sender->delete();

        return 'Success';
    }

    /**
     * Get load places by the client
     *
     * @param Client $client
     * @return JsonResponse
     */
    public function getSendersByClient(Client $client)
    {
        return jsonResponse($client->senders);
    }
}
