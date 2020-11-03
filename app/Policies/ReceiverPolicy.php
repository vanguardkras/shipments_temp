<?php

namespace App\Policies;

use App\Models\Receiver;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReceiverPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User|null $user
     * @return mixed
     */
    public function viewAny(?User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User|null $user
     * @return mixed
     */
    public function create(?User $user)
    {
        return true;
        //TODO: Remove true, optional user and uncomment the next line
        return $user->isModerator();
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User|null $user
     * @param Receiver $receiver
     * @return mixed
     */
    public function update(?User $user, Receiver $receiver)
    {
        return true;
        //TODO: Remove true, optional user and uncomment the next line
        return $user->isModerator();
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User|null $user
     * @param Receiver $receiver
     * @return mixed
     */
    public function delete(?User $user, Receiver $receiver)
    {
        return true;
        //TODO: Remove true, optional user and uncomment the next line
        return $user->isModerator();
    }
}
