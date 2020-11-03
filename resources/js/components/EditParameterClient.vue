<template>
    <edit-parameter-selection-list
        :is-edit="isEdit"
        header="Клиент"
        list="client"
    ></edit-parameter-selection-list>
</template>

<script>
import EditParameterSelectionList from "./EditParameterSelectionList";
export default {
    name: "EditParameterClient",
    components: {EditParameterSelectionList},
    props: ['isEdit'],
}
</script>

<style scoped>

</style>
