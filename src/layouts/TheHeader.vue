<script setup>
import BaseButton from "@/components/BaseButton.vue";
import LogoBrand from "@/components/LogoBrand.vue";
import { Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-vue-next";
import { ref, computed } from "vue";

const navList = computed(() => [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Pages",
        path: "/pages",
    },
    {
        label: "Courses",
        path: "/courses",
    },
    {
        label: "Features",
        path: "/features",
    },
    {
        label: "Blog",
        path: "/blog",
    },
    {
        label: "Shop",
        path: "/shop",
    },
]);

const isNavBarMobileVisible = ref(false);
const toggleNavBar = () => {
    isNavBarMobileVisible.value = !isNavBarMobileVisible.value;
};

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header-container">
                <LogoBrand />
                <nav class="navbar"
                :class="isNavBarMobileVisible ?'open' : '' ">
                    <div class="navbar-container">
                        <div class="menu-mobile-top">
                            <LogoBrand />
                            <BaseButton @click="toggleNavBar">
                                <template #icon>
                                    <X size="20" />
                                </template>
                            </BaseButton>
                        </div>
                        <ul>
                            <template v-for="(navItem, index) in navList" :key="index">
                                <li>
                                    <RouterLink :to="navItem.path" class="navbar-item">
                                        <span>{{ navItem.label }}</span>
                                        <ChevronDown size="20" />
                                    </RouterLink>
                                </li>
                            </template>

                        </ul>
                        <div class="menu-mobile-bottom">
                            <ShoppingCart class="icon" size="20" />
                            <BaseButton button-text="Register" button-variants="primary" class="button" />
                        </div>

                    </div>
                </nav>
                <div class="header-right">
                    <Search class="icon" size="20" />
                    <ShoppingCart class="icon" size="20" />
                    <BaseButton button-text="Register" button-variants="primary" />
                </div>
                <div class="header-right-mobile">
                    <Search size="20" class="icon" />
                    <BaseButton @click="toggleNavBar">
                        <template #icon>
                            <Menu size="20" class="icon" />
                        </template>
                    </BaseButton>
                </div>

            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 100px;

    & .container {
        & .header-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        & .header-right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 40px;

            & .icon {
                color: var(--purple-500);
                cursor: pointer;
            }
        }

        & .navbar {
            & ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 40px;

                & .navbar-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 4px;
                    cursor: pointer;
                    color: var(--purple-500);
                    font-weight: var(--font-normal);
                }
            }

            & .menu-mobile-top {
                display: none;
            }

            & .menu-mobile-bottom {
                display: none;
            }
        }

        & .header-right-mobile {
            display: none;

            & .icon {
                color: var(--purple-500);
            }
        }
    }
}

@media (max-width: 1280px) {
    .header {
        height: 80px;

        & .container {
            & .open{
                width: 100% !important;
            }
            & .navbar {
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                background-color: rgba(252, 166, 166, 0.454);
                width: 0;
                height: 100%;
                overflow-y: hidden;
                transition: 0.2s;

                & .navbar-container {
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                    width: 60%;
                    height: 100%;
                    display: flex;
                    background-color: var(--white);
                    flex-direction: column;
                    justify-content: start;
                    align-items: start;
                    padding: 24px;
                    gap: 40px;

                    & ul {
                        width: 100%;
                        flex-direction: column;
                    }

                    & li {
                        width: 100%;
                    }

                    & .navbar-item {
                        width: 100%;
                        justify-content: space-between;
                    }
                }

                & .menu-mobile-top {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                & .menu-mobile-bottom {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    width: 100%;
                }
            }

            & .header-right {
                display: none;
            }

            & .header-right-mobile {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
            }
        }

    }
}
</style>
