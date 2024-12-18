<script setup>
import MainLayout from "../Layouts/MainLayout.vue";
import { Link } from "@inertiajs/vue3";
import ProductCard from "../Components/ProductCard.vue";
import ProductCardGame from "../Components/ProductCardGame.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, onMounted } from "vue";

const props = defineProps({
    category: Object,
    products: Object,
});

const productsList = ref(props.products.data);
const currentPage = ref(1);
const form = useForm({});
const loading = ref(false);

onMounted(() => {
    productsList.value = props.products.data;
});

function loadMore() {
    loading.value = true;
    form.get(props.products.next_page_url, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: (page) => {
            productsList.value = [
                ...productsList.value,
                ...page.props.products.data,
            ];
            loading.value = false;
        },
    });
}
</script>

<template>
    <MainLayout>
        <main class="flex flex-col gap-6">
            <div class="flex flex-col gap-5">
                <div class="flex justify-between items-center">
                    <h1 class="text-4xl font-semibold">
                        {{ props.category.name }}
                    </h1>
                </div>
                <div class="grid grid-cols-4 gap-5">
                    <div v-for="product in productsList">
                        <ProductCardGame
                            v-if="product.is_full_image"
                            :category="props.category"
                            :product="product"
                        />
                        <ProductCard
                            v-else
                            :category="props.category"
                            :product="product"
                        />
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <button
                        v-if="products.next_page_url"
                        @click="loadMore"
                        class="btn btn-primary"
                        :disabled="loading"
                    >
                        <div v-if="!loading">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.49996 1.66663V13.3333M1.66663 7.49996H13.3333"
                                    stroke="white"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <span v-else class="loader"></span>

                        More programs
                    </button>
                </div>
            </div>
        </main>
    </MainLayout>
</template>

<style></style>
