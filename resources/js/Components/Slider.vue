<script setup>
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Link } from "@inertiajs/vue3";
import "swiper/css/pagination";
const modules = [Pagination, Autoplay];

const props = defineProps({
    sliders: Array,
});
</script>
<template>
    <div>
        <swiper
            :pagination="true"
            :slides-per-view="1"
            :space-between="10"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :modules="modules"
            class="h-[400px] max-w-[1000px]"
        >
            <swiper-slide v-for="slider in sliders" :key="slider.id">
                <Link :href="slider.url ?? '#'">
                    <img
                        class="object-cover rounded-xl"
                        :src="`/storage/${slider.image}`"
                        :alt="slider.alt_image"
                /></Link>
            </swiper-slide>
        </swiper>
    </div>
</template>
<style>
:root {
    --swiper-theme-color: #fff;
}
</style>
