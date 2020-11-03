<?php

namespace App\Http\Controllers;

use App\Models\Shipment;
use App\Models\Type;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use ReflectionException;

class ShipmentController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Shipment::class, 'shipment');
    }

    /**
     * Get all shipments by a certain type
     *
     * @param Type $type
     * @return JsonResponse
     */
    public function getAllByType(Type $type)
    {
        $with = $type->buildRelationshipsArray();
        unset($with[array_search('comment', $with)]);
        $shipments = Shipment::with($with)
            ->with('user')
            ->where('type_id', $type->id)->get();

        return jsonResponse($shipments);
    }

    /**
     * Get shipments for a certain user by a certain type
     *
     * @param Type $type
     * @param User $user
     * @return JsonResponse
     */
    public function getUserByType(Type $type, User $user)
    {
        $shipments = Shipment::with($type->buildRelationshipsArray())
            ->where('type_id', $type->id)
            ->where('user_id', $user->id)
            ->get();

        return jsonResponse($shipments);
    }

    /**
     * GEt shipments for the current user by a certain type.
     *
     * @param Type $type
     * @return JsonResponse
     */
    public function getMyByType(Type $type)
    {
        $user_id = Auth::check() ? Auth::id() : 0;

        $shipments = Shipment::with($type->buildRelationshipsArray())
            ->where('type_id', $type->id)
            ->where('user_id', $user_id)
            ->get();

        return jsonResponse($shipments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ReflectionException
     */
    public function store(Request $request)
    {
        $filled = true;

        $shipment = new Shipment();
        $shipment->type_id = $request->input('type_id');
        $shipment->user_id = Auth::id();
        $shipment->save();

        $type = Type::find($request->input('type_id'));
        $parameters = $type->buildRelationshipsArray();

        foreach ($parameters as $parameter) {
            $many = substr($parameter, -1) === 's';

            $shipment_parameter_class_name = 'App\Models\Parameters\Shipment' . ucfirst(Str::singular($parameter));
            $reflection = new \ReflectionClass($shipment_parameter_class_name);
            $related = $reflection->hasMethod('relatedModel');


            $index = $related ? Str::snake(Str::singular($parameter)) . '_id' : 'value';

            if ($many) {
                $input_data = Arr::pluck($request->input(Str::snake($parameter)), $index);
                $input_data = array_filter($input_data, function ($value) {
                    return $value;
                });

                if (!count($input_data)) {
                    $filled = false;
                }

                foreach ($input_data as $input_value) {
                    if ($input_value) {
                        $shipment->$parameter()->create([$index => $input_value]);
                    }
                }
            } else {
                if (!$request->input(Str::snake($parameter)) && $parameter !== 'comment') {
                    $filled = false;
                }
                $shipment->$parameter()->create([$index => $request->input(Str::snake($parameter))]);
            }
        }

        $shipment->filled = $filled;
        $shipment->save();

        return jsonResponse($shipment->id);
    }

    /**
     * Display the specified resource.
     *
     * @param Shipment $shipment
     * @return JsonResponse
     */
    public function show(Shipment $shipment)
    {
        $shipment
            ->load($shipment->type->buildRelationshipsArray())
            ->load('user');

        return jsonResponse($shipment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Shipment $shipment
     * @return string
     * @throws ReflectionException
     */
    public function update(Request $request, Shipment $shipment)
    {
        $filled = true;

        $type = Type::find($shipment->type_id);
        $parameters = $type->buildRelationshipsArray();

        foreach ($parameters as $parameter) {
            $many = substr($parameter, -1) === 's';

            $shipment_parameter_class_name = 'App\Models\Parameters\Shipment' . ucfirst(Str::singular($parameter));
            $reflection = new \ReflectionClass($shipment_parameter_class_name);
            $related = $reflection->hasMethod('relatedModel');


            $index = $related ? Str::snake(Str::singular($parameter)) . '_id' : 'value';


            if ($many) {
                $input_data = Arr::pluck($request->input(Str::snake($parameter)), $index);
                $current_values = Arr::pluck($shipment->$parameter, 'value.id');
                $to_add = array_diff($input_data, $current_values);
                $to_remove = array_diff($current_values, $input_data);

                foreach ($to_add as $add) {
                    if ($add) {
                        $shipment->$parameter()->create([$index => $add]);
                    }
                }
                foreach ($to_remove as $remove) {
                    $shipment->$parameter()->where($index, $remove)->delete();
                }
                $shipment->load($parameter);
                if (!count($shipment->$parameter)) {
                    $filled = false;
                }
            } else {
                $shipment->$parameter->$index = $request->input(Str::snake($parameter));
                if (!$shipment->$parameter->$index && $parameter !== 'comment') {
                    $filled = false;
                }
            }
        }

        $shipment->filled = $filled;
        $shipment->save();

        return 'Success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Shipment $shipment
     * @return string
     * @throws Exception
     */
    public function destroy(Shipment $shipment)
    {
        $shipment->delete();

        return 'Success';
    }

    /**
     * Get current type parameters
     *
     * @param Type $type
     * @return JsonResponse
     */
    public function getTypeParameters(Type $type)
    {
        return jsonResponse($type->parameters);
    }
}
