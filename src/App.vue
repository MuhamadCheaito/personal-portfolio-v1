<template>
    <v-app>
    <v-content>
      <v-container>
        <Header />
        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: { Header,Footer },
});
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>