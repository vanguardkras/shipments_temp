<?php


namespace App\Models\Helpers;


use App\Models\Shipment;

trait TouchesParentShipment
{
    /**
     * Parent relationship
     *
     * @return mixed
     */
    public function shipment()
    {
        return $this->belongsTo(Shipment::class);
    }
}
