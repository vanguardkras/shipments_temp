<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Notifications\UnfilledShipments;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;

class CheckUnfilledShipments extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check_unfilled_shipments';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check database for unfilled shipments and notifies users';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $users = User::where('id', 7)->get();
        //TODO: uncomment selected users
        //$users = User::where('id', '>', 1)->get();
        foreach ($users as $user) {
            $data = [];
            $unfilled_shipments = $user->shipments()
                ->with('positionNumber')
                ->where('filled', false)
                ->get()->toArray();

            $this->selectIdAndNumberOnly($unfilled_shipments, 'unfilled');
            $unfilled = $unfilled_shipments;

            $arrivalOutdated = $this->getOutdatedDates($user, 'arrivalPlanDate', 'arrivalActualDate', 'arrivalOutdated');
            $sendOutdated = $this->getOutdatedDates($user, 'sendPlannedDate', 'sendActualDate', 'sendOutdated');
            $data = array_merge($unfilled, $arrivalOutdated, $sendOutdated);
            $user->notify(new UnfilledShipments($data));
        }
    }

    /**
     * Get outdated shipments
     *
     * @param User $user
     * @param string $plan_date_name
     * @param string $actual_date_name
     * @param string $type
     * @return array
     */
    public function getOutdatedDates(User $user, string $plan_date_name, string $actual_date_name, string $type)
    {
        $data = $user->shipments()
            ->with(['positionNumber', $plan_date_name, $actual_date_name])->get()
            ->filter(function ($value) use($plan_date_name, $actual_date_name) {
                return $value->$actual_date_name->value <= $value->$plan_date_name->value;
            })->toArray();
        $this->selectIdAndNumberOnly($data, $type);
        return $data;
    }

    /**
     * Leave only ids and numbers in array
     *
     * @param array $array
     * @param string $type
     */
    protected function selectIdAndNumberOnly(array &$array, string $type)
    {
        array_walk($array, function (&$value) use ($type) {
            $value = [
                'id' => $value['id'],
                'position_number' => $value['position_number'],
                'type' => $type,
            ];
        });
    }
}
