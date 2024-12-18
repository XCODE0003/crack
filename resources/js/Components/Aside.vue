<script setup>
import Logo from "./Icons/Logo.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    categories: Array,
});
</script>

<template>
    <aside class="min-h-screen flex flex-col justify-between">
        <div class="flex flex-col gap-12">
            <Link href="/">
                <Logo />
            </Link>
            <div class="flex flex-col aside-nav gap-4">
                <Link
                    v-for="category in props.categories"
                    :href="`/category/${category.id}`"
                    class="flex items-center gap-3"
                >
                    <div
                        class="bg-dark rounded-full h-8 w-8 flex items-center justify-center"
                    >
                        <img
                            :src="`/storage/${category.icon}`"
                            class="h-4.5 w-4.5"
                            alt=""
                            srcset=""
                        />
                    </div>
                    {{ category.name }}
                </Link>
            </div>
        </div>
        <div class="flex aside-nav flex-col gap-4">
            <Link href="/information" class="flex items-center gap-2.5">
                Copyright Holders
                <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.75 1.5L5.25 6L0.75 10.5"
                        stroke="#8A8F99"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Link>
            <Link href="/privacy" class="flex items-center gap-2.5">
                Privacy & Policy
                <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.75 1.5L5.25 6L0.75 10.5"
                        stroke="#8A8F99"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Link>
            <Link href="/faq" class="flex items-center gap-2.5">
                FAQ
                <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.75 1.5L5.25 6L0.75 10.5"
                        stroke="#8A8F99"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Link>
            <Link href="/contacts" class="flex items-center gap-2.5">
                Contacts
                <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.75 1.5L5.25 6L0.75 10.5"
                        stroke="#8A8F99"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Link>
        </div>
    </aside>
</template>
