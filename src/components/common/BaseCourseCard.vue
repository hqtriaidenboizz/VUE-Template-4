<script setup>
import { Star, Eye, CirclePlay } from 'lucide-vue-next';
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    view: {
        type: String,
        required: true,
    },
    lesion: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div class="course-card">
        <div class="course-card-top">
            <div class="course-card-image">
                <img src="@/assets/imgs/other/card-1.jpg" alt="Course image">
            </div>
            <div class="course-card-statistics">
                <div class="rating statistic">
                    <Star class="icon" />
                    <span>{{ props.rating }}</span>
                </div>
                <div class="view statistic">
                    <Eye class="icon" />
                    <span>{{ props.view }}</span>
                </div>
                <div class="lesion statistic">
                    <CirclePlay class="icon" />
                    <span>{{ props.lesion }}lesion</span>
                </div>

            </div>
        </div>
        <div class="course-card-bottom">
            <div class="course-card-title">
                {{ props.title }}
            </div>
            <div class="course-card-information">
                <div class="author">
                    <img src="@/assets/imgs/other/avatar-author.jpg" alt="Avavta author" width="100">
                    <span>{{ props.author }}</span>
                </div>
                <div class="price">
                    <span class="old-price">${{ props.oldPrice }}</span>
                    <span class="current-price ">${{ props.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.course-card {
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--white);

    &-top {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        border-bottom: 1px solid rgb(185, 185, 185);
    }

    &-image {
        width: 100%;

        & img {
            width: 100%;
            border-radius: 4px;
        }
    }

    &-statistics {
        display: flex;
        justify-content: space-between;
        align-content: center;

        & span {
            color: var(--purple-500);
            font-size: var(--text-sm);
            font-weight: var(--font-normal);
        }

        & .rating {
            & .icon {
                color: rgb(255, 187, 0);
            }
        }

        & .view {
            & .icon {
                color: #DD4A07;
            }
        }

        & .lesion {
            & .icon {
                color: var(--green-200);
            }
        }

    }

    & .statistic {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        text-align: center;
        font-weight: var(--font-medium);
        font-size: var(--text-sm);
    }

    &-bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
        padding: 25px 15px;

    }

    &-title {
        color: var(--purple-500);
        font-size: var(--text-xl);
        font-weight: var(--font-medium);
        line-height: 24px;
    }

    &-information {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        & .price {
            display: flex;
            gap: 8px;
            align-items: center;

            & .old-price {
                font-size: var(--text-sm);
                color: #a3a3a3;
                text-decoration: line-through;
            }

            & .current-price {
                color: #F68D22;
                font-weight: var(--font-bold);
            }

        }

        & .author {
            display: flex;
            align-items: center;
            gap: 15px;

            & img {
                width: 40px;
                height: 40px;
                border-radius: 12px;
                object-fit: cover;
            }
        }
    }

}
</style>