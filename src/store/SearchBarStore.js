import { createPinia } from 'pinia'
export const searchBarStore = createPinia({
    id: 'searchBar',
    state: () => ({
        showModal: false,
    }),

    getters: {
        getModalVisible() {
            return this.showModal;
        },
    },

    persist: true
})