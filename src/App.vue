<template>
  <v-app>
    <NavBar :color="InterTheme ? 'secondary' : 'primary'"
            :bg_color="ThemeHalva ? 'primary' : 'transparent'"/>
    <Footer/>

    <v-content id="hero">

      <SectionCont class="hero">
        <Hero v-intersect="{ handler: onHero, options: { threshold: 0.5 } }">
          <SideBar slot="side-bar"
                   :color="InterTheme ? 'secondary' : 'primary'"
                   :sect_id="InterHero ? '1' :
                         InterAbout ? '2' :
                         InterConsult ? '3' :
                         InterHalva ? '4' :
                         InterProjects ? '5' :
                         InterBooks ? '6' :
                         InterContacts ? '7' : '0'"/>
        </Hero>
      </SectionCont>

      <SectionCont class="section" id="about">
        <About v-intersect="{ handler: onAbout, options: { threshold: 0.5 } }">
          <SectionTitle :title=section[0].title />
        </About>
      </SectionCont>

      <SectionCont class="section" id="consult">
        <Consult v-intersect="{ handler: onConsult, options: { threshold: 0.5 } }">
          <SectionTitle :title=section[1].title />
        </Consult>
      </SectionCont>


        <SectionCont class="section bg-halva" id="halva"
                     v-intersect="{ handler: onIntersect, options: { threshold: 0.5 } }">
          <Halva v-intersect="{ handler: onHalva, options: { threshold: 0.5 } }">
            <SectionTitle color="secondary" :title=section[2].title  />
          </Halva>
        </SectionCont>


      <SectionCont class="section" id="proj">
        <Projects v-intersect="{ handler: onProjects, options: { threshold: 0.5 } }">
          <SectionTitle :title=section[3].title />
        </Projects>
      </SectionCont>

      <SectionCont class="section bg-books" id="book">
        <Books v-intersect="{ handler: onBooks, options: { threshold: 0.5 } }">
          <SectionTitle :title=section[4].title />
        </Books>
      </SectionCont>

      <SectionCont class="section">
        <About :media=true
               v-intersect="{ handler: onAbout, options: { threshold: 0.5 } }">
          <SectionTitle :title=section[5].title  />
        </About>
      </SectionCont>

      <v-container fluid v-intersect="{ handler: onInterHalva, options: { threshold: 0.5 } }">
      <SectionCont class="section bg-cont" id="cont"
                   v-intersect="{ handler: onIntersect, options: { threshold: 0.5 } }">
        <Contacts v-intersect="{ handler: onContacts, options: { threshold: 0.5 } }">
          <SectionTitle color="secondary" :title=section[6].title />
        </Contacts>
      </SectionCont>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

import SectionCont from "./components/global/SectionCont";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar";
import About from "./components/About/About";
import SectionTitle from "./components/global/SectionTitle";
import Consult from "./components/Consult";
import Halva from "./components/Halva";
import Projects from "./components/Projects";
import Books from "./components/Books";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
export default {
  name: 'App',

  components: {
    Footer,
    Contacts,
    Books,
    Projects,
    Halva,
    Consult,
    SectionTitle,
    About,
    SideBar,
    NavBar,
    Hero,
    SectionCont
    //HelloWorld,
  },

  data() {
    return{
      InterTheme: false,
      ThemeHalva: false,

      InterHero: false,
      InterAbout: false,
      InterConsult: false,
      InterHalva: false,
      InterProjects: false,
      InterBooks: false,
      InterContacts: false,

      section: [
        {id: 0, title:"Обо мне"},
        {id: 1, title:"Индивидуальные консультации"},
        {id: 2, title:"Халява, плиз!"},
        {id: 3, title:"Мои проекты"},
        {id: 4, title:"Книги"},
        {id: 5, title:"Обо мне в медиа"},
        {id: 6, title:"Контакты"}
      ]
    }
  },

  methods: {
    onIntersect (entries) {
      this.InterTheme = entries[0].intersectionRatio >= 0.5;
    },
    onInterHalva (entries) {
      this.ThemeHalva = entries[0].intersectionRatio >= 0.5;
    },

    onHero (entries) {
      this.InterHero = entries[0].intersectionRatio >= 0.5;
    },

    onAbout (entries) {
      this.InterAbout = entries[0].intersectionRatio >= 0.5;
    },

    onConsult (entries) {
      this.InterConsult = entries[0].intersectionRatio >= 0.5;
    },

    onHalva (entries) {
      this.InterHalva = entries[0].intersectionRatio >= 0.5;
    },

    onProjects (entries) {
      this.InterProjects = entries[0].intersectionRatio >= 0.5;
    },

    onBooks (entries) {
      this.InterBooks = entries[0].intersectionRatio >= 0.5;
    },

    onContacts (entries) {
      this.InterContacts = entries[0].intersectionRatio >= 0.5;
    }

  },
};
</script>

<style scoped lang="scss">

  @import "src/scss/global";

  .section {
    height: auto;
    min-height: auto;
    padding-top: 84px;
    @include respond-to(sm){height: 100vh; max-height: 900px}
    @include respond-to(md){height: 100vh; max-height: 900px}
    @include respond-to(lg){height: 100vh; max-height: 900px}
    @include respond-to(xl){height: 100vh; max-height: 900px}
  }

  .hero{
    height: auto;
    min-height: auto;
    margin-top: 84px;
    padding-top: 0 !important;
    background-image: url("components/img/bghero.png");
    background-repeat: no-repeat;
    background-position: bottom left;
    @include respond-to(sm) {height: calc(100vh - 84px); max-height: 816px; background-position: bottom left 200px;}
    @include respond-to(md) {height: calc(100vh - 84px); max-height: 816px; background-position: bottom right -400px;}
    @include respond-to(lg) {height: calc(100vh - 84px); max-height: 816px; background-position: bottom right -400px;}
    @include respond-to(xl) {height: calc(100vh - 84px); max-height: 816px; background-position: bottom right;}
  }

  .bg-halva{
    background-image: url("components/img/bghalva.png");
    background-size: cover;
  }

  .bg-books{
    background-color: #FFF8F8;
  }

  .bg-cont{
    background-color: #E51A4B;
  }
</style>