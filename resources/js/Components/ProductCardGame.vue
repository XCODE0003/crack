<script setup>
import { Link } from "@inertiajs/vue3";
const props = defineProps({
    product: Object,
    category: Object,
});
</script>

<template>
    <Link
        :href="'/product/' + product.id"
        class="flex flex-col gap-5 rounded-2xl hover:bg-dark/50 cursor-pointer transition-all duration-300 bg-dark"
    >
        <div class="flex justify-center items-center">
            <img
                class="w-full rounded-t-2xl h-[120px]"
                :src="'/storage/' + product.image"
            />
        </div>
        <div class="flex px-6 py-5 items-center flex-col gap-1">
            <p class="leading-none font-medium">{{ product.title }}</p>
            <div class="flex items-center specification gap-2">
                <span
                    v-for="slug in product.slug"
                    :style="{ color: slug.color }"
                >
                    {{ slug.title }}
                </span>
            </div>
            <p class="leading-none text-sm text-gray">
                {{ category.full_name }}
            </p>
        </div>
    </Link>
</template>
