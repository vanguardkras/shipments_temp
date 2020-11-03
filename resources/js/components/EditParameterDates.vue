<template>
    <div>
        <h2>Даты</h2>
        <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12 p-0 m-0">
            <div class="row  mb-1">
                <div class="col-6">
                    <div class="form-group">
                        <label for="load_date">Дата затарки</label>
                        <input class="form-control form-control-sm" id="load_date" type="date" v-model="load_date">
                    </div>
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-6">
                    <div class="form-group">
                        <label for="send_planned_date">Дата отправления плановая</label>
                        <input class="form-control form-control-sm" id="send_planned_date" type="date" v-model="send_planned_date">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="send_actual_date">Дата отправления фактическая</label>
                        <input class="form-control form-control-sm" id="send_actual_date" type="date" v-model="send_actual_date">
                    </div>
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-6">
                    <div class="form-group">
                        <label for="arrival_plan_date">Дата прибытия плановая</label>
                        <input class="form-control form-control-sm" id="arrival_plan_date" type="date" v-model="arrival_plan_date">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="arrival_actual_date">Дата прибытия фактическая</label>
                        <input class="form-control form-control-sm" id="arrival_actual_date" type="date" v-model="arrival_actual_date">
                    </div>
                </div>
            </div>
            <div class="row mb-1" v-if="type_id == 2 || type_id == 3">
                <div class="col-6">
                    <div class="form-group">
                        <label for="arrival_plan_date">Дата отправления (станция)</label>
                        <input class="form-control form-control-sm" id="send_station_date" type="date" v-model="send_station_date">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="arrival_actual_date">Дата прибытия (станция)</label>
                        <input class="form-control form-control-sm" id="arrival_station_date" type="date" v-model="arrival_station_date">
                    </div>
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-6">
                    <div class="form-group">
                        <label for="delivery_end_date">Дата закрытия доставки</label>
                        <input class="form-control form-control-sm" id="delivery_end_date" type="date" v-model="delivery_end_date">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="release_date">Дата выпуска</label>
                        <input class="form-control form-control-sm" id="release_date" type="date" v-model="release_date">
                    </div>
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-6">
                    <div class="form-group">
                        <label for="delivery_actual_date">Дата доставки фактическая</label>
                        <input class="form-control form-control-sm" id="delivery_actual_date" type="date" v-model="delivery_actual_date">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
    name: "EditParameterDates",
    props: ['isEdit'],
    computed: {...mapState(['editShipment', 'type_id'])},
    data() {
        return {
            load_date: null,
            send_planned_date: null,
            send_actual_date: null,
            arrival_plan_date: null,
            arrival_actual_date: null,
            delivery_end_date: null,
            release_date: null,
            delivery_actual_date: null,
            send_station_date: null,
            arrival_station_date: null,
        }
    },
    methods: {
        ...mapMutations(['updateNewShipment']),
    },
    watch: {
        load_date: function() {
            this.updateNewShipment({parameter: 'load_date', value: this.load_date});
        },
        send_planned_date: function() {
            this.updateNewShipment({parameter: 'send_planned_date', value: this.send_planned_date});
        },
        send_actual_date: function() {
            this.updateNewShipment({parameter: 'send_actual_date', value: this.send_actual_date});
        },
        arrival_plan_date: function() {
            this.updateNewShipment({parameter: 'arrival_plan_date', value: this.arrival_plan_date});
        },
        arrival_actual_date: function() {
            this.updateNewShipment({parameter: 'arrival_actual_date', value: this.arrival_actual_date});
        },
        delivery_end_date: function() {
            this.updateNewShipment({parameter: 'delivery_end_date', value: this.delivery_end_date});
        },
        release_date: function() {
            this.updateNewShipment({parameter: 'release_date', value: this.release_date});
        },
        delivery_actual_date: function() {
            this.updateNewShipment({parameter: 'delivery_actual_date', value: this.delivery_actual_date});
        },
        send_station_date: function() {
            this.updateNewShipment({parameter: 'send_station_date', value: this.send_station_date});
        },
        arrival_station_date: function() {
            this.updateNewShipment({parameter: 'arrival_station_date', value: this.arrival_station_date});
        }
    },
    created() {
        if (this.isEdit) {
            this.load_date = this.editShipment.load_date;
            this.send_planned_date = this.editShipment.send_planned_date;
            this.send_actual_date = this.editShipment.send_actual_date;
            this.arrival_plan_date = this.editShipment.arrival_plan_date;
            this.arrival_actual_date = this.editShipment.arrival_actual_date;
            this.delivery_end_date = this.editShipment.delivery_end_date;
            this.release_date = this.editShipment.release_date;
            this.delivery_actual_date = this.editShipment.delivery_actual_date;
            this.send_station_date = this.editShipment.send_station_date;
            this.arrival_station_date = this.editShipment.arrival_station_date;
        }
    }
}
</script>

<style scoped>

</style>
