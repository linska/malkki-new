<template>
    <v-container fluid class="crv">
        <slot/>
    </v-container>
</template>

<script>
    export default {
        name: "crv"
    }
</script>

<style scoped lang="scss">
    @font-face {
        font-family: Cyrvetica;
        src: url(../fonts/cyrvetica-extra-outline.otf);
    }
    .crv{
        font-family: Cyrvetica !important;
        padding: 0 !important;
        text-transform: uppercase;
    }
</style>