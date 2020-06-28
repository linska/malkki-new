<template>
    <v-bottom-navigation absolute fixed
                         background-color="transparent"
                         color="secondary"
                         height="80">
        <SectionCont>
            <v-row no-gutters>
                <v-col cols="2" class="footer">
                    <v-container fluid class="d-flex fill-height">
                        <v-img src="./img/logo-white.png"
                               width="60" height="38"
                               contain
                               position="left center"/>
                    </v-container>
                </v-col>
                <v-col cols="7" sm="8" class="footer">
                    <v-container fluid class="d-flex fill-height justify-center">
                        <v-card flat color="transparent">
                            <v-card-text class="footer-text secondary--text pa-0 text-center">
                                © 2020 Все права защищены
                            </v-card-text>
                        </v-card>
                    </v-container>
                </v-col>
                <v-col cols="3" sm="2" class="footer">
                    <v-container fluid class="d-flex fill-height justify-end">
                        <v-card flat color="transparent">
                            <v-card-text class="footer-text secondary--text pa-0">
                                Developer
                                <span class="font-weight-bold">
                                    ProSofta
                                </span>
                            </v-card-text>
                        </v-card>
                    </v-container>
                </v-col>
            </v-row>
        </SectionCont>
    </v-bottom-navigation>
</template>

<script>
    import SectionCont from "./global/SectionCont";
    export default {
        name: "Footer",
        components: {SectionCont}
    }
</script>

<style scoped>
    .footer{
        height: 80px;
    }
</style>