<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
</script>
<template>
    <section class="apply">
        <div class="container">
            <div class="apply-card">
                <div>
                    <img src="@/assets/imgs/other/avatar-author.jpg" alt="Avatar teacher">
                </div>
                <div class="information">
                    <p class="title">Become a Teacher</p>
                    <p class="discription">
                        Teach what you love. Coursector gives you tools to create course
                    </p>
                    <BaseButton buttonText="Apply as teacher" buttonVariants="primary" />
                </div>
            </div>
            <div class="apply-card">
                <div class="image">
                    <img src="@/assets/imgs/other/avatar-author.jpg" alt="Avatar teacher">

                </div>
                <div class="information">
                    <p class="title">Become a Teacher</p>
                    <p class="discription">
                        Teach what you love. Coursector gives you tools to create course
                    </p>
                    <BaseButton buttonText="Apply as teacher" buttonVariants="primary" />
                </div>
            </div>

        </div>
    </section>
</template>
<style scoped lang="scss">
.apply {
    padding: 60px 0;

    & .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        padding-top: 60px;

    }

    & .apply-card {
        display: flex;
        gap: 20px;
        align-items: flex-start;
        padding: 40px 20px;
        justify-content: space-between;
        background-color: var(--purple-100);

        &:last-child {
            background-color: var(--brand-100);
        }

        & img {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            object-fit: cover;
        }

        & .information {
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: var(--purple-400);

            & button {
                align-self: self-start;
            }

            & .title {
                font-weight: var(--font-medium);
                font-size: var(--text-xl);
            }

            & .discription {
                line-height: 24px;
            }
        }
    }
}

@media (max-width: 1280px) {
    .apply {
        & .container {
            flex-direction: column;
        }
    }
}
</style>