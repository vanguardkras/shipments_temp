<template>
    <edit-parameter-selection-list
        :is-edit="isEdit"
        header="Место загрузки"
        list="load_place"
        :clientDependent="true"
    ></edit-parameter-selection-list>
</template>

<script>
import EditParameterSelectionList from "./EditParameterSelectionList";
export default {
    name: "EditParameterLoadPlace",
    components: {EditParameterSelectionList},
    props: ['isEdit'],
}
</script>

<style scoped>

</style>
