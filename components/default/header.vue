<template>
    <div class="header">
        <div class="sm:container">
            <div class="wrapper">
                <div class="header__logo">
                    <img class="h-32px" src="@/assets/img/logo.png" alt="">
                    <h1> <span class="font-extrabold">Owl</span> Academy</h1>
                </div>
                <nav class="header__nuv">
                    <ul>
                        <li class="active"><a href="#">Главна</a></li>
                        <li><a href="#">Курсы</a></li>
                        <li><a href="#">Блог</a></li>
                    </ul>
                </nav>
                <div class="header__account">
                    <a href="#">Войти</a>
                    <UiButtonsBtnRegular>
                        <span>Регистрация</span>
                    </UiButtonsBtnRegular>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang='scss'>
.header {
    @apply shadow-1 py-20px;

    & .wrapper {
        @apply flex items-center justify-between;
    }

    &__logo {
        @apply flex pr-25px border-r border-solid border-rarly-2 min-w-230px;
    }

    &__nuv {
        @apply w-full;

        & li {
            @apply py-20px;

            & a {
                @apply text-rarly-3 text-sm font-medium py-4px relative no-underline;

                &:before {
                    @apply content-[""] absolute right-0 left-0 bottom-0 h-2px w-0 bg-base-0;
                    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                }

            }

            &.active a,
            &:hover a,
            &:focus a {
                @apply text-base-0 before: (w-full bg-base-0 left-0 right-auto);
            }
        }

        & ul {
            @apply my-0 mx-auto px-20px flex max-w-300px w-full justify-between;
        }
    }

    &__account {
        @apply flex items-center pl-25px border-l border-solid border-rarly-2;

        & a {
            @apply text-rare-1 text-sm font-medium py-4px relative no-underline mr-20px;

            &:before {
                @apply content-[""] absolute right-0 left-0 bottom-0 h-2px w-0 bg-rare-0;
                transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            }

            &.active,
            &:hover,
            &:focus {
                @apply text-base-0 before: (w-full bg-rare-0 left-0 right-auto);
            }
        }
    }
}
</style>