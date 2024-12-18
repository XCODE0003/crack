<script setup>
import MainLayout from "../Layouts/MainLayout.vue";
import { Link } from "@inertiajs/vue3";
import ProductCard from "../Components/ProductCard.vue";
import ProductCardGame from "../Components/ProductCardGame.vue";
</script>

<template>
    <MainLayout>
        <main class="flex flex-col gap-6">
            <div class="flex flex-col gap-5">
                <div class="flex justify-between items-center">
                    <h1 class="text-4xl font-semibold">Updates</h1>
                </div>
            </div>
            <div class="max-w-[640px] flex flex-col gap-2">
                <div
                    class="p-6 rounded-xl font-medium bg-dark flex justify-between items-center"
                >
                    <span> Add window resize and fix bugs </span>
                    <span class="text-sm text-gray">07.10.2024 </span>
                </div>
                <div
                    class="p-6 rounded-xl font-medium bg-dark flex justify-between items-center"
                >
                    <span> Add window resize and fix bugs </span>
                    <span class="text-sm text-gray">07.10.2024 </span>
                </div>
                <div
                    class="p-6 rounded-xl font-medium bg-dark flex justify-between items-center"
                >
                    <span> Add window resize and fix bugs </span>
                    <span class="text-sm text-gray">07.10.2024 </span>
                </div>
                <div
                    class="p-6 rounded-xl font-medium bg-dark flex justify-between items-center"
                >
                    <span> Add window resize and fix bugs </span>
                    <span class="text-sm text-gray">07.10.2024 </span>
                </div>
                <div
                    class="p-6 rounded-xl font-medium bg-dark flex justify-between items-center"
                >
                    <span> Add window resize and fix bugs </span>
                    <span class="text-sm text-gray">07.10.2024 </span>
                </div>
            </div>
        </main>
    </MainLayout>
</template>

<style></style>
