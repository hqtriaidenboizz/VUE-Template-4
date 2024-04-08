<script setup>
import { computed } from 'vue';

const props = defineProps({
    buttonVariants: {
        type: String,
        default: 'default',
    },
    buttonText: {
        type: String,
    }
})

const computedClasses = computed(() => {
    return `button ${props.buttonVariants}`
})
</script>

<template>
    <button :class="computedClasses">
        <slot name="iconLeft"></slot>
        <span>
            <slot>{{ buttonText }}</slot>
        </span>
        <slot name="icon"></slot>
    </button>
</template>

<style scoped lang="scss">
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background: none;
    border-radius: 4px;
    font-size: var(--text-base);
    font-weight: var(--font-normal);
    font-family: var(--font-popins);
    white-space: nowrap;

    &:hover {
        transition: 0.5s;
    }
}

.primary {
    padding: 14px 24px;
    background-color: var(--brand-300);
    color: var(--white);
    background-color: var(--brand-300);

    &:hover {
        background-color: var(--brand-200);
        color: var(--brand-300);
    }
}

.secondly {
    padding: 14px 24px;
    color: var(--purple-400);
    background-color: var(--white);

    &:hover {
        background-color: var(--brand-300);
        color: var(--white);
    }
}
</style>