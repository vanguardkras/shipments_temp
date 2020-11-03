<template>
    <div class="container-fluid">
        <div class="row page-title">
            <div class="col-md-12">
                <h4 class="mb-1 mt-0">Отчет по срокам</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <apexchart
                            type="pie"
                            height="200"
                            :options="chartOptions"
                            :series="[onTime, outdated]"
                        ></apexchart>
                        <form class="form-inline">
                            <div class="form-group mb-2">
                                <div class="input-group mr-2">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">С</span>
                                    </div>
                                    <input type="date" class="form-control" v-model="from">
                                </div>
                                <div class="input-group mr-2">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">По</span>
                                    </div>
                                    <input type="date" class="form-control" v-model="to">
                                </div>
                                <button @click.prevent="updateData" class="btn btn-primary">Обновить</button>
                            </div>
                        </form>
                        <div v-if="asyncDataStatus_ready">
                            <table class="table table-striped table-sm" id="report">
                                <thead class="thead-light">
                                <tr>
                                    <th scope="col">Тип перевозки</th>
                                    <th scope="col">Номер позиционника</th>
                                    <th scope="col">Сотрудник</th>
                                    <th scope="col">Дата отпр. план</th>
                                    <th scope="col">Дата отпр. факт</th>
                                    <th scope="col">Дата приб. план</th>
                                    <th scope="col">Дата приб. факт</th>
                                    <th scope="col">Не в срок</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="record in data" :key="record.id">
                                    <td class="align-middle">{{ types[record.type_id - 1].name }}</td>
                                    <td class="align-middle">
                                        <router-link :to="{name: 'Shipment', params: {id: record.id}}">
                                            {{ record.position_number }}
                                        </router-link>
                                    </td>
                                    <td class="align-middle">
                                        {{ record.last_name }}
                                    </td>
                                    <td class="align-middle">
                                        {{ formatData(record.send_planned_date, 'send_planned_date') }}
                                    </td>
                                    <td class="align-middle"
                                        :class="isOutdatedSend(record) ? 'text-danger' : 'text-success'"
                                    >
                                        {{ formatData(record.send_actual_date, 'send_actual_date') }}
                                    </td>
                                    <td class="align-middle">
                                        {{ formatData(record.arrival_plan_date, 'arrival_plan_date') }}
                                    </td>
                                    <td class="align-middle"
                                        :class="isOutdatedArrival(record) ? 'text-danger' : 'text-success'"
                                    >
                                        {{ formatData(record.arrival_actual_date, 'arrival_actual_date') }}
                                    </td>
                                    <td class="align-middle"
                                        :class="isOutdated(record) ? 'text-danger' : 'text-success'"
                                    >
                                        {{ isOutdated(record) ? 'Да' : 'Нет' }}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <app-data-loader v-else></app-data-loader>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formatData from "../../mixins/formatData";
import asyncDataStatus from "../../mixins/asyncDataStatus"
import AppDataLoader from "../AppDataLoader";
import dataTablesSettings from "../../data/datatables_standard_settings";

export default {
    name: "ReportPage",
    components: {AppDataLoader},
    mixins: [formatData, asyncDataStatus],
    data() {
        return {
            data: [],
            users: [],
            types: [],
            from: '',
            to: '',
            chartOptions: {
                colors:['#45E676', '#F44336'],
                labels: ['В срок', 'Не в срок'],
                legend: {
                    position: 'left',
                    verticalAlign: 'middle',
                    fontSize: '14px',
                },

            }
        }
    },
    computed: {
        outdated: function () {
            let outdated = 0;
            this.data.forEach((record) => {
                if (this.isOutdated(record)) {
                    outdated++;
                }
            });
            return outdated;
        },
        onTime: function () {
            return this.data.length - this.outdated;
        }
    },
    methods: {
        today: function () {
            let date = new Date();
            return date.toISOString().slice(0, 10);
        },
        monthAgo: function () {
            let date = new Date();
            date.setMonth(date.getMonth() - 1);
            return date.toISOString().slice(0, 10);
        },
        isOutdated(record) {
            return (record.send_actual_date > record.send_planned_date) || (record.arrival_actual_date > record.arrival_plan_date);
        },
        isOutdatedSend(record) {
            return record.send_actual_date > record.send_planned_date;
        },
        isOutdatedArrival(record) {
            return record.arrival_actual_date > record.arrival_plan_date;
        },
        updateData(post = true) {
            this.asyncDataStatus_ready = false;

            let types_request = '/app/types';
            let users_request = '/app/users';
            let reports_request = '/app/reports/' + this.$route.params.listName;

            if (this.$route.params.listName !== 'overall') {
                reports_request += '/' + this.$route.params.id
            }

            let requests = [];
            requests[0] = axios.get(types_request);
            requests[1] = axios.get(users_request);

            requests[2] = post
                ? axios.post(reports_request, {from: this.from, to: this.to})
                : axios.get(reports_request);

            axios.all(requests).then(axios.spread((...responses) => {
                this.types = responses[0].data;
                this.users = responses[1].data;
                this.data = responses[2].data;

                this.data.map(record => {
                    let user = this.users.find(user => user.id == record.user_id);
                    if (user !== undefined) {
                        record.last_name = user.last_name;
                    }
                    return record;
                });

                this.asyncDataStatus_fetched();
            }));
        }
    },
    created() {
        this.updateData(false);

        this.from = this.monthAgo();
        this.to = this.today();
    },
    watch: {
        asyncDataStatus_ready(newValue) {
            if (newValue) {
                this.$nextTick(() => {
                    $('#report').DataTable({
                        ...dataTablesSettings,
                        pageLength: 100,
                        autoWidth: false,
                    });
                });
            }
        },
        $route (to, from) {
            this.updateData();
        }
    }
}
</script>

<style scoped>

</style>
