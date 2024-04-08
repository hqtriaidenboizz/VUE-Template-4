<script setup>
const props = defineProps({
    headingText: {
        type: String,
        required: true
    }
})

</script>
<template>
    <h2 class="heading">{{ props.headingText }}</h2>
</template>
<style scoped lang="scss">
.heading {
    font-size: var(--text-3xl);
    font-weight: var(--font-medium);
    color: var(--purple-500);
    line-height: var(--lh-3xl);
}

@media (max-width: 768px) {
    .heading {
        font-size: var(--text-2xl);
        line-height: var(--lh-2xl);

    }
}

@media (max-width: 480px) {
    .heading {
        font-size: var(--text-lg);
        line-height: var(--lh-lg);
    }
}
</style>