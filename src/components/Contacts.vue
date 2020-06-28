<template>
    <Cont>
        <slot/>
        <v-container fluid>
            <v-card tile
                    color="secondary" class="contact-cont">
                <v-card-title class="contact-title accent--text justify-center font-weight-bold pt-0 pb-10 text-center">
                    Оставьте свою заявку и мы с вами свяжемся
                </v-card-title>
                <v-row no-gutters justify="center">
                    <v-col cols="12" lg="10">
                        <v-container fluid class="d-flex justify-space-around flex-column flex-sm-row">
                            <v-text-field outlined flat hide-details
                                          placeholder="Имя"
                                          class="contact-name my-2 my-sm-0 mx-1"/>
                            <v-text-field outlined flat hide-details
                                          placeholder="E-mail"
                                          class="contact-email mx-1"/>
                            <v-btn tile
                                   color="primary"
                                   class="secondary--text font-weight-bold mx-auto mx-md-1 hidden-sm-and-down">
                                Отправить
                            </v-btn>
                        </v-container>
                        <v-row no-gutters justify="end">
                            <v-btn tile
                                   color="primary"
                                   class="secondary--text font-weight-bold mt-4 mr-1 hidden-md-and-up">
                                Отправить
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
            <v-row no-gutters justify="center" class="contact-cont">
                <v-col cols="10">
                    <v-row no-gutters justify="center" justify-sm="space-between">
                        <v-col v-for="item in contacts" :key="item.id"
                               cols="11" sm="5">
                            <v-row no-gutters justify="start" :justify-md="item.just">
                                <v-btn text
                                       class="secondary--text font-weight-bold mb-6">
                                    <IconCont iconColor="white" width="32" height="32" class="mr-5">
                                        <phone      v-if="item.icon == 'phone'"/>
                                        <instagram  v-if="item.icon == 'inst'"/>
                                        <email      v-if="item.icon == 'email'"/>
                                        <facebook-f v-if="item.icon == 'face'"/>
                                    </IconCont>
                                    <span class="contact-btn">{{item.info}}</span>
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </Cont>
</template>

<script>
    import Cont from "./global/Cont";
    import IconCont from "./global/IconCont";
    import Phone from "./icons/phone";
    import Instagram from "./icons/instagram";
    import Email from "./icons/email";
    import FacebookF from "./icons/facebook-f";

    export default {
        name: "Contacts",
        components: { Cont, IconCont, Phone, Instagram, Email, FacebookF },

        data() {
            return {
                contacts: [
                    {id: 1, icon: "phone", info:"+333333333",       just: "start"},
                    {id: 2, icon: "inst",  info:"ksenia.malkki",    just: "end"},
                    {id: 3, icon: "email", info:"pochta@gmail.com", just: "start"},
                    {id: 4, icon: "face",  info:"ksenia.malkki",    just: "end"},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/global";

    .contact-cont{
        padding: 60px 0 80px !important;
        @include respond-to(lg) { margin-left: 30px !important; }
        @include respond-to(xl) { margin-left: 30px !important; }
    }

    .contact-title{
        font-size: 24px;
    }

    .contact-name{
        @include respond-to(sm) { max-width: 40%; }
        @include respond-to(md) { max-width: 340px; }
        @include respond-to(lg) { max-width: 240px; }
        @include respond-to(xl) { max-width: 240px; }
    }

    .contact-email{
        @include respond-to(sm) { max-width: 60%; }
        @include respond-to(md) { max-width: 430px; }
        @include respond-to(lg) { max-width: 330px; }
        @include respond-to(xl) { max-width: 330px; }
    }

    .contact-btn{
        letter-spacing: 0.5px !important;
    }
</style>