<script setup>
import MainLayout from "../Layouts/MainLayout.vue";
import { Link } from "@inertiajs/vue3";
import ProductCard from "../Components/ProductCard.vue";
import ProductCardGame from "../Components/ProductCardGame.vue";

const props = defineProps({
    categories: Array,
});
</script>

<template>
    <MainLayout>
        <main class="flex flex-col gap-6">
            <div v-for="category in categories" class="flex flex-col gap-5">
                <div class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold">{{ category.name }}</h1>
                    <Link
                        class="text-blue font-medium hover:text-blue/50 transition-all duration-300"
                        :href="`/category/${category.id}`"
                    >
                        See all
                    </Link>
                </div>
                <div class="grid grid-cols-4 gap-5">
                    <div v-for="product in category.products">
                        <ProductCardGame
                            v-if="product.is_full_image"
                            :product="product"
                            :category="category"
                        />
                        <ProductCard
                            v-else
                            :product="product"
                            :category="category"
                        />
                    </div>
                </div>
            </div>
        </main>
    </MainLayout>
</template>

<style></style>
