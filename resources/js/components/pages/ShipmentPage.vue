<template>
    <div class="container-fluid">
        <div class="row page-title">
            <div class="col-md-12" v-if="loaded">
                <nav class="float-right mt-1">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link :to="{name: 'ShipmentsAll'}">Перевозки</router-link></li>
                        <li class="breadcrumb-item">
                            Карточка перевозки № {{ shipment.position_number }}
                        </li>
                    </ol>
                </nav>
                <h3 class="mb-1 mt-0">
                    Карточка перевозки № {{ shipment.position_number }}
                    ({{ shipment.user.last_name + ' ' + shipment.user.first_name }})
                </h3>
                <div class="card">
                    <div class="card-body">
                        <div class="col-xl-6 col-md-10">
                            <table class="table table-sm table-bordered">
                                <tr>
                                    <th scope="row">Тип перевозки</th>
                                    <td>{{ shipment.type.name}}</td>
                                </tr>
                                <tr v-for="parameter in shipment.type.parameters" :key="parameter.id">
                                    <th scope="row">
                                        {{ parameter.table.charAt(parameter.table.length - 1) === 's' ? parameter.plural_name : parameter.singular_name }}
                                    </th>
                                    <td>{{ formatData(shipment[parameter.table], parameter.table) }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formatData from "../../mixins/formatData";

export default {
    name: "ShipmentPage",
    mixins: [formatData],
    data() {
        return {
            shipment: {},
            loaded: false,
        }
    },
    created() {
        axios.get('/app/shipments/' + this.$route.params.id)
        .then(response => {
            if (response.status === 200) {
                this.shipment = response.data;
                this.loaded = true;
            }
        });
    }
}
</script>

<style scoped>

</style>
