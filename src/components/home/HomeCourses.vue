<script setup>
import BaseHeading from '@/components/common/BaseHeading.vue';
import BaseButton from "@/components/common/BaseButton.vue";
import { ChevronDown } from 'lucide-vue-next';
import BaseCourseCard from '@/components/common/BaseCourseCard.vue';
import { COURSES } from '@/constant/courses.js'

</script>
<template>
    <section class="courses">
        <div class="container">
            <div class="courses-header">
                <BaseHeading headingText="Get choice of your courses" />
                <div class="courses-header-actions">
                    <BaseButton button-text="Design">
                        <template #icon>
                            <ChevronDown size="20" />
                        </template>
                    </BaseButton>
                    <BaseButton button-text="View all" button-variants="primary" />
                </div>
            </div>
            <div class="courses-card">
                <template v-for="(course, index) in COURSES" :key="index">
                    <BaseCourseCard v-bind="course" />
                </template>
            </div>
        </div>

    </section>
</template>
<style scoped lang="scss">
.courses {
    padding: 60px 0;

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;

        &-actions {
            display: flex;
            gap: 20px;
            align-items: center;

            & .category {
                display: flex;
                gap: 4px;
            }
        }
    }

    &-card {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 20px;

    }
}

@media (max-width: 1280px) {
    .courses {
        &-header {
            flex-direction: column;
            gap: 40px;
        }

        &-card {
            grid-template-columns: auto auto;
        }
    }
}

@media (max-width: 768px) {
    .courses {
        &-header {
            flex-direction: column;
            gap: 40px;
        }

        &-card {
            grid-template-columns: auto;
        }
    }
}
</style>