<template>
    <v-container fluid class="hidden-sm-and-down sidebar">
        <v-container v-for="i in section" :key="i.id"
                     fluid class="sidebar-cont d-flex justify-start align-center ma-0">
            <v-card v-if="sect_id == i.id"
                    flat
                    color="transparent"
                    :class="color + '--text'"
                    class="sidebar-text font-weight-bold mr-2" >
                0{{i.id}}
            </v-card>
            <v-btn tile depressed
                   :href="i.target"
                   :color="color"
                   class="sidebar-btn"/>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: "SideBar",

        props: {
            color: {
                type: String,
                default: "primary"
            },
            sect_id: {
                type: [Number,String],
                default: 0
            }
        },

        data() {
            return{
                section: [
                    {id: 1, target:"#hero"},
                    {id: 2, target:"#about"},
                    {id: 3, target:"#consult"},
                    {id: 4, target:"#halva"},
                    {id: 5, target:"#proj"},
                    {id: 6, target:"#book"},
                    {id: 7, target:"#cont"}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

    .sidebar{
        position: fixed;
        width: 100px !important;
        z-index: 100;
        top: calc((100vh - 147px) / 2);
    }

    .sidebar-cont{
        height: 21px !important;
    }

    .sidebar-text{
        font-size: 14px;
    }

    .sidebar-btn{
        max-width: 50px;
        max-height: 4px;
    }
</style>