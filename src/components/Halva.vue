<template>
    <Cont>
        <slot/>
        <v-container fluid>
            <v-container v-for="item in halva" :key="item.img">
                <v-card color="primary" class="pa-1">
                    <v-row no-gutters>
                        <v-col cols="12" sm="5" md="3">
                            <v-container fluid class="halva-info-cont fill-height pa-5">
                                <v-img :src="require('./img/'+ item.img)"
                                       height="100%"
                                       contain/>
                            </v-container>
                        </v-col>
                        <v-col cols="12" sm="7" md="9">
                            <v-container class="halva-info-cont d-flex flex-column justify-space-between">
                                <v-card-subtitle class="halva-info white--text align-self-start mt-8 mt-sm-0">
                                    {{item.info}}
                                </v-card-subtitle>
                                <v-card-actions class="align-self-end">
                                    <v-btn x-large
                                           color="primary"
                                           class="btn btn-shad">
                                        Подробнее
                                    </v-btn>
                                    <v-btn fab color="primary" class="btn-shad mr-8">
                                        <IconCont>
                                            <download v-if="item.icon == 'd'"/>
                                            <play v-if="item.icon == 'play'"/>
                                        </IconCont>
                                    </v-btn>
                                </v-card-actions>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-container>
    </Cont>
</template>

<script>
    import Cont from "./global/Cont";
    import IconCont from "./global/IconCont";
    import Download from "./icons/download";
    import Play from "./icons/play";

    export default {
        name: "Halva",

        components: { Cont, IconCont, Download, Play},

        data() {
            return {
                halva: [
                    {img: "Halva1.png", icon: "d",    info:"Чек-лист по контент продвижению"},
                    {img: "Halva2.png", icon: "play", info:"Бесплатный вебинар по event-маркетингу"},
                    {img: "Halva3.png", icon: "d",    info:"Гайд по заработку на текстах"},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/global";

    .halva-info-cont{
        //height: 23vh !important; max-height: 200px !important;
        @include respond-to(sm){ height: 23vh !important; max-height: 200px !important; }
        @include respond-to(md){ height: 23vh !important; max-height: 200px !important; }
        @include respond-to(lg){ height: 23vh !important; max-height: 200px !important; }
        @include respond-to(xl){ height: 23vh !important; max-height: 200px !important; }
    }

    .halva-info{
        font-size: 24px !important;
        font-weight: bold !important;
    }

    .btn{
        font-size: 18px;
        border-radius: 15px !important;
        margin-right: 25px !important;
    }

    $shad: #C90131;

    .btn-shad{
        box-shadow: 0 -5px 5px 0 rgba(white, 0.1), 0 5px 5px 0 rgba($shad, 0.5)  !important;
    }

</style>