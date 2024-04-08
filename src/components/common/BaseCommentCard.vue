<script setup>
import { Twitter } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps({
    name: {
        type: String,
    },
    position: {
        type: String,
    },
    discription: {
        type: String,
    }
})
</script>

<template>
    <div class="comment-card">
        <div class="comment-card-top">
            <div class="information">
                <img src="@/assets/imgs/other/avatar-author.jpg" alt="Avater student">
                <div class="name-position">
                    <p class="name">{{ props.name }}</p>
                    <p class="position">{{ props.position }}</p>
                </div>
            </div>

            <div class="twitter">
                <Twitter size="20" />
            </div>
        </div>
        <p class="discription">
            {{ props.discription }}
            <span>@Skillfy</span>
        </p>
    </div>
</template>

<style scoped lang="scss">
.comment-card {
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
</style>