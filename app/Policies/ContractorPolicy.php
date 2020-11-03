<?php

namespace App\Policies;

use App\Models\Contractor;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ContractorPolicy
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
     * @param User $user
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
     * @param User $user
     * @param  \App\Models\Contractor  $contractor
     * @return mixed
     */
    public function update(?User $user, Contractor $contractor)
    {
        return true;
        //TODO: Remove true, optional user and uncomment the next line
        return $user->isModerator();
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param  \App\Models\Contractor  $contractor
     * @return mixed
     */
    public function delete(?User $user, Contractor $contractor)
    {
        return true;
        //TODO: Remove true, optional user and uncomment the next line
        return $user->isModerator();
    }
}
