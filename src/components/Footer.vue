<template>
    <footer>
        <div class="container">
            <router-link to="/" class="header-logo">
                <img src="../assets/images/svg/footetLogo.svg" alt="">
            </router-link>
            <div class="footer-bottom">
                <nav>
                    <ul>
                        <li>
                            <router-link class="nav__text" to="/">Ўзбекистон</router-link>
                        </li>
                        <li>
                            <router-link class="nav__text" to="/">Технология </router-link>
                        </li>
                        <li>
                            <router-link class="nav__text" to="/">Жахон</router-link>
                        </li>
                        <li>
                            <router-link class="nav__text" to="/">Фарғона</router-link>
                        </li>
                        <li>
                            <router-link class="nav__text" to="/">Жамият</router-link>
                        </li>
                        <li>
                            <router-link class="nav__text" to="/">Сиёсат</router-link>
                        </li>
                        <li>
                            <router-link class="nav__text" to="/">Муҳокама </router-link>
                        </li>
                        <li>
                            <router-link class="nav__text" to="/">Спорт</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="footer-line"></div>
                <span>2021 © Фарғоналиклар Барча ҳуқуқлар ҳимоя қилинган</span>
            </div>
            <ul class="footer-set">
                <li class="footer-ser__active"><a href="#"><img src="../assets/images/svg/Telegram.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/images/svg/insta.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/images/svg/face.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/images/svg/youtube 1.svg" alt=""></a></li>
            </ul>
        </div>

    </footer>
</template>

<script>
export default {
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>