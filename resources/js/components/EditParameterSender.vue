<template>
    <edit-parameter-selection-list
        :is-edit="isEdit"
        header="Отправитель"
        list="sender"
        :clientDependent="true"
    ></edit-parameter-selection-list>
</template>

<script>
import EditParameterSelectionList from "./EditParameterSelectionList";
export default {
    name: "EditParameterSender",
    components: {EditParameterSelectionList},
    props: ['isEdit'],
}
</script>

<style scoped>

</style>

