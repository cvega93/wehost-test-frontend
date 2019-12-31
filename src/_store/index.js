import Vue from 'vue';
import Vuex from 'vuex';

import {home} from './home.store';


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        home,
    }
});