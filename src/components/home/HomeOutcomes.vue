<script setup>
import BaseButton from "@/components/common/BaseButton.vue";
import BaseHeading from '@/components/common/BaseHeading.vue';
import bannerOutcome from '@/assets/imgs/other/banner-outcome.jpg'
import { SquareCheck } from 'lucide-vue-next';
</script>

<template>
    <section class="learner-outcomes">
        <div class="container">
            <div class="learner-outcomes-left">
                <BaseHeading headingText="Learner outcomes on Skillfy" />
                <p class="section-discription">87% of people learning for professional developement report
                    career benefits like geting a
                    promotion, a raise or staring a new career</p>
                <div class="outcome">
                    <SquareCheck size="20" class="icon" />
                    <p>
                        Top intructors from around world
                    </p>
                </div>
                <div class="outcome">
                    <SquareCheck size="20" class="icon" />
                    <p>
                        Top courses for your team
                    </p>
                </div>
                <BaseButton class="button-start" buttonText="Start learning now" buttonVariants="primary" />
            </div>
            <div class="learner-outcomes-right">
                <div class="right-image">
                    <img :src="bannerOutcome" alt="Teamwork" class="image">
                </div>

            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.learner-outcomes {
    background-color: var(--blue-100);
    padding: 60px 0;

    & .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
    }

    &-left {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        & h2 {
            max-width: 300px;
        }

        & .button-start {
            align-self: flex-start;
        }

        & .outcome {
            display: flex;
            align-items: center;
            gap: 20px;

            & p {
                font-size: var(--text-xl);
                font-weight: var(--font-medium);
            }

            & .icon {
                color: var(--green-100);
            }

        }
    }

    &-right {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        margin: 60px 0;

        & .background {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: -1;

            & .dot-left {
                position: absolute;
                bottom: -60px;
                left: -30px;
            }

            & .dot-right {
                position: absolute;
                right: -40px;
                top: -20px;
            }
        }

        & .right-image {
            width: 100%;
            height: 100%;

            & .image {
                border-radius: 12px;
                max-width: 100%;
                width: 100%;
                height: 480px;
                object-fit: cover;
            }
        }
    }
}

@media (max-width: 1280px) {
    .learner-outcomes {
        & .container {
            flex-direction: column;
        }

        &-left {
            & h2 {
                max-width: 100%;
            }
        }
    }

}

@media (max-width: 768px) {
    .learner-outcomes {
        &-left {
            & .outcome {
                & p {
                    font-size: var(--text-sm);
                }
            }
        }

        & .dot-right {
            display: none;
        }
    }
}
</style>
