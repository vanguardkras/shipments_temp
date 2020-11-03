<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class DeliveryCondition
 * @package App\Models
 *
 * @mixin Eloquent
 *
 * @property int $id
 * @property string $name
 */
class DeliveryCondition extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];
}
