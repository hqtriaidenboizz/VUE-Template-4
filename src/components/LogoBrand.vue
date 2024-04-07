<script setup>
import brandLogo from "@/assets/global/brandLogo.png";

</script>
<template>
    <RouterLink to="/" class="logo">
        <img :src="brandLogo" alt="Brand logo" />
    </RouterLink>
</template>
<style scoped lang="scss">
.logo {
    cursor: pointer;
    & img {
        height: 40px;
    }
}
</style>