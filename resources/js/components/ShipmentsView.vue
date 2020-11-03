<template>
    <div class="card">
        <div class="card-body">
            <div class="form-row">
                <div class="form-group-row mr-2">
                    <input class="form-control" type="text" v-model.lazy="search">
                </div>
                <div class="form-group-row">
                    <button class="btn btn-primary" @click="searchAll">
                        <div v-if="searching">
                            <div class="spinner-grow" style="width: 20px; height: 20px"></div>
                            <div class="spinner-grow" style="width: 20px; height: 20px"></div>
                            <div class="spinner-grow" style="width: 20px; height: 20px"></div>
                        </div>
                        <span v-else>Глобальный поиск</span>
                    </button>
                </div>
            </div>
            <ul class="nav nav-tabs" id="types-tab" role="tablist">
                <li v-for="type in types" class="nav-item">
                    <a class="nav-link"
                       :class="type.id === 1 ? 'active' : ''"
                       data-toggle="tab"
                       :href="'#type-' + type.id"
                       @click="load(type.id)"
                       role="tab">
                        {{ type.name }}
                    </a>
                </li>
            </ul>
            <div class="tab-content" id="types">
                <div v-for="type in types" :id="'type-' + type.id" class="tab-pane fade show"
                     :class="type.id === 1 ? 'active' : ''" role="tabpanel">
                    <table :id="'shipments-datatable-' + type.id"
                           v-if="shipments[type.id]"
                           class="shipments-table table table-sm table-striped table-bordered small">
                        <thead>
                        <tr>
                            <th scope="col" v-for="parameter in parameters[type.id]" :key="parameter.id">
                                {{ parameter.short }}
                            </th>
                            <th v-if="with_name">Сотрудник</th>
                            <th v-if="with_delete"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="shipment in shipments[type.id]" :key="shipment.id">
                            <td class="align-middle" v-for="parameter in parameters[type.id]" :key="parameter.id">
                                <router-link :to="{name: to_card ? 'Shipment' : 'Edit', params: {id: shipment.id}}"
                                             v-if="parameter.table === 'position_number'">
                                    {{ formatData(shipment[parameter.table], parameter.table) }}
                                </router-link>
                                <span v-else>
                                    {{ formatData(shipment[parameter.table], parameter.table) }}
                                </span>
                            </td>
                            <td class="align-middle" v-if="with_name">
                                {{ shipment.user.last_name + ' ' + shipment.user.first_name }}
                            </td>
                            <td v-if="with_delete" class="align-middle">
                                <span @click="deleteShipment(shipment, type.id)"
                                      class="pointer text-danger">&#10006;</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <app-data-loader v-else></app-data-loader>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dataTablesSettings from "../data/datatables_standard_settings"
import AppDataLoader from "./AppDataLoader";
import formatData from "../mixins/formatData";
import {MinusCircleIcon} from 'vue-feather-icons';

export default {
    name: "ShipmentsView",
    components: {AppDataLoader, MinusCircleIcon},
    mixins: [formatData],
    props: {
        request: {default: ''},
        to_card: {default: false},
        with_name: {default: false},
        with_delete: {default: false},
    },
    data() {
        return {
            types: [],
            shipments: [],
            parameters: [],
            search: '',
            searching: false,
            full_load: false,
            exclude_values: [
                'comment',
                'sender',
                'receiver'
            ]
        }
    },
    methods: {
        load(type_id) {
            if (this.parameters[type_id] === undefined) {
                axios
                    .get('/app/parameters/' + type_id + '/type')
                    .then(response => {
                        let data = response.data.filter(value => !this.exclude_values.includes(value.table));
                        this.$set(this.parameters, type_id, data);
                    });
            }

            if (this.shipments[type_id] === undefined) {
                axios
                    .get('/app/shipments/' + type_id + '/type/' + this.request)
                    .then(response => {
                        this.$set(this.shipments, type_id, response.data);
                        this.dataTableIni(type_id);
                    });
            }
        },
        loadAll() {
            let unloaded_types = [];
            this.searching = true;
            this.types.forEach(type => {
                if (this.shipments[type.id] === undefined) {
                    unloaded_types.push(type.id);
                }
            });
            let requests = [];
            let type_requests = [];
            unloaded_types.forEach(type_id => {
                requests.push(axios.get('/app/shipments/' + type_id + '/type/' + this.request));
                type_requests.push(axios.get('/app/parameters/' + type_id + '/type'));
            });
            axios.all(type_requests).then(axios.spread((...responses) => {
                let index = 0;
                unloaded_types.forEach(type_id => {
                    this.$set(this.parameters, type_id, responses[index].data);
                    index++;
                });
            }));
            axios.all(requests).then(axios.spread((...responses) => {
                let index = 0;
                unloaded_types.forEach(type_id => {
                    this.$set(this.shipments, type_id, responses[index].data);
                    this.dataTableIni(type_id);
                    index++;
                });
                this.full_load = true;
                if (this.search) {
                    this.globalSearch();
                }
                this.searching = false;
            }));
        },
        dataTableIni(type_id) {
            this.$nextTick(() => {
                if (this.shipments[type_id]) {
                    $('#shipments-datatable-' + type_id).DataTable({
                        ...dataTablesSettings,
                        pageLength: 100,
                        autoWidth: true,
                    });
                }
            });
        },
        deleteShipment(shipment, type_id) {
            if (!confirm('Вы уверены, что хотите удалить эту перевозку?')) {
                return;
            }
            axios.delete('/app/shipments/' + shipment.id)
                .then(response => {
                    if (response.data === 'Success') {
                        let index = this.shipments[type_id].indexOf(shipment);
                        if (index > -1) {
                            this.shipments[type_id].splice(index, 1);
                        }
                    }
                });
        },
        globalSearch() {
            this.$nextTick(() => {
                this.searching = true;
                $('.shipments-table').DataTable().tables().search(this.search).draw();
                this.searching = false;
            });
        },
        searchAll() {
            if (this.full_load) {
                this.globalSearch();
            } else {
                this.loadAll();
            }
        }
    },
    created() {
        axios
            .get('/app/types')
            .then(response => {
                this.types = response.data;
                this.load(1);
                $('body').addClass('left-side-menu-condensed');
            });
    }
}
</script>

<style scoped>
.table-sm th, .table-sm td {
    padding: 1px;
}

.pointer {
    cursor: pointer;
}
</style>
