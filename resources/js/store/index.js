import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        roles: ['Администратор', 'Модератор', 'Сотрудник'],
        newShipment: {},
        editShipment: {},
        type_id: null,
    },

    actions: {
        async getUser({commit}) {
            await axios.get('/app/user')
                .then(response => commit('setUser', response.data));
        }
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        cleanNewShipment(state) {
            state.newShipment = {};
        },
        setNewShipment(state, data) {
            state.newShipment = data;
        },
        updateNewShipment(state, {parameter, value}) {
            state.newShipment[parameter] = value;
        },
        setEditShipment(state, shipment) {
            state.editShipment = shipment;
        },
        setTypeId(state, type_id) {
            state.type_id = type_id;
        }
    }
})
