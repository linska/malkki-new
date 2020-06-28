<template>
    <v-container fluid>
        <v-app-bar flat fixed
                   height="84"
                   :color="bg_color"
                   class="app-bar mx-4 mx-md-0 hidden-sm-and-down">
            <slot/>
        </v-app-bar>
        <v-app-bar flat fixed
                   height="84"
                   color="primary"
                   class="app-bar mx-0 hidden-md-and-up">
            <slot/>
        </v-app-bar>
    </v-container>
</template>

<script>
    export default {
        name: "AppBar",
        props: {
            bg_color: {
                type: String,
                default: "transparent"
            }
        }
    }
</script>

<style scoped lang="scss">
    .app-bar{
        padding: 0 !important;
    }
</style>