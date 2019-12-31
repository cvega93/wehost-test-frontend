const state = {
    pages: null,
    activePage: 1,
    countRecords: null,
    itemsPerPage: 6,
    title: 'Home',
    status: {},
    inProgressShow: [],
    inProgress: [],
    insideDepartment: [],
    nextShow: [],
    activePageNext: 1,
    pagesNext: null,
    countRecordsNext: null,
    nextCleaning: []
};

const actions = {
    async progressCleaning({commit}, auth) {
        const generated_token = `Bearer ${auth.token}`;
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Authorization': generated_token}
        };
        let jsonResponse = await fetch(`${auth.url}/access/staff/control/cleaning/test`, requestOptions);
        let data = await jsonResponse.json();
        commit('set_progress', data.data)
    },
    async accessStatusCleaning({commit}, auth) {

        const generated_token = `Bearer ${auth.token}`;
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Authorization': generated_token}
        };
        try {
            const jsonResponse = await fetch(`${auth.url}/access/status/cleaning`, requestOptions);
            let data = await jsonResponse.json()
            if (data.success) {
                commit('set_status', data.data)
            }
        } catch (err) {
            console.log(err)
        }

    },
    async staffInsideDepartment({commit}, auth) {

        const generated_token = `Bearer ${auth.token}`;
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Authorization': generated_token}
        };
        try {
            const jsonResponse = await fetch(`${auth.url}/access/staff/inside/department`, requestOptions);
            let data = await jsonResponse.json()
            if (data.success) {
                commit('set_inside_department', data.data)
            }
        } catch (err) {
            console.log(err)
        }

    },
    async accesNextCleaning({commit}, auth) {

        const generated_token = `Bearer ${auth.token}`;
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Authorization': generated_token}
        };
        try {
            const jsonResponse = await fetch(`${auth.url}/access/next/cleaning`, requestOptions);
            let data = await jsonResponse.json()
            if (data.success) {
                commit('set_next_cleaning', data.data)
            }
        } catch (err) {
            console.log(err)
        }

    },
    showPageRegister({commit}, data) {
        commit('set_data_x_page', data)
    },
    showPageRegisterNext({commit}, data) {
        commit('set_data_x_page_next', data)
    }
};

const mutations = {
    set_data_x_page(state, data) {
        state.inProgressShow = data.narr;
        state.activePage = data.page;
    },
    set_data_x_page_next(state, data) {
        state.nextShow = data.narr;
        state.activePageNext = data.page;
    },
    change_title(state, title) {
        state.title = title;
    },
    set_progress(state, inProgress) {
        state.inProgress = inProgress;
    },
    set_status(state, status) {
        state.status = status;
    },
    set_inside_department(state, insideDepartment) {
        state.insideDepartment = insideDepartment;
    },
    set_next_cleaning(state, next_cleaning) {
        state.nextCleaning = next_cleaning;
    }
}


export const home = {
    namespaced: true,
    state,
    actions,
    mutations
};
