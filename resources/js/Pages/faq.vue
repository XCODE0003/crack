<script setup>
import MainLayout from "../Layouts/MainLayout.vue";
import { Link } from "@inertiajs/vue3";
import ProductCard from "../Components/ProductCard.vue";
import ProductCardGame from "../Components/ProductCardGame.vue";
import { ref } from "vue";

const faqItems = ref([
    {
        question: "How to install and activate?",
        answer: "To install and activate the software, you need to follow these steps: 1. Download the software from your account 2. Run the installer 3. Follow the installation wizard 4. Enter your activation key when prompted",
        isOpen: false,
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, PayPal, and cryptocurrency payments including Bitcoin, Ethereum, and others.",
        isOpen: false,
    },
    {
        question: "How long does delivery take?",
        answer: "Digital products are delivered instantly after payment confirmation. Physical products typically ship within 1-3 business days.",
        isOpen: false,
    },
]);

const toggleItem = (index) => {
    faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};
</script>

<template>
    <MainLayout>
        <main class="flex flex-col gap-6">
            <div class="flex flex-col gap-5">
                <div class="flex justify-between items-center">
                    <h1 class="text-4xl font-semibold">FAQ</h1>
                </div>
            </div>
            <div class="max-w-[640px] flex flex-col gap-2">
                <div
                    v-for="(item, index) in faqItems"
                    :key="index"
                    class="p-6 rounded-xl font-medium bg-dark"
                    @click="toggleItem(index)"
                >
                    <div
                        class="flex justify-between items-center cursor-pointer"
                    >
                        <div
                            class="faq-question flex w-full items-center gap-2"
                        >
                            <span>{{ item.question }}</span>
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                :class="{ 'rotate-180': item.isOpen }"
                                class="transition-transform duration-300"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.5 1.25L6 5.75L10.5 1.25"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <transition
                        enter-active-class="transition duration-300 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-200 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <div
                            v-if="item.isOpen"
                            class="faq-answer mt-4 text-gray-300"
                        >
                            <span>{{ item.answer }}</span>
                        </div>
                    </transition>
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
