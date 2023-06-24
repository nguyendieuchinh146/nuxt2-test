<template>
  <div id="home-page">
    <PageHeader/>
    <PageFooter/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
import {apiService} from '../plugins/apiService';

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
    return {data:  { page:  1}};
  },
  methods: {
    
  },
})
</script>
