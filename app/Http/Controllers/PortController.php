<?php

namespace App\Http\Controllers;

use App\Models\Port;
use App\Models\Type;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PortController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Port::class, 'port');
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $ports = Port::all();

        return jsonResponse($ports);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $port = Port::create($request->all());

        return jsonResponse($port);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Port $port
     * @return string
     */
    public function update(Request $request, Port $port)
    {
        $port->update($request->all());

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Port $port
     * @return string
     * @throws Exception
     */
    public function destroy(Port $port)
    {
        $port->delete();

        return 'Success';
    }

    /**
     * Get ports by the type
     *
     * @param Type $type
     * @return JsonResponse
     */
    public function getPortsByType(Type $type)
    {
        return jsonResponse($type->ports);
    }
}
