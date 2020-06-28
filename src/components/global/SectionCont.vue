<template>
    <v-row no-gutters justify="center">
        <v-col cols="12" md="10" lg="9" xl="7" class="sect-pad">
            <slot/>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "SectionCont"
    }
</script>

<style scoped lang="scss">
    .sect-pad{
        padding: 0 5px !important;
    }
</style>