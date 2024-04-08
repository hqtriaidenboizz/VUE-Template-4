<script setup>
import BaseHeading from "@/components/common/BaseHeading.vue";
import BaseButton from "@/components/common/BaseButton.vue";
import BaseCommentCard from "@/components/common/BaseCommentCard.vue";
import { COMMENTS } from '@/constant/comments';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

</script>
<template>
    <section class="comments">
        <div class="container">
            <div class="comments-header">
                <BaseHeading headingText="What out students have to say" />
                <div class="slideshow-control">
                    <BaseButton @click="prevSlide" button-variants="secondly" class="slideshow-arrow prev disabled">
                        <template #icon>
                            <ArrowLeft size="20" />
                        </template>
                    </BaseButton>
                    <BaseButton @click="nextSlide" button-variants="secondly" class="slideshow-arrow next">
                        <template #icon>
                            <ArrowRight size="20" />
                        </template>
                    </BaseButton>
                </div>
            </div>
            <div class="comment-cards">
                <template v-for="(comment, index) in COMMENTS" :key="index">
                    <BaseCommentCard v-bind="comment" />
                </template>
            </div>
            <div class="app-platform">
                <BaseHeading headingText="App is available for free" />
                <div class="buttons">
                    <BaseButton button-variants="secondly">
                        <template #iconLeft>
                            <img src="@/assets/imgs/icons/android.svg" alt="Android icon" class="android">
                        </template>
                        <span>Android app</span>
                    </BaseButton>
                    <BaseButton button-variants="primary">
                        <template #iconLeft>
                            <img src="@/assets/imgs/icons/apple.svg" alt="apple icon" class="ios">
                        </template>
                        <span>IOS app</span>
                    </BaseButton>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.comments {
    background-color: var(--purple-100);
    padding: 60px 0 120px 0;

    & .container {
        position: relative;
    }

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .slideshow-control {
        gap: 20px;
    }

    & .comment-cards {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: calc((100% / 3) - 15px);
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;
        gap: 20px;
        padding: 60px 0;

        & .comment-card {
            display: flex;
            flex-direction: column;
            gap: 20px;
            background-color: var(--white);
            padding: 20px;
            border-radius: 8px;

            & .discription {
                line-height: 24px;

                & span {
                    color: var(--blue-300);
                }
            }

            &-top {
                display: flex;
                justify-content: space-between;

                & .information {
                    display: flex;
                    gap: 20px;

                    & img {
                        width: 40px;
                        height: 40px;
                        object-fit: cover;
                        border-radius: 100%;
                    }

                    & .name-position {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;

                        & .name {
                            font-weight: var(--font-bold);
                            color: var(--purple-500);
                        }
                    }
                }

                & .twitter {
                    width: 40px;
                    height: 40px;
                    color: var(--white);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;
                    background-color: var(--blue-300);
                }

            }
        }
    }

    & .app-platform {
        position: absolute;
        left: 0;
        right: 0;
        background-color: var(--purple-400);
        display: flex;
        justify-content: space-between;
        padding: 60px;
        align-items: center;
        margin: 0 20px;

        border-radius: 4px;

        & h2 {
            color: var(--white);
        }

        & .buttons {
            display: flex;
            gap: 40px;

            & button {
                display: flex;
                gap: 15px;
                justify-content: center;
                flex-direction: row;
                align-items: center;
            }

            & .button-secondly:hover {
                background-color: var(--white);
                color: var(--purple-400);

            }

            & .button-primary:hover {
                background-color: var(--brand-300);
                color: var(--white);

            }

            & img {
                width: 24px;
                color: white;
            }
        }
    }
}

@media (max-width: 1280px) {
    .comments {
        padding-bottom: 200px;

        &-header {
            flex-direction: column;
            gap: 20px;
        }

        & .slideshow-control {
            gap: 20px;
        }

        & .comment-cards {
            grid-auto-columns: calc((100% / 2) - 15px);

        }

        & .app-platform {
            gap: 40px;
            flex-direction: column;
        }
    }

}

@media (max-width: 768px) {
    .comments {
        padding-bottom: 260px;

        & .comment-cards {
            grid-auto-columns: 100%;

        }

        & .app-platform {
            & .buttons {
                flex-direction: column;
                gap: 20px;
            }
        }
    }
}
</style>