<template>
    <Cont>
        <slot/>
        <v-row no-gutters justify="center" justify-sm="space-around">
            <v-col v-for="item in books" :key="item.id"
                   cols="9" sm="5"
                   class="book-cont">
                <v-img :src="require('./img/' + item.bg)"
                       contain
                       position="bottom 20px center">
                    <v-img :src="require('./img/' + item.img)"
                           contain
                           :position="item.position" class="book-img"/>
                </v-img>
                <v-card flat color="transparent"
                        class="ma-auto ma-md-0">
                    <v-row no-gutters justify="start">
                        <v-card-title class="primary--text text-uppercase font-weight-bold px-0">
                            {{item.title}}
                        </v-card-title>
                        <v-card-title class="black--text font-italic font-weight-regular px-0">
                            {{item.subtitle}}
                        </v-card-title>
                    </v-row>
                    <v-card-text class="book-info third--text pa-0">
                        {{item.text}}
                    </v-card-text>
                    <v-card-text class="book-info third--text pa-0">
                        {{item.text1}}
                    </v-card-text>
                    <v-card-actions class="px-0 py-4">
                        <v-btn depressed text
                               color="transparent"
                               class="primary--text text-uppercase font-weight-medium px-5 ml-n5">
                            Подробнее
                        </v-btn>
                        <template>
                            <v-divider class="primary"/>
                        </template>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </Cont>
</template>

<script>
    import Cont from "./global/Cont";

    export default {
        name: "Books",
        components: { Cont },

        data() {
            return {
                books: [
                    {
                        id:     1,
                        img:    "Book1.png",
                        bg:     "BookRect1.png",
                        position: "bottom left 20px",
                        title:  "Иммигрантка",
                        subtitle: ".fi",
                        text:   "На дворе экономический кризис, дома – кризис семейный. Для того, чтобы поправить " +
                            "финансовое положение и спасти любовь, Она покупает себе и мужу билеты, садится на " +
                            "паром Таллинн – Хельсинки и… совершает побег в новую жизнь.",
                        text1:  ""
                    },
                    {
                        id:     2,
                        img:    "Book2.png",
                        bg:     "BookRect2.png",
                        position: "bottom right 20px",
                        title:  "Импортные мамы",
                        subtitle: "",
                        text:   "Три девицы под окном пряли поздно вечерком. А наши три девицы уехали в тридесятое " +
                            "царство, тридесятое государство и вышли замуж за добрых молодцев.",
                        text1:  "Помните, как в сказке?"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/global";

    .book-cont{
        max-width: 340px;
        @include respond-to(sm){max-width: 280px;}
    }

    .book-img{
        height: 315px;
        @include respond-to(sm){ height: 35vh !important; max-height: 315px !important; }
        @include respond-to(md){ height: 35vh !important; max-height: 315px !important; }
        @include respond-to(lg){ height: 35vh !important; max-height: 315px !important; }
        @include respond-to(xl){ height: 35vh !important; max-height: 315px !important; }
    }

    .book-info{
        font-size: 14px !important;
    }

    .v-card__title{
        font-size: 24px;
    }
</style>