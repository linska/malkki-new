<template>
    <Cont>
        <v-container slot="side_menu" fluid
                     class="d-flex fill-height justify-space-between justify-lg-start align-end">
            <slot name="side-bar"/>
            <v-btn fab light small
                   class="primary--text mr-lg-4 mr-xl-5 mb-6">
                <IconCont><instagram/></IconCont>
            </v-btn>
            <v-btn fab light small
                   class="primary--text mb-6">
                <IconCont><facebook/></IconCont>
            </v-btn>
        </v-container>
        <v-container fluid>
            <v-carousel hide-delimiters
                        :show-arrows="false"
                        height=auto
                        v-model="slide">
                <v-carousel-item v-for="(item, i) in hero_inf" :key="i" slide="i"
                                 transition="fade-transition"
                                 reverse-transition="fade-transition"
                                 class="car-height">
                    <CarItem :slide=i>
                        <HeroInfo slot="info"
                                  v-for="j in item" :key="j.index">
                            <template slot="title">
                                {{j.title}}
                            </template>
                            <template slot="subtitle">
                                {{j.subtitle}}
                            </template>
                        </HeroInfo>
                        <template slot="btn">
                            <v-container fluid class="d-flex justify-space-between car-controls">
                                <v-btn @click="slide = slide + 1"
                                       fab light large
                                       class="primary--text">
                                    <IconCont><left/></IconCont>
                                </v-btn>
                                <v-btn @click="slide = slide + 1"
                                       fab light large
                                       class="primary--text">
                                    <IconCont><right/></IconCont>
                                </v-btn>
                            </v-container>
                        </template>
                    </CarItem>
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </Cont>

</template>

<script>
    import Cont from "../global/Cont";
    import IconCont from "../global/IconCont";
    import Instagram from "../icons/instagram";
    import Facebook from "../icons/facebook-f";
    import Left from "../icons/left";
    import Right from "../icons/right";
    import CarItem from "./CarItem";
    import HeroInfo from "./HeroInfo";
    export default {
        name: "Hero",
        components: {HeroInfo, CarItem, Facebook, Instagram, IconCont, Cont, Left, Right,},
        data() {
            return {
                slide: 0,
                hero_inf: {
                    first: [
                        {
                            title: "Бизнесвумен",
                            subtitle: "Основала агентство контент-маркетинга Malkki Media, организатор мероприятий."
                        },
                        {
                            title: "Писатель",
                            subtitle: "Автор книг о жизни и воспитании детей в Финляндии."
                        },
                        {
                            title: "Блогер",
                            subtitle: "В Instagram блог о бизнесе и текстах."
                        }
                    ],
                    second: [
                        {
                            title: "Ксения Малкки",
                            subtitle: "Самый дерзкий контент маркетолог в Instagram."
                        }
                    ]
                }
            };
        }
    }
</script>

<style scoped lang="scss">
    @import "../../scss/global";

    .car-height{
        height: calc(100vh - 84px);
        max-height: 816px;
    }

    .info-card{
        height: 438px !important;
    }

    .car-controls{
        margin: 30px 0 0 30px !important;
        width: 110px !important;
        @include respond-to(lg) {margin-top: 50px !important;}
        @include respond-to(xl) {margin-top: 50px !important;}

    }
</style>