<template>
    <v-card flat
            color="transparent"
            class="hero-info primary--text">
        <v-card-title class="pa-0">
            <crv class="hero-title">
                <slot name="title"/>
            </crv>
        </v-card-title>
        <v-card-subtitle class="hero-subtitle black--text pa-0">
            <slot name="subtitle"/>
        </v-card-subtitle>
    </v-card>
</template>

<script>
    import crv from "../global/crv";
    export default {
        name: "HeroInfo",
        components: {crv}
    }
</script>

<style scoped lang="scss">
    @import "../../scss/global";

    .hero-info{
        padding: 10px 0;
        @include respond-to(lg) { padding: 30px 0 0 30px; }
        @include respond-to(xl) { padding: 30px 0 0 30px; }

    }
    .hero-title{
        font-size: 38px;
        line-height: 40px;

        @include respond-to(lg) { font-size: 48px; line-height: 48px; }
        @include respond-to(xl) { font-size: 48px; line-height: 48px; }
    }

    .hero-subtitle{
        max-width: 430px !important;

        font-size: 18px;
        line-height: 24px;
        margin-top: 10px !important;
    }
</style>