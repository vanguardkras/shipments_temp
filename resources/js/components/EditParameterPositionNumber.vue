<template>
    <div class="mb-5">
        <h2>Номер позиционника</h2>
        <div class="input-group">
            <input class="form-control form-control-lg col-xl-4 col-lg-6 col-md-8 col-sm-12"
                   :class="validation"
                   onKeyPress="if (this.value.length == 5) return false;"
                   type="number"
                   placeholder="00000"
                   max="99999"
                   maxlength="5"
                   v-model="data"
            >
            <div class="invalid-tooltip">
                Это поле должно состоять из 4-х или 5-ти цифр.
            </div>
        </div>
    </div>
</template>

<script>
import editParameter from "../mixins/editParameter";
import {mapState} from "vuex";

export default {
    name: "EditParameterPositionNumber",
    mixins: [editParameter],
    props: ['isEdit'],
    computed: {...mapState(['editShipment'])},
    created() {
        if (this.isEdit) {
            this.data = this.editShipment.position_number;
        }
    },
    data() {
        return {
            isValidationRequired: true,
            validationPattern: '^\\d{4,5}$'
        }
    },
}
</script>

<style scoped>

</style>
