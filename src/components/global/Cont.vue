<template>
    <v-row no-gutters>
        <v-col cols="1"
               class="height hidden-sm-and-down">
            <slot name="side_menu"/>
        </v-col>
        <v-col cols="12" md="11" class="height">
            <v-container fluid class="cont d-flex fill-height">
                <slot/>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Cont"
    }
</script>

<style scoped lang="scss">
    @import "src/scss/global";
    .height{
        height: auto;
        min-height: auto;
        @include respond-to(sm) { height: calc(100vh - 84px); max-height: 816px }
        @include respond-to(md) { height: calc(100vh - 84px); max-height: 816px }
        @include respond-to(lg) { height: calc(100vh - 84px); max-height: 816px }
        @include respond-to(xl) { height: calc(100vh - 84px); max-height: 816px }
    }
    .cont{
        max-width: 950px;
        margin-right: 0;
    }
</style>