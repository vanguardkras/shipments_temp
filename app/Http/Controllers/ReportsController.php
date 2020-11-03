<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Port;
use App\Models\Seller;
use App\Models\Shipment;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ReportsController extends Controller
{
    /**
     * Report start date
     *
     * @var string
     */
    protected $from;

    /**
     * Report end date
     *
     * @var string
     */
    protected $to;

    /**
     * Dates to retrieve
     * @var array
     */
    protected $with = [
        'positionNumber',
        'sendActualDate',
        'sendPlannedDate',
        'arrivalActualDate',
        'arrivalPlanDate'
    ];

    public function __construct(Request $request)
    {
        $this->from = $request->has('from') ? Carbon::parse($request->input('from')) : now()->subMonth();
        $this->to = $request->has('to') ? Carbon::parse($request->input('to'))->addDay() : now();
    }

    /**
     * Get all shipments with QoS dates
     *
     * @return JsonResponse
     */
    public function overall()
    {
        $shipments = Shipment::with($this->with)
            ->where('updated_at', '>=', $this->from)
            ->where('updated_at', '<=', $this->to)
            ->get();

        return jsonResponse($shipments);
    }

    /**
     * Get data by client
     *
     * @param Client $client
     * @return JsonResponse
     */
    public function byClient(Client $client)
    {
        $shipments = Shipment::with($this->with)
            ->whereHas('client', function (Builder $query) use ($client) {
                $query->where('client_id', $client->id);
            })
            ->where('updated_at', '>=', $this->from)
            ->where('updated_at', '<=', $this->to)
            ->get();

        return jsonResponse($shipments);
    }

    /**
     * Get data by Employee
     *
     * @param User $user
     * @return JsonResponse
     */
    public function byEmployee(User $user)
    {
        $shipments = Shipment::with($this->with)
            ->where('user_id', $user->id)
            ->where('updated_at', '>=', $this->from)
            ->where('updated_at', '<=', $this->to)
            ->get();

        return jsonResponse($shipments);
    }

    /**
     * Get data by seller
     *
     * @param Seller $seller
     * @return JsonResponse
     *
     */
    public function bySeller(Seller $seller)
    {
        $shipments = Shipment::with($this->with)
            ->whereHas('client.value.sellers', function (Builder $query) use ($seller) {
                $query->where('id', $seller->id);
            })
            ->where('updated_at', '>=', $this->from)
            ->where('updated_at', '<=', $this->to)
            ->get();

        return jsonResponse($shipments);
    }

    /**
     * Get a list of all clients for building a report
     *
     * @return JsonResponse
     */
    public function indexClients()
    {
        $clients = Client::all();

        return jsonResponse($clients);
    }

    /**
     * Get a list of all employees for building a report
     *
     * @return JsonResponse
     */
    public function indexEmployees()
    {
        $employees = User::select(['id', 'first_name', 'last_name'])
            ->where('role', '>', 2)->get();

        $employees = $employees->map(function ($item) {
            return [
                'id' => $item->id,
                'name' => $item->name,
            ];
        });

        return jsonResponse($employees);
    }

    /**
     * Get a list of all sellers for building a report
     *
     * @return JsonResponse
     */
    public function indexSellers()
    {
        $employees = Seller::all();

        return jsonResponse($employees);
    }

    public function test()
    {
        $port = Port::find(7);
        dd($port->parameters()->with('shipment.ports')->get()->pluck('shipment'));
    }
}
