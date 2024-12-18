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
                    <h1 class="text-4xl font-semibold">Contacts</h1>
                </div>
            </div>
            <div class="text-sm font-medium">
                If you need assistance with software installation, please
                contact specialists
                <br /><br />
                Information for copyright holders (DMCA)
                <br /><br />
                Other inquiries: 8745yudfhkdsh@gmail.com
            </div>
        </main>
    </MainLayout>
</template>

<style></style>
