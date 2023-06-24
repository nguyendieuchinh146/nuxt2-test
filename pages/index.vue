<template>
  <div id="home-page">
    <PageHeader @scrollToSection="handleScollToSection" :destinationsData="data.destinationsData"/>
    <HomePageBody :scrollToSectionId="scrollToSectionId"  :data="data"/>
    <PageFooter/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
import HomePageBody from '../components/HomePageBody.vue';
import {apiService} from '../plugins/apiService';
import axios from 'axios';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    PageHeader,
    PageFooter
  },
  head() {
    return {
      title: 'Asia Prime Travel - Top Travel Agent In Vietnam',
    };
  },

  computed: {

  },

  watch: {
      
  },

  created() {
  },

  data() {
    return {
      isScrollToTop : false,
      scrollToSectionId : null,
    }
  },
  async asyncData() {
    const resDestinations = await fetch("http://localhost/asia_prime_travel/backend/?folder=destinations&data_load=full");
    const destinations = await resDestinations.json();
    return {data:  { destinationsData: destinations}};
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    handleScroll() {
      if (window.pageYOffset > 800) {
        this.isScrollToTop = true;
      } else {
        this.isScrollToTop = false;
      }
    },

    handleScollToSection(section: any) {
      this.scrollToSectionId = section;
    }
  },
})
</script>
