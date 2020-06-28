<template>
    <v-row no-gutters class="rel height">
        <v-col cols="9" md="8"
               offset="3" offset-md="4"
               class="hidden-xs-only">
            <v-container fluid class="d-flex justify-end height">
                <v-img v-if="slide == 'first'"
                       src="../img/hero.png"
                       max-width="660"
                       width="100%" height="100%"
                       position="bottom right"
                       contain/>
                <v-img v-if="slide == 'second'"
                       src="../img/hero2.png"
                       max-width="450"
                       width="100%" height="100%"
                       position="bottom right"
                       contain/>
            </v-container>
        </v-col>
        <v-col cols="12" sm="7"
               class="abs">
            <v-container fluid class="info-card d-flex flex-column justify-start justify-lg-end">
                <slot name="info"/>
            </v-container>
            <slot name="btn"/>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "CarItem",
        props:{
            slide: {
                type: String,
                default: "first"
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/scss/global";

    .height{
        height: calc(100vh - 84px) !important;
        max-height: 816px !important;
    }

    .info-card{
        margin-top: 25px;
        height: 390px;
    }
</style>