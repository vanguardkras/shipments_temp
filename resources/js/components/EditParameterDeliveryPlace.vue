<template>
    <edit-parameter-selection-list
        :is-edit="isEdit"
        header="Место доставки"
        list="delivery_place"
        :clientDependent="true"
    ></edit-parameter-selection-list>
</template>

<script>
import EditParameterSelectionList from "./EditParameterSelectionList";
export default {
    name: "EditParameterDeliveryPlace",
    components: {EditParameterSelectionList},
    props: ['isEdit'],
}
</script>

<style scoped>

</style>

