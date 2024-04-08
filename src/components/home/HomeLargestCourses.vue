<script setup>
import BaseHeading from '@/components/common/BaseHeading.vue';
import BaseCourseCard from '@/components/common/BaseCourseCard.vue';
import BaseButton from "@/components/common/BaseButton.vue";
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { COURSES } from '@/constant/courses.js';
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
const currentIndex = ref(0);

const nextSlide = () => {
    if (currentIndex.value < COURSES.length - 1) {
        currentIndex.value++;
    }
};

const prevSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
};

const lineProgress = computed(() => {
    const percent = ((currentIndex.value + 1) / COURSES.length) * 100;
    return `${percent}%`;
});

</script>
<template>
    <section class="largest-courses">
        <div class="container">
            <div class="largest-courses-header">
                <BaseHeading heading-text="The world's largest selection of courses" />
                <div class="courses-header-actions">
                    <BaseButton button-text="Design">
                        <template #icon>
                            <ChevronDown size="20" />
                        </template>
                    </BaseButton>
                    <BaseButton button-text="View all" button-variants="primary" />
                </div>
            </div>
            <div class="largest-courses-card">
                <template v-for="(course, index) in COURSES" :key="index" v-show="currentIndex === index">
                    <BaseCourseCard v-bind="course" />
                </template>
            </div>
            <div class="slideshow-control">
                <BaseButton @click="prevSlide"  button-variants="secondly" class="slideshow-arrow prev disabled">
                    <template #icon>
                        <ArrowLeft size="20" />
                    </template>
                </BaseButton>
                <div class="progres">
                    <div class="line-progress" :style="{ width: lineProgress }"></div>
                </div>
                <BaseButton  @click="nextSlide" button-variants="secondly" class="slideshow-arrow next">
                    <template #icon>
                        <ArrowRight size="20" />
                    </template>
                </BaseButton>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.largest-courses {
    background-color: var(--blue-100);
    padding: 60px 0;

    & .container {
        overflow: hidden;
    }

    & .slideshow-control {
        margin-top: 40px;
    }

    & .courses-header-actions {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        text-align: center;
    }

    &-card {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: calc((100% / 3) - 15px);
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 20px;
        border-radius: 8px;
        scroll-behavior: smooth;
        scrollbar-width: none;

        & .course-card {
            align-items: center;
            box-shadow: none !important;
        }
    }

}

@media (max-width: 1280px) {
    .largest-courses {
        &-header {
            flex-direction: column;
            gap: 40px;
        }

        &-card {
            grid-auto-columns: calc((100% / 2) - 15px);
        }
    }
}

@media (max-width: 768px) {
    .largest-courses {
        &-card {
            grid-auto-columns: 100%;
        }
    }
}
</style>