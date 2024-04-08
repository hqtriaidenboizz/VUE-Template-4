<script setup>
import BaseButton from "@/components/common/BaseButton.vue";
import bannerIntroduction from '@/assets/imgs/other/banner-introduction.jpg'
import { computed, ref } from "vue";
const SOCICAL_MEDIA = [
    { name: 'Tw' },
    { name: 'Fb' },
    { name: 'Be' },
    { name: 'In' },
    { name: 'Db' }
]
const isSocialActive = ref('Tw')
const handleSocialActive = (string) => {
    isSocialActive.value = string
}
</script>

<template>
    <section class="introduction">
        <div class="container">
            <div class="introduction-left">
                <h1><span>Skillfy</span> is the one stop for all students</h1>
                <p>Get here study material for all classes, entrance exams, and competitive exam and latest
                    education news.</p>
                <BaseButton class="button-erroll" button-text="Enroll Now" button-variants="primary"></BaseButton>
                <div class="social-media-share">
                    <BaseButton button-text="Share now">
                    </BaseButton>
                    <div class="social-media" v-for="(socialMediaItem, index) in SOCICAL_MEDIA" :key="index">
                        <div @click="handleSocialActive(socialMediaItem.name)" class="social-media-item"
                            :class="isSocialActive === socialMediaItem.name ? 'active' : ''">
                            {{ socialMediaItem.name }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="introduction-right">
                <div class="image">
                    <img :src="bannerIntroduction" alt="Online learning">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.introduction {
    padding: 60px 0 20px 0;

    & .container {
        display: flex;
        justify-content: space-between;
        gap: 60px;
    }

    &-left {
        display: flex;
        flex-direction: column;
        gap: 40px;
        height: 100%;
        width: 100%;
        margin-top: auto;
        position: relative;

        & h1 {
            max-width: 540px;
            font-weight: var(--font-bold);
            font-size: var(--text-5xl);
            color: var(--purple-400);
            line-height: 64px;

            & span {
                color: var(--brand-300);
            }
        }

        & p {
            max-width: 580px;
            color: var(--purple-400);
            line-height: 40px;
            font-size: var(--text-2xl);
            font-weight: var(--font-normal);
        }

        & .button-erroll {
            align-self: flex-start;
        }

        & .social-media-share {
            display: flex;
            gap: 14px;
            align-items: center;

            & .button {
                color: var(--purple-400);
                align-items: center;

                &::after {
                    content: "";
                    width: 16px;
                    height: 1.2px;
                    margin-left: 4px;
                    background-color: var(--purple-400);
                }
            }

            & .social-media {
                display: flex;
                gap: 24px;

                & .active {
                    color: var(--brand-300);
                    background-color: var(--brand-200);

                }

                &-item {
                    width: 36px;
                    height: 36px;
                    border-radius: 100%;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    color: var(--purple-400);
                    font-weight: var(--font-normal);
                }
            }
        }
    }

    &-right {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        & .image {
            width: 100%;
            height: 100%;

            & img {
                max-width: 100%;
                width: 100%;
                height: 580px;
                object-fit: cover;
                border-radius: 8px;

            }
        }
    }
}

@media (max-width: 1280px) {
    .introduction {
        & .container {
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }

        &-left {
            text-align: center;
            width: 100%;
            align-items: center;

            & .button-erroll {
                align-self: center;
            }
        }
    }
}

@media (max-width:768px) {
    .introduction {
        &-left {
            gap: 24px;

            & h1 {
                max-width: 380px;
                font-size: var(--text-4xl);
                line-height: 44px;
            }

            & p {
                max-width: 480px;
                font-size: var(--text-xl);
                line-height: 32px;
            }
        }

        & .dot-circle-right {
            display: none;
        }
    }

}


@media (max-width:640px) {
    .introduction {
        &-left {
            & h1 {
                max-width: 340px;
                font-size: var(--text-3xl);
                line-height: 34px;
            }

            & p {
                max-width: 380px;
                font-size: var(--text-base);
                line-height: 24px;
            }

            & .social-media-share {
                & .social-media {
                    gap: 4px;
                }
            }

        }

        &-right {
            & .image {
                & img {
                    height: 400px;
                }
            }
        }
    }
}
</style>