<script setup>
import Aside from "../Components/Aside.vue";
import { Head, usePage } from "@inertiajs/vue3";
import { computed } from "vue";
import { ModalsContainer, VueFinalModal } from "vue-final-modal";
import { useDownloadModalStore } from "../Store/DownloadModalStore";
import { Link } from "@inertiajs/vue3";
const categories = computed(() => usePage().props.categories);
const title = computed(() => usePage().props.title);
const downloadModalStore = useDownloadModalStore();
</script>

<template>
    <div class="flex container mx-auto gap-6">
        <Head>
            <title>{{ title }}</title>
        </Head>
        <Aside :categories="categories" />

        <div class="flex-1">
            <slot />
        </div>
    </div>
    <VueFinalModal
        v-model="downloadModalStore.options.modelValue"
        :teleport-to="downloadModalStore.options.teleportTo"
        :display-directive="downloadModalStore.options.displayDirective"
        :hide-overlay="downloadModalStore.options.hideOverlay"
        :overlay-transition="downloadModalStore.options.overlayTransition"
        :content-transition="downloadModalStore.options.contentTransition"
        :click-to-close="downloadModalStore.options.clickToClose"
        :esc-to-close="downloadModalStore.options.escToClose"
        :background="downloadModalStore.options.background"
        :lock-scroll="downloadModalStore.options.lockScroll"
        :reserve-scroll-bar-gap="downloadModalStore.options.reserveScrollBarGap"
        :swipe-to-close="downloadModalStore.options.swipeToClose"
        class="flex justify-center items-center"
        content-class="max-w-[640px] flex flex-col gap-2"
    >
        <div
            @click="downloadModalStore.options.modelValue = false"
            class="w-full justify-end flex"
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15 15L1 1M15 1L1 15"
                    stroke="#8A8F99"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <div
            class="flex bg-dark border p-8 border-gray_border rounded-2xl flex-col gap-8"
        >
            <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-semibold">Install Instructions</h2>
                <p class="text-sm">
                    Run the downloaded image and drag the application to the
                    Programs folder shortcut (Applications). After copying is
                    complete, you can launch the application from Launchpad.
                    <br /><br />
                    If the game doesn't work on Ventura and above, try entering
                    the following command in the terminal:
                    <br /><br /><span
                        @click="
                            downloadModalStore.copyToClipboard(
                                downloadModalStore.product.win_r_link
                            )
                        "
                        class="consolas hover:opacity-70 cursor-pointer transition-all"
                        >{{ downloadModalStore.product.win_r_link }}</span
                    >
                </p>
            </div>
            <div class="flex flex-col gap-2">
                <a
                    :href="downloadModalStore.product.download_file"
                    target="_blank"
                    class="btn btn-primary flex justify-center"
                >
                    <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.4648 6.90234C17.9469 6.57305 17.2996 6.33359 16.5867 6.20195C16.4666 6.17895 16.3558 6.1212 16.2682 6.03586C16.1806 5.95053 16.1199 5.84136 16.0938 5.72187C15.7867 4.37383 15.1328 3.2168 14.1738 2.33984C13.0527 1.31445 11.5707 0.75 10 0.75C8.61914 0.75 7.34375 1.18281 6.31367 2C5.61797 2.55467 5.0576 3.26038 4.675 4.06367C4.63244 4.15425 4.56881 4.23333 4.48943 4.29429C4.41006 4.35524 4.31725 4.39631 4.21875 4.41406C3.15898 4.60547 2.24492 4.9875 1.54648 5.53516C0.535156 6.3293 0 7.45156 0 8.78125C0 11.4141 2.18477 13.25 5.3125 13.25H9.375V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25H15.4688C18.3062 13.25 20 11.9125 20 9.67187C20 8.49805 19.4691 7.54023 18.4648 6.90234ZM9.375 16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25H9.375V16.118Z"
                            fill="white"
                        />
                        <path
                            d="M9.375 13.25H5.3125C2.18477 13.25 0 11.4141 0 8.78125C0 7.45156 0.535156 6.3293 1.54648 5.53516C2.24492 4.9875 3.15898 4.60547 4.21875 4.41406C4.31725 4.39631 4.41006 4.35524 4.48943 4.29429C4.56881 4.23333 4.63244 4.15425 4.675 4.06367C5.0576 3.26038 5.61797 2.55467 6.31367 2C7.34375 1.18281 8.61914 0.75 10 0.75C11.5707 0.75 13.0527 1.31445 14.1738 2.33984C15.1328 3.2168 15.7867 4.37383 16.0938 5.72187C16.1199 5.84136 16.1806 5.95053 16.2682 6.03586C16.3558 6.1212 16.4666 6.17895 16.5867 6.20195C17.2996 6.33359 17.9469 6.57305 18.4648 6.90234C19.4691 7.54023 20 8.49805 20 9.67187C20 11.9125 18.3062 13.25 15.4688 13.25H10.625M9.375 13.25V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25M9.375 13.25H10.625M9.375 13.25V16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25"
                            stroke="white"
                            stroke-width="0.0390625"
                        />
                    </svg>

                    Download
                </a>
                <a
                    :href="downloadModalStore.product.download_link"
                    target="_blank"
                    class="btn btn-primary flex justify-center"
                >
                    <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.4648 6.90234C17.9469 6.57305 17.2996 6.33359 16.5867 6.20195C16.4666 6.17895 16.3558 6.1212 16.2682 6.03586C16.1806 5.95053 16.1199 5.84136 16.0938 5.72187C15.7867 4.37383 15.1328 3.2168 14.1738 2.33984C13.0527 1.31445 11.5707 0.75 10 0.75C8.61914 0.75 7.34375 1.18281 6.31367 2C5.61797 2.55467 5.0576 3.26038 4.675 4.06367C4.63244 4.15425 4.56881 4.23333 4.48943 4.29429C4.41006 4.35524 4.31725 4.39631 4.21875 4.41406C3.15898 4.60547 2.24492 4.9875 1.54648 5.53516C0.535156 6.3293 0 7.45156 0 8.78125C0 11.4141 2.18477 13.25 5.3125 13.25H9.375V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25H15.4688C18.3062 13.25 20 11.9125 20 9.67187C20 8.49805 19.4691 7.54023 18.4648 6.90234ZM9.375 16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25H9.375V16.118Z"
                            fill="white"
                        />
                        <path
                            d="M9.375 13.25H5.3125C2.18477 13.25 0 11.4141 0 8.78125C0 7.45156 0.535156 6.3293 1.54648 5.53516C2.24492 4.9875 3.15898 4.60547 4.21875 4.41406C4.31725 4.39631 4.41006 4.35524 4.48943 4.29429C4.56881 4.23333 4.63244 4.15425 4.675 4.06367C5.0576 3.26038 5.61797 2.55467 6.31367 2C7.34375 1.18281 8.61914 0.75 10 0.75C11.5707 0.75 13.0527 1.31445 14.1738 2.33984C15.1328 3.2168 15.7867 4.37383 16.0938 5.72187C16.1199 5.84136 16.1806 5.95053 16.2682 6.03586C16.3558 6.1212 16.4666 6.17895 16.5867 6.20195C17.2996 6.33359 17.9469 6.57305 18.4648 6.90234C19.4691 7.54023 20 8.49805 20 9.67187C20 11.9125 18.3062 13.25 15.4688 13.25H10.625M9.375 13.25V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25M9.375 13.25H10.625M9.375 13.25V16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25"
                            stroke="white"
                            stroke-width="0.0390625"
                        />
                    </svg>

                    Download from Mediafire
                </a>
            </div>
            <div class="text-sm max-w-[300px] text-gray">
                Having trouble downloading or activating?<br />
                We have gathered all the answers on <Link
                    class="text-blue hover:opacity-70"
                    href="/faq"
                    >this page</Link
                >
            </div>
        </div>
    </VueFinalModal>
    <ModalsContainer />
</template>
