<script setup>
import BaseHeading from "@/components/common/BaseHeading.vue";
import BaseButton from "@/components/common/BaseButton.vue";



</script>
<template>
    <section class="learn-leading">
        <div class="container">
            <div class="learn-leading-left">
                <BaseHeading headingText="Learn from leading universities and companies"/>
                <p class="section-discription">
                    Start streaming on-demand video lectures today from top intructors in subjects like
                    business, computer science, data science, language leaning, & more
                </p>
                <BaseButton class="button-start" buttonText="Star learning now" buttonVariants="primary"/>
            </div>
            <div class="learn-leading-right">
                <div class="video">
                    <div class="button-play">
                    </div>
                    <img src="@/assets/imgs/other/banner-leading.jpg" alt="Brand leading">
                </div>
                <img src="@/assets/imgs/global/dot.svg" alt="Dot" class="dot">
            </div>
        </div>
        <div class="background">
        </div>
    </section>
</template>
<style scoped lang="scss">
.learn-leading {
    padding: 60px 0;
    margin: 60px 0;
    position: relative;

    & .background {
        position: absolute;
        top: 0;
        left: 60%;
        right: 0;
        bottom: 0;
        background-color: var(--brand-100);
        z-index: -1;
    }

    & .container {
        display: flex;
        gap: 40px;
    }

    &-left {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        & h2 {
            max-width: 480px;
        }

        & .button-start {
            align-self: flex-start;
        }
    }

    &-right {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;

        & .dot {
            position: absolute;
            top: -30px;
            left: 80px;
            z-index: -1;
        }

        & .video {
            position: relative;
            width: 100%;
            height: 430px;
            background-color: var(--white);
            border-radius: 4px;
            overflow: hidden;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            padding: 20px;

            & img {
                max-width: 100%;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px;
            }

            & .button-play {
                width: 100px;
                height: 100px;
                background-color: var(--white);
                border-radius: 100%;
                z-index: 1;
                cursor: pointer;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 55%;
                    transform: translate(-55%, -50%);
                    border-top: 20px solid transparent;
                    border-left: 28px solid var(--brand-300);
                    border-bottom: 20px solid transparent;
                }
            }
        }
    }
}

@media (max-width: 1280px) {
    .learn-leading {
        & .background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--brand-100);
            z-index: -1;
        }

        & .container {
            flex-direction: column;
        }

        &-left {
            & h2 {
                max-width: 100%;
            }
        }

        &-right {
            & .video {
                width: auto;
            }

            & .dot {
                top: -30px;
                left:auto;
                right: 80px;

            }
        }
    }
}
</style>