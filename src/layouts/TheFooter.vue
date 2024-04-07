<script setup>
import { FOODTER_LINK } from '@/constant/footerLinks';
import { Facebook, Twitter, Linkedin, Chrome } from 'lucide-vue-next'
import { computed } from 'vue';

const footerLinks = computed(() => FOODTER_LINK);

</script>
<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div v-for="(section, index) in footerLinks" :key="index">
                    <div>{{ Object.keys(section)[0] }}</div>
                    <ul class="links">
                        <li v-for="(link, linkIndex) in Object.values(section)[0]" :key="linkIndex">
                            <RouterLink :to="link.path">{{ link.label }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div>
                    @ 2015-2020 Skillfy Education Private limited. All right resered
                </div>
                <div class="social-media">
                    <Facebook class="icon" />
                    <Twitter class="icon" />
                    <Linkedin class="icon" />
                    <Chrome class="icon" />
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="scss">
.footer {
    background-color: var(--purple-500);
    padding: 60px 0 0 0;
    & .footer-top{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        color: white;
        & .links{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
            padding: 40px 0;
            & a {
                color: var(--gray);
            }
        }
    }
    & .footer-bottom {
        border-top: 1px solid #31313C;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        text-align: center;
        color: var(--gray);

        & .social-media {
            display: flex;
            gap: 30px;
            cursor: pointer;
        }

    }
}

@media (max-width: 1280px) {
    .footer {
        & .footer-bottom {
            gap: 20px;
            flex-direction: column;
        }
        & .footer-top{
            flex-direction: column;
            align-items: center;
            text-align: center;
            & .links{
                align-items: center;
            }

        }

    }

}
</style>