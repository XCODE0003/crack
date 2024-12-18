import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDownloadModalStore = defineStore('downloadModal', {
    state: () => ({
        options: ref({
            teleportTo: 'body',
            modelValue: false,
            displayDirective: 'if',
            hideOverlay: false,
            overlayTransition: 'vfm-fade',
            contentTransition: 'vfm-fade',
            clickToClose: true,
            escToClose: true,
            background: 'non-interactive',
            lockScroll: true,
            reserveScrollBarGap: true,
            swipeToClose: 'none',
        }),
        product: null
    }),

    actions: {
        copyToClipboard(text) {
            navigator.clipboard.writeText(text)
        },
        openModal(product) {
            this.product = product
            this.options.modelValue = true
        },

        closeModal() {
            this.product = null
            this.options.modelValue = false
        }
    }
})
