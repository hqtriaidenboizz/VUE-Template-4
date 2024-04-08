<script setup>
import BaseButton from './BaseButton.vue';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

</script>
<template>
    <div class="slideshow-control">
        <BaseButton button-variants="secondly" class="slideshow-arrow prev disabled">
            <template #icon>
                <ArrowLeft size="20" />
            </template>
        </BaseButton>
        <div class="progres">

        </div>
        <BaseButton button-variants="secondly" class="slideshow-arrow next">
            <template #icon>
                <ArrowRight size="20" />
            </template>
        </BaseButton>
    </div>
</template>
<style lang="scss">

</style>