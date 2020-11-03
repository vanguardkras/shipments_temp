<template>
    <edit-parameter-selection-list
        :is-edit="isEdit"
        header="Условие поставки"
        list="delivery_condition"
    ></edit-parameter-selection-list>
</template>

<script>
import EditParameterSelectionList from "./EditParameterSelectionList";
export default {
    name: "EditParameterDeliveryCondition",
    components: {EditParameterSelectionList},
    props: ['isEdit'],
}
</script>

<style scoped>

</style>

