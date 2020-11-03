<template>
    <div class="container-fluid">
        <div class="row page-title">
            <div class="col-md-12">
                <h3 class="mb-1 mt-0">
                    {{ isEditOnly
                    ? 'Редактировать перевозку № ' +
                    (editShipment.position_number ? editShipment.position_number : 'Нет номера')
                    : 'Новая перевозка' }}
                    <button v-if="isEditOnly" class="btn btn-sm btn-primary"
                            @click="copy"
                    ><i data-feather="copy"></i>
                    </button>
                </h3>
                <div class="card">
                    <div class="card-body">
                        <h4>Тип перевозки</h4>
                        <select v-model="selectedType" class="custom-select custom-select-lg mb-2"
                                id="shipment_type_select" :disabled="isEditOnly">
                            <option value="0">Выберите тип перевозки</option>
                            <option v-for="type in types" :value="type.id" :key="type.id">{{ type.name }}</option>
                        </select>
                        <div :class="{'d-none': !typeRetrieved}" id="main-form">
                            <h4 id="data_header">Данные</h4>
                            <button class="btn btn-lg my-3" @click="saveShipment"
                                    :class="saved ? 'btn-soft-success' : (unfilledRequired ? 'btn-warning' : 'btn-success')">
                                <span v-if="saved">Изменения сохранены</span>
                                <span v-else-if="unfilledRequired">Не заполнены обязательные поля</span>
                                <span v-else>Сохранить {{ isEditOnly ? 'изменения' : 'перевозку' }}</span>
                            </button>
                            <form-wizard
                                @on-complete="complete"
                                ref="wizard"
                                v-if="typeRetrieved"
                                title=""
                                subtitle=""
                                nextButtonText="Далее"
                                backButtonText="Назад"
                                finishButtonText="Выйти (без сохранения)"
                                color="#5369f8"
                                shape="square"
                                stepSize="xs"
                                :startIndex="isEdit ? type.parameters.length + 1 : 0"
                            >
                                <tab-content
                                    v-for="parameter in type.parameters"
                                    :key="parameter.id"
                                    :title="parameter.short"
                                >
                                    <div class="py-3">
                                        <component
                                            :is="getComponentName(parameter.table)"
                                            :isEdit="isEdit"
                                            :type_id="type.id"
                                        ></component>
                                    </div>
                                </tab-content>
                                <tab-content title="Даты">
                                    <edit-parameter-dates :isEdit="isEdit"></edit-parameter-dates>
                                </tab-content>
                                <tab-content title="Коммент">
                                    <edit-parameter-comment :isEdit="isEdit"></edit-parameter-comment>
                                </tab-content>
                            </form-wizard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import EditParameterAirports from "./EditParameterAirports";
import EditParameterBatchSize from "./EditParameterBatchSize";
import EditParameterBatchWeight from "./EditParameterBatchWeight";
import EditParameterCar from "./EditParameterCar";
import EditParameterCarriageNumber from "./EditParameterCarriageNumber";
import EditParameterClient from "./EditParameterClient";
import EditParameterComment from "./EditParameterComment";
import EditParameterContainer from "./EditParameterContainer";
import EditParameterContainerNumber from "./EditParameterContainerNumber";
import EditParameterContractors from "./EditParameterContractors";
import EditParameterDates from "./EditParameterDates";
import EditParameterDeliveryCondition from "./EditParameterDeliveryCondition";
import EditParameterDeliveryPlace from "./EditParameterDeliveryPlace";
import EditParameterHAWBNumber from "./EditParameterHAWBNumber";
import EditParameterLoadPlace from "./EditParameterLoadPlace";
import EditParameterMAWBNumber from "./EditParameterMAWBNumber";
import EditParameterPorts from "./EditParameterPorts";
import EditParameterPositionNumber from "./EditParameterPositionNumber";
import EditParameterSpotQuantity from "./EditParameterSpotQuantity";
import EditParameterStations from "./EditParameterStations";
import EditParameterTransportDocNumber from "./EditParameterTransportDocNumber";
import EditParameterReceiver from "./EditParameterReceiver";
import EditParameterSender from "./EditParameterSender";

import {mapMutations, mapState} from "vuex";

