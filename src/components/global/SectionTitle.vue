<template>
    <v-card flat
            color="transparent"
            :class="color + '--text'">
        <crv class="section-title">
            {{title}}
        </crv>
    </v-card>
</template>

<script>
    import crv from "./crv";
    export default {
        name: "SectionTitle",
        components: {crv},
        props: {
            title: {
                type: String,
                default: "title"
            },
            color: {
                type: String,
                default: "primary"
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/scss/global";

    .section-title{
        font-size: 27px !important;
        padding:  1% 10px 5% !important;
        @include respond-to(sm){ font-size: 30px !important; }
        @include respond-to(md){ font-size: 34px !important; }
        @include respond-to(lg){ font-size: 36px !important; padding:  3% 30px 1% !important; }
        @include respond-to(xl){ font-size: 36px !important; padding:  3% 30px 1% !important; }
    }
</style>