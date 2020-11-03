<template>
    <edit-parameter-selection-list
        :is-edit="isEdit"
        header="Получатель"
        list="receiver"
        :clientDependent="true"
    ></edit-parameter-selection-list>
</template>

<script>
import EditParameterSelectionList from "./EditParameterSelectionList";
export default {
    name: "EditParameterReceiver",
    components: {EditParameterSelectionList},
    props: ['isEdit'],
}
</script>

<style scoped>

</style>

