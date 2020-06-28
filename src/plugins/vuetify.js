import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        light: true,
        themes: {
            light: {
                primary: "#E51A4B",
                secondary: "#FFFFFF",
                info: "#C27676",
                accent: "#992B2B",
                third: "#875656"
            }
        }
    }
});
