<script setup>
import { Link } from "@inertiajs/vue3";
import { defineProps } from "vue";
const props = defineProps({
    product: Object,
    category: Object,
});
console.log(props.category);
console.log(props.product);
</script>

<template>
    <Link
        :href="
            '/product/' +
            category?.name.toLowerCase() +
            '/' +
            product?.title.toLowerCase()
        "
        class="flex flex-col gap-5 rounded-2xl hover:bg-dark/50 cursor-pointer transition-all duration-300 bg-dark p-6"
    >
        <div class="flex justify-center items-center">
            <img
                class="w-16 rounded-lg h-16"
                :src="'/storage/' + product.image"
            />
        </div>
        <div class="flex items-center flex-col gap-1">
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
