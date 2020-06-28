<template>
    <v-container fluid>
        <v-navigation-drawer v-model="drawer"
                             overlay-opacity="0.1"
                             temporary fixed right
                             class="nav-draw">
            <v-list dense nav>
                <v-list-item>
                    <v-btn block depressed text x-large
                           href="#hero"
                           @click="drawer = false"
                           color="primary">
                        Главная
                    </v-btn>
                </v-list-item>
                <v-list-item v-for="item in btn" :key="item.title">
                    <v-btn block depressed text x-large
                           :href="item.target"
                           @click="drawer = false"
                           color="primary">
                        {{ item.title}}
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <AppBar>
            <SectionCont>
                <v-row no-gutters align="center">
                    <v-col cols="4" md="1">
                        <v-btn text depressed
                               href="#hero"
                               class="primary--text pa-0">
                            <v-img v-if="color === 'primary'"
                                   src="../img/logo.png"
                                   width="69" height="44"
                                   position="left center"
                                   contain
                                   class="hidden-sm-and-down"/>
                            <v-img v-if="color === 'secondary'"
                                   src="../img/logo-white.png"
                                   width="69" height="44"
                                   position="left center"
                                   contain
                                   class="hidden-sm-and-down"/>
                            <v-img src="../img/logo-white.png"
                                   width="69" height="44"
                                   position="left center"
                                   contain
                                   class="hidden-md-and-up"/>
                        </v-btn>
                    </v-col>
                    <v-col cols="8" md="11">
                        <v-container fluid>
                            <v-row no-gutters justify="end"
                                   class="hidden-sm-and-down nav-btn-group">
                                <v-btn v-for="item in btn" :key="item.title"
                                       depressed text large :href="item.target"
                                       :color="color"
                                       class="nav-btn font-weight-bold">
                                    {{ item.title}}
                                </v-btn>
                            </v-row>
                            <v-row no-gutters justify="end"
                                   class="hidden-md-and-up">
                                <v-btn depressed text large
                                       @click="drawer = true"
                                       color="secondary">
                                    <IconCont width="40" height="40">
                                        <Bar/>
                                    </IconCont>
                                </v-btn>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </SectionCont>
        </AppBar>


    </v-container>
</template>

<script>
    import SectionCont from '../global/SectionCont';
    import IconCont from '../global/IconCont';
    import Bar from '../icons/bar';
    import AppBar from "./AppBar";

    export default {
        name: "NavBar",

        components: {AppBar, SectionCont, IconCont, Bar },

        props: {
            color: {
                type: String,
                default: "primary"
            },
            bg_color: {
                type: String,
                default: "transparent"
            }
        },

        computed: {
            btn() {
                return [
                    {title: 'Обо мне',       target:"#about",},
                    {title: 'Консультации',  target:"#consult",},
                    {title: 'Мои проекты',   target:"#proj",},
                    {title: 'Книги',         target:"#book",},
                    {title: 'Халява, плиз!', target:"#halva",},
                    {title: 'Контакты',      target:"#cont",}
                ]
            }
        },

        data: () => ({
            drawer: false,
        })
    }
</script>

<style lang="scss" scoped>

    .app-bar{
        padding: 0 !important;
    }

    .nav-draw {
        box-shadow: none !important;
    }

    .nav-btn-group{
        margin-right: -13px !important;
    }

    .nav-btn{
        padding: 0 13px 0 13px !important;
        font-size: 18px !important;
    }

</style>