<script setup>
import MainLayout from "../Layouts/MainLayout.vue";
import { Link } from "@inertiajs/vue3";
import ProductCard from "../Components/ProductCard.vue";
import ProductCardGame from "../Components/ProductCardGame.vue";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";

const faqItems = ref([
    {
        question: "How do I install the program?",
        answer: "To install the program, follow these simple steps:<br> 1. Download the file from the program's page.<br> 2. Open the downloaded file on your device.<br> 3. Launch the console (terminal) and enter the code provided in the program instructions.",
        isOpen: false,
    },
    {
        question: "Is it safe to download and use these programs?",
        answer: "We carefully verify all downloadable files to minimize risks for users. However, we strongly recommend:<br> - Using a test environment or virtual machine to check the program before use.<br> - Reviewing our <a href='/privacy' class='text-blue'>rules</a> beforehand. This section provides important information about the legality and safety of using these programs.",
        isOpen: false,
    },
    {
        question: "Why won't the program start or why does it show an error?",
        answer: "If you experience issues while starting the program:<br> - Make sure you've followed all the steps in the installation guide.<br> - Verify that the program is compatible with your operating system.<br> - Ensure all necessary components (e.g., libraries or additional scripts) are installed on your device.",
        isOpen: false,
    },
    {
        question: "Why should I disable my antivirus?",
        answer: "Antivirus software might interfere with the installation process, as some protective algorithms block files downloaded from the internet—even if they are safe. To avoid conflicts:<br> 1. Temporarily disable your antivirus before installation.<br> 2. Reactivate it once the installation is complete.",
        isOpen: false,
    },
    {
        question: "Where can I find updates and additional files?",
        answer: 'Updates and additional files are available in the designated section of our website. We regularly update content to ensure users have access to the latest program versions.<br><br> We suggest subscribing to our newsletter or checking the <a href="/updates" class="text-blue">Updates</a> section to stay informed about the latest releases.',
        isOpen: false,
    },
]);

const toggleItem = (index) => {
    faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};
</script>

<template>
    <Head>
        <meta
            name="description"
            content="Learn how to install software safely with our step-by-step guide. Find answers to common questions about installation, compatibility, updates, and antivirus settings."
        />
        <meta
            name="keywords"
            content="how to install software, software installation guide, safe software download, fix installation errors, software updates, disable antivirus for installation"
        />
    </Head>
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
                            <span v-html="item.answer"></span>
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
