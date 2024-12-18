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
                    <h1 class="text-4xl font-semibold">
                        Information for Copyright Holders
                    </h1>
                </div>
            </div>
            <div class="text-sm font-medium">
                If you are the copyright holder of materials (texts,
                photographs, or other objects of copyright) posted on the Site
                and/or your rights are infringed by materials on the Site in any
                other way, please send a corresponding request to the Site
                Administration at the email address support@appstorrent.org and
                provide exhaustive evidence of your ownership of exclusive
                rights to the relevant materials (works) and/or other
                information and data regarding the nature of the rights
                infringement.
                <br /><br />
                Your request will be reviewed by the Site Administration within
                a period not exceeding 5 (Five) business days from the date of
                receipt of the request with exhaustive data and confirmations of
                the violation of your rights.
                <br /><br />
                In accordance with the current norms of Russian legislation, the
                Site Administration is ready to consider all disputed issues
                within the framework of the pre-trial procedure for settlement.
            </div>
        </main>
    </MainLayout>
</template>

<style></style>
