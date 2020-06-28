<template>
    <Cont>
        <slot/>
        <v-container fluid class="d-flex flex-column flex-md-row">

            <v-container fluid class="about-info-box d-flex flex-column rel">
                <v-card tile flat
                        color="primary"
                        class="prime-card">
                    <v-card-text class="secondary--text card-text">
                        <p class="mb-2">{{l1}}</p>
                        <p class="mb-0">{{l2}}</p>
                    </v-card-text>
                </v-card>
                <v-card tile
                        class="second-card">
                    <v-card-text class="info--text card-text">
                        <p class="mb-2">{{l1}}</p>
                        <p class="mb-0">{{l2}}</p>
                    </v-card-text>
                </v-card>
                <v-img v-if="media == false"
                       src="../img/M.png"
                       max-width="195" max-height="182"
                       class="about-img-m abs hidden-sm-and-down"/>
            </v-container>

            <AboutImgFirst v-if="media == false"/>
            <AboutImgSecond v-if="media == true"/>


        </v-container>
    </Cont>
</template>

<script>
    import Cont from "../global/Cont";
    import AboutImgFirst from "./AboutImgFirst";
    import AboutImgSecond from "./AboutImgSecond";

    export default {
        name: "About",

        components: {AboutImgSecond, Cont, AboutImgFirst },

        props: {
            media:{
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                l1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                l2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",


            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./src/scss/global";

    .about-cont{
        height: auto;
        max-height: 505px;
        background-color: blue !important;

    @include respond-to(sm){ height: 57vh !important; }
    @include respond-to(md){ height: 57vh !important; }
    @include respond-to(lg){ height: 57vh !important; }
    @include respond-to(xl){ height: 57vh !important; }
    }

    .about-info-box{
        max-width: 530px;
        margin-right: 20px;
    @include respond-to(sm){ max-width: 100%; margin: 0 !important;}
    }



    .card{
        height: auto;
    @include respond-to(md){ height: 29vh !important; max-height: 260px; }
    @include respond-to(lg){ height: 38vh !important; max-height: 260px; padding: 13px}
    @include respond-to(xl){ height: 38vh !important; max-height: 260px; padding: 13px}
    }

    .prime-card{
    @extend .card;
        max-width: 475px;
    @include respond-to(sm){ width: 90%; max-width: 100%; }
    @include respond-to(md){ width: 90% }
    @include respond-to(lg){ width: 90% }
    @include respond-to(xl){ width: 90% }
    }

    .second-card{
    @extend .card;
        margin: -15px 0 0 30px;
        max-width: 500px;
    @include respond-to(sm){ width: calc(100% - 60px); max-width: 100%; }
    @include respond-to(md){ width: calc(100% - 30px); }
    @include respond-to(lg){ width: calc(100% - 30px); }
    @include respond-to(xl){ width: calc(100% - 30px); }
    }

    .about-img-m{
        left: 85%;
        top: 15%;
    }
</style>