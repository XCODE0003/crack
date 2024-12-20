<script setup>
import MainLayout from "../Layouts/MainLayout.vue";
import { Link } from "@inertiajs/vue3";
import ProductCard from "../Components/ProductCard.vue";
import ProductCardGame from "../Components/ProductCardGame.vue";
import Slider from "../Components/Slider.vue";
import { Head } from "@inertiajs/vue3";
import { formatUrl } from "../utils";
const props = defineProps({
    categories: Array,
    sliders: Array,
});
</script>

<template>
    <MainLayout>
        <Head>
            <meta
                name="title"
                content="Free Software for Windows - Download Free Tools and Utilities"
            />
            <meta
                name="description"
                content="Discover the best free software for Windows. Download utilities, antivirus programs, media players, and more without registration. Your source for reliable and secure free tools."
            />
            <meta
                name="keywords"
                content="free software for Windows, free Windows tools, free antivirus download, best free media player, free utilities for Windows"
            />
        </Head>
        <main class="flex flex-col gap-6">
            <div class="w-full max-w-full overflow-hidden">
                <Slider :sliders="sliders" class="w-full max-w-full" />
            </div>
            <div v-for="category in categories" class="flex flex-col gap-5">
                <div class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold">{{ category.name }}</h1>
                    <Link
                        class="text-blue font-medium hover:text-blue/50 transition-all duration-300"
                        :href="'/' + formatUrl(category?.name.toLowerCase())"
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
