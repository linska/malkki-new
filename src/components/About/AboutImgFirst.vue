<template>
    <v-container fluid class="about-img-box d-flex
                              flex-column flex-sm-row flex-md-column
                              align-center align-md-end justify-space-between">
        <v-img src="../img/About1.png"
               max-height="190" max-width="225"/>
        <v-img src="../img/About2.png"
               max-height="126" max-width="225"/>
        <v-img src="../img/About3.png"
               max-height="169"
               class="about-img-3 hidden-sm-only"/>

    </v-container>
</template>

<script>
    export default {
        name: "AboutImgFirst"
    }
</script>

<style scoped lang="scss">
    @import "./src/scss/global";

    .about-img-box{
        max-width: 100%;
        width: auto;
        min-height: 515px;
        margin-top: 10px;
        @include respond-to(sm){ max-width: 100%; min-height: auto }
        @include respond-to(md){ max-width: 400px; min-height: auto; margin-top: 0 }
        @include respond-to(lg){ max-width: 400px; min-height: auto; margin-top: 0 }
        @include respond-to(xl){ max-width: 400px; min-height: auto; margin-top: 0 }
    }

    .about-img-3{
        max-width: 320px !important;
        @include respond-to(md){ max-width: 225px !important; }
        @include respond-to(lg){ max-width: 400px !important; }
        @include respond-to(xl){ max-width: 400px !important; }
    }
</style>