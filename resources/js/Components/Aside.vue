<script setup>
import Logo from "./Icons/Logo.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    categories: Array,
});
</script>

<template>
    <aside class="min-h-screen flex-shrink-0 flex flex-col justify-between">
        <div class="flex flex-col gap-12">
            <Link href="/">
                <Logo />
            </Link>
            <div class="flex flex-col aside-nav gap-4">
                <Link
                    v-for="category in props.categories"
                    :href="`/category/${category.name.toLowerCase()}`"
                    class="flex link_nav items-center gap-3 hover:text-white stroke-gray hover:fill-white hover:stroke-white"
                >
                    <div
                        class="bg-dark rounded-full h-8 w-8 flex items-center justify-center"
                    >
                        <img
                            :src="`/storage/${category.icon}`"
                            class="h-4.5 w-4.5"
                        />
                    </div>
                    {{ category.name }}
                </Link>
                <Link href="/updates" class="flex link_nav items-center gap-3">
                    <div
                        class="bg-dark rounded-full h-8 w-8 flex items-center justify-center"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.625 5.78126L14.8 4.82149C14.1005 4.08679 13.2588 3.5021 12.3262 3.103C11.3935 2.7039 10.3894 2.49874 9.375 2.50001C5.23438 2.50001 1.875 5.85938 1.875 10C1.875 14.1406 5.23438 17.5 9.375 17.5C10.9262 17.4999 12.4392 17.0191 13.7058 16.1237C14.9725 15.2283 15.9305 13.9623 16.448 12.5"
                                stroke-width="1.25"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke="#8A8F99"
                            />
                            <path
                                d="M18.125 3.80555V8.12508C18.125 8.29084 18.0591 8.44981 17.9419 8.56702C17.8247 8.68423 17.6657 8.75008 17.5 8.75008H13.1804C12.6234 8.75008 12.3445 8.07704 12.7383 7.68329L17.0582 3.36336C17.4519 2.96883 18.125 3.24852 18.125 3.80555Z"
                                fill="#8A8F99"
                                stroke="#8A8F99"
                                stroke-width="0.0390625"
                            />
                        </svg>
                    </div>
                    Updates
                </Link>
            </div>
        </div>
        <div class="flex aside-nav flex-col gap-4">
            <Link
                href="/information"
                class="link_nav flex items-center gap-2.5"
            >
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

            <Link href="/privacy" class="link_nav flex items-center gap-2.5">
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
            <Link href="/faq" class="link_nav flex items-center gap-2.5">
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
            <Link href="/contacts" class="link_nav flex items-center gap-2.5">
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
