<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

/**
 *  * Class Type
 * @package App\Models
 *we
 * @mixin Eloquent
 *
 * @property integer $id
 * @property string $name
 * @property Collection $parameters
 * @property Collection $sellers
 * @property Collection $contractors
 * @property Collection $cars
 * @property Collection $containers
 * @property Collection $airports
 * @property Collection $ports
 * @property Collection $stations
 */

class Type extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    /**
     * Always load with relationships
     *
     * @var array
     */
    protected $with = ['parameters'];

    /**
     * Parameters dependencies
     *
     * @return BelongsToMany
     */
    public function parameters()
    {
        return $this->belongsToMany(Parameter::class);
    }

    /**
     * Sellers dependencies
     *
     * @return BelongsToMany
     */
    public function sellers()
    {
        return $this->belongsToMany(Seller::class);
    }

    /**
     * Contractors dependencies
     *
     * @return BelongsToMany
     */
    public function contractors()
    {
        return $this->belongsToMany(Contractor::class);
    }

    /**
     * Cars dependencies
     *
     * @return BelongsToMany
     */
    public function cars()
    {
        return $this->belongsToMany(Car::class);
    }

    /**
     * Containers dependencies
     *
     * @return BelongsToMany
     */
    public function containers()
    {
        return $this->belongsToMany(Container::class);
    }

    /**
     * Airports dependencies
     *
     * @return BelongsToMany
     */
    public function airports()
    {
        return $this->belongsToMany(Airport::class);
    }

    /**
     * Ports dependencies
     *
     * @return BelongsToMany
     */
    public function ports()
    {
        return $this->belongsToMany(Port::class);
    }

    /**
     * Stations dependencies
     *
     * @return BelongsToMany
     */
    public function stations()
    {
        return $this->belongsToMany(Station::class);
    }

    /**
     * Make an array of parameters to load
     *
     * @param bool $values
     * @return array
     */
    public function buildRelationshipsArray($values = false)
    {
        $parameters = $this->parameters->toArray();
        array_walk($parameters, function (&$element) use ($values) {
            $element = Str::camel($element['table']);
        });
        return $parameters;
    }
}
