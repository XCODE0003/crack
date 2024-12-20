<script setup>
import MainLayout from "../Layouts/MainLayout.vue";
import { Link } from "@inertiajs/vue3";
import { ref, computed, onMounted } from "vue";
import { Head } from "@inertiajs/vue3";
import { useDownloadModalStore } from "../Store/DownloadModalStore";
import { parseSeoTags, formatUrl } from "../utils";
const downloadModalStore = useDownloadModalStore();
const props = defineProps({
    product: Object,
    category: Object,
    products: Array,
});

const isClient = ref(false);

onMounted(() => {
    isClient.value = true;
});

const seoTags = computed(() => parseSeoTags(props.product.seo_code));
</script>

<template>
    <MainLayout>
        <Head>
            <template v-for="(meta, index) in seoTags.meta" :key="index">
                <meta v-bind="meta" />
            </template>
        </Head>
        <main class="flex flex-col gap-6">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-2">
                    <h1 class="text-4xl font-semibold">{{ product.title }}</h1>
                    <Link
                        :href="'/' + formatUrl(category?.name.toLowerCase())"
                        class="text-blue"
                    >
                        {{ category.name }}
                    </Link>
                </div>
            </div>
            <div class="flex gap-6">
                <div class="flex flex-col flex-1 gap-6">
                    <img
                        :src="'/storage/' + product.big_image"
                        :alt="product.alt_image"
                        class="w-full h-full max-h-[400px] rounded-xl object-cover"
                    />
                    <div class="bg-dark rounded-3xl p-6 flex flex-col gap-6">
                        <h2 class="font-semibold text-2xl">Description</h2>
                        <div class="h-[1px] bg-gray_border"></div>
                        <p v-html="product.description"></p>
                    </div>
                </div>
                <div
                    class="p-6 bg-dark max-w-[300px] h-fit w-full rounded-3xl flex flex-col gap-9"
                >
                    <div class="flex flex-col gap-4">
                        <div
                            v-for="spec in product.specifications"
                            class="flex flex-col gap-1"
                        >
                            <span class="text-sm text-gray font-medium">{{
                                spec.title
                            }}</span>
                            <p>{{ spec.value }}</p>
                        </div>
                    </div>

                    <button
                        @click="downloadModalStore.openModal(product)"
                        class="download-btn w-full justify-between"
                    >
                        <div class="flex items-center gap-2">
                            <span>Download</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            ></svg>
                        </div>
                        <span class="text-white/75">{{
                            product.size_file
                        }}</span>
                    </button>
                    <div class="flex flex-col gap-4">
                        <h2 class="text-sm font-medium text-gray">
                            Similar apps
                        </h2>
                        <div class="flex flex-col gap-3">
                            <Link
                                v-for="product in props.products"
                                :href="
                                    '/' +
                                    formatUrl(category?.name.toLowerCase()) +
                                    '/' +
                                    formatUrl(product?.title.toLowerCase())
                                "
                                class="flex items-center gap-3 pb-3 border-b border-gray_border"
                            >
                                <img
                                    :src="'/storage/' + product.image"
                                    class="w-6 h-6 rounded-md object-cover"
                                />
                                <span>{{ product.title }}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </MainLayout>
</template>

<style scoped>
.faq-answer {
    transition: all 0.1s ease-in-out;
}
</style>
