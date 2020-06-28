<template>
    <Cont>
        <slot/>
        <v-row no-gutters justify="center" justify-sm="space-between">
            <v-col v-for="item in 6" :key="item"
                   cols="8" sm="4"
                   class="prg-info-cont pl-2 pl-lg-0">
                <v-hover>
                    <template v-slot:default="{hover}">
                        <v-img src="./img/Project.png" width="100%" height="80%">
                            <v-fade-transition>
                                <v-container
                                        v-if="hover"
                                        class="reveal d-flex align-center primary secondary--text">
                                    <v-btn fab>
                                        <IconCont><Right/></IconCont>
                                    </v-btn>
                                </v-container>
                            </v-fade-transition>
                        </v-img>
                    </template>
                </v-hover>
                <v-row no-gutters justify="end">
                    <v-card-subtitle class="black--text font-weight-bold pt-2 pr-0 pb-6">
                        Name project
                        <v-btn fab light x-small
                               class="primary--text ml-2">
                            <IconCont><Right/></IconCont>
                        </v-btn>
                    </v-card-subtitle>
                </v-row>
            </v-col>
        </v-row>
    </Cont>
</template>

<script>
    import Cont from "./global/Cont";
    import IconCont from "./global/IconCont";
    import Right from "./icons/right";

    export default {
        name: "Projects",
        components: {Cont, IconCont, Right}
    }
</script>

<style scoped lang="scss">

    .prg-info-cont{
        width: 15vw;
        height: 33vh;
        max-width: 285px;
        max-height: 296px;
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