export default {
    name: "EditShipmentWizard",
    components: {
        FormWizard,
        TabContent,
        EditParameterAirports,
        EditParameterBatchSize,
        EditParameterBatchWeight,
        EditParameterCar,
        EditParameterCarriageNumber,
        EditParameterClient,
        EditParameterComment,
        EditParameterContainer,
        EditParameterContainerNumber,
        EditParameterContractors,
        EditParameterDates,
        EditParameterDeliveryCondition,
        EditParameterDeliveryPlace,
        EditParameterHAWBNumber,
        EditParameterLoadPlace,
        EditParameterMAWBNumber,
        EditParameterPorts,
        EditParameterPositionNumber,
        EditParameterSpotQuantity,
        EditParameterStations,
        EditParameterTransportDocNumber,
        EditParameterReceiver,
        EditParameterSender
    },
    props: ['isEdit', 'isCopy'],
    data() {
        return {
            type: {},
            types: {},
            typeRetrieved: false,
            selectedType: 0,
            isWithStations: false,
            saved: false,
            requiredParameters: [],
            unfilledRequired: false,
        }
    },
    computed: {
        ...mapState(['editShipment', 'newShipment']),
        isEditOnly: function () {
            return this.isEdit && !this.isCopy;
        }
    },
    methods: {
        ...mapMutations(['cleanNewShipment', 'setNewShipment', 'updateNewShipment', 'setEditShipment', 'setTypeId']),
        copy() {
            this.$router.push({name: 'CreateCopy'});
        },
        filterType(type) {
            let dates = type.parameters.filter(value => value.table.includes('_date'));
            let comment = type.parameters.filter(value => value.table === 'comment');
            type.parameters = type.parameters.filter(value => !value.table.includes('_date'));
            type.parameters = type.parameters.filter(value => value.table !== 'comment');
            type.dates = dates;
            type.comment = comment[0];
            return type;
        },
        getComponentName(name) {
            return 'edit-parameter-' + _.kebabCase(name);
        },
        nextTab() {
            //TODO: Remove in case no need to go to the next step
            //setTimeout(() => this.$refs.wizard.nextTab(), 1500)
        },
        saveShipment() {
            let hasUnfilledRequired = false;
            this.requiredParameters.forEach(table => {
                hasUnfilledRequired = this.isEditOnly ? !this.editShipment[table] : !this.newShipment[table];
            });

            if (hasUnfilledRequired) {
                this.unfilledRequired = true;
                setTimeout(() => this.unfilledRequired = false, 2000);
                return;
            }

            if (this.isEditOnly) {
                axios.patch('/app/shipments/' + this.editShipment.id, this.newShipment)
                    .then(response => {
                        if (response.data === 'Success') {
                            this.saved = true;
                            setTimeout(() => this.saved = false, 1000);
                        }
                    });
            } else {
                axios.post('/app/shipments', this.newShipment)
                    .then(response => {
                        this.$router.push({name: 'Edit', params: {id: response.data}});
                    });
            }
        },
        complete() {
            this.$router.push({name: 'ShipmentsMy'});
        }
    },
    created() {
        axios.get('/app/types')
            .then(response => {
                if (response.status === 200) {
                    this.types = response.data;
                }
            });
        if (this.isEditOnly) {
            axios.get('/app/shipments/' + this.$route.params.id)
                .then(response => {
                    if (response.status === 200) {
                        this.setEditShipment(response.data);
                        this.selectedType = this.editShipment.type_id;
                    }
                });
        } else if (this.isCopy) {
            this.selectedType = this.editShipment.type_id;
        } else {
            // TODO: check in case no need to go to the nex step
            //this.$eventBus.$on('validatedInput', this.nextTab);
        }
    },
    mounted() {
        feather.replace();
    },
    watch: {
        selectedType: function (newSelectedType) {
            this.typeRetrieved = false;
            if (newSelectedType > 0) {
                axios.get('/app/types/' + newSelectedType)
                    .then(response => {
                        if (response.status === 200) {
                            this.type = this.filterType(response.data);
                            this.typeRetrieved = true;
                            this.cleanNewShipment();
                            this.updateNewShipment({parameter: 'type_id', value: this.type.id});
                            this.setTypeId(this.type.id);

                            let required = this.type.parameters.filter(value => value.required);
                            this.requiredParameters = required.map(value => value.table);
                        }
                    });
            }
        }
    },
}
</script>

<style>
@import '~vue-form-wizard/dist/vue-form-wizard.min.css';
</style>
