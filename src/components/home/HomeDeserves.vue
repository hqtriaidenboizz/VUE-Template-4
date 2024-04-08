<script setup>
import BaseHeading from '@/components/common/BaseHeading.vue';
import BaseButton from '@/components/common/BaseButton.vue';

</script>

<template>
    <section class="deserve-with-skillfy">
        <div class="container">
            <BaseHeading headingText="Every one deserves the change to learn with Skillfy"/>
            <p>
                Join now to receive personalied recommendation from the full Skillfy catalog
            </p>
            <BaseButton buttonText="Start learning now" buttonVariants="primary"/>
        </div>
    </section>
</template>
<style scoped lang="scss">
.deserve-with-skillfy {
    padding: 60px 0;

    & .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        text-align: center;

        & p {
            font-weight: var(--font-normal);
            line-height: 24px;
        }
    }
}
</style>