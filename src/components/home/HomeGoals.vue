<script setup>
import BaseHeading from '@/components/common/BaseHeading.vue';
import { Lightbulb, TrendingUp, Medal } from 'lucide-vue-next';
import { GOALS } from '@/constant/goals';

</script>

<template>
    <section class="goals">
        <div class="container">
            <BaseHeading headingText="Achieve your goals with Skillfy" />
            <div class="card-goals">
                <div v-for="(goal, index) in GOALS" :key="index" class="card-goal">
                    <div class="card-goal-icon" :class="goal.name">
                        <component :is="goal.icon" size="22" />
                    </div>
                    <div class="card-goal-title">
                        {{ goal.title }}
                    </div>
                    <div class="card-goal-discription">
                        {{ goal.discription }}
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
<style scoped lang="scss">
.goals {
    padding: 60px 0;

    & .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;

        & .card-goals {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 24px;

            & .card-goal {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: start;
                gap: 24px;
                transition: 0.5s;
                border-radius: 4px;
                max-width: 300px;
                max-height: 290px;
                width: 300px;
                height: 290px;
                padding: 30px;

                &:hover {
                    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                }

                &-icon {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;

                }

                &-title {
                    color: var(--purple-400);
                    line-height: 40px;

                    font-size: var(--text-2xl);
                    font-weight: var(--font-normal);
                }

                &-discription {
                    color: var(--purple-400);
                    line-height: 24px;
                    font-size: var(--text-sm);
                    font-weight: var(--font-normal);
                }

                & .idea {
                    color: var(--purple-300);
                    background-color: var(--purple-200);

                }

                & .improve {
                    color: var(--orange-200);
                    background-color: var(--orange-100);

                }

                & .medal {
                    color: var(--blue-200);
                    background-color: var(--blue-100);

                }
            }
        }
    }
}

@media (max-width: 1024px) {
    .card-goals {
        flex-direction: column;
        width: 100%;
    }
}
</style>