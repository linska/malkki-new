<template>
    <Cont>
        <slot/>
        <v-row no-gutters justify="center" justify-md="space-between">
            <v-col v-for="item in consult" :key="item.img"
                   cols="12" sm="4" md="3">
                <v-card flat tile>
                    <v-hover>
                        <template v-slot:default="{hover}">
                            <v-img :src="require('./img/' + item.img)"
                                   max-height="580"
                                   contain
                                   class="consult-img">
                                <v-fade-transition>
                                    <v-container v-if="hover"
                                                 class="reveal d-flex align-end primary secondary--text">
                                        Подробнее
                                    </v-container>
                                </v-fade-transition>
                            </v-img>
                        </template>
                    </v-hover>
                    <v-row no-gutters justify="center">
                        <v-btn depressed tile
                               color="primary"
                               class="btn secondary--text font-weight-bold my-4">
                            {{item.btn}}
                        </v-btn>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </Cont>
</template>

<script>
    import Cont from "./global/Cont";

    export default {
        name: "Consult",

        components: {Cont},

        data() {
            return {
                consult: [
                    {img: "Consult1.png", btn:"Контент-мейкер"},
                    {img: "Consult2.png", btn:"Ивентщик"},
                    {img: "Consult3.png", btn:"Аффтор жжот"},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .consult-img{
        height: 60vh;
    }

    .btn{
        font-size: 24px;
    }

    .reveal {
        bottom: 0;
        justify-content: center;
        opacity: 0.7;
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>