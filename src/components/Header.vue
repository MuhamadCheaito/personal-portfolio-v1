<template>
  <div>
    <v-card>
  <transition name="slide-fade">
    <v-navigation-drawer
      app
      temporary
      right
      v-model="drawer"
      class="d-flex flex-column align-center"
      width="100%"
    >
      <v-list class="text-center">
        <v-list-item>
          <v-list-item-content>
              <div>
              <v-icon large @click="drawer = !drawer">mdi-close</v-icon>
              </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="navigateDrawer(item.target)"
        >
          <v-list-item-content>
            <v-list-item-title style="font-size:28px;color:#ddd">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item justify-content>
          <v-list-item-content>
            <v-btn class="white--text ml-3 py-6" style="font-size:24px;" color="#8c296f" filled href="CV.pdf" target="_bank"><v-icon style="font-size:inherit">mdi-download</v-icon>&nbsp;Download CV</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </transition>
  </v-card>
  <v-app-bar hide-on-scroll fixed app flat>
      <div class="d-flex align-center justify-center">
          <h3 class="font-weight-light">
            Mohamad<span class="font-weight-bold" style="color:#ba2759">Cheaito</span>
          </h3>
      </div>
      <v-spacer></v-spacer>
      <transition name="slide-fade">
        <div class="d-none d-sm-flex flex-row nav-links align-center">
          <div @click="navigate('#about')">
            <span>01.</span> About
          </div>
          <div @click="navigate('#skills')">
            <span>02.</span> Skills
          </div>
           <div @click="navigate('#portfolio')">
            <span>03.</span> Portfolio
          </div>
          <div @click="navigate('#contact')">
            <span>04.</span> Contact
          </div>
          <v-btn class="white--text ml-3" color="#8c296f" filled href="CV.pdf" target="_bank"><v-icon style="font-size:inherit">mdi-download</v-icon>&nbsp;Download CV</v-btn>
        </div>
      </transition>
      <v-app-bar-nav-icon x-large class="d-flex d-sm-none" @click="toggle()" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
name:"Header",
  props: {
  },
  
  data() {
    return {
      drawer: false,
      items: [
        { title: "About", target: "#about" },
        { title: "Skills",  target: "#skills" },
        { title: "Portfolio", target: "#portfolio" },
        { title: "Contact", target: "#contact" }
      ],
      scrollOptions: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      }
    };
  },
  methods:{
     toggle() {
      this.drawer = !this.drawer;
    },
     navigate(target){
      this.$vuetify.goTo(target, this.scrollOptions);
    },
    navigateDrawer(target){
      this.$vuetify.goTo(target, this.scrollOptions);
      this.toggle();
    }
  }
};
</script>
<style scoped>
.theme-toggle{
  transform:rotate(90deg);
  width:80px;
  height:150px;
  position:fixed;
  display:block;
  bottom:0px;
  left:0px;
}
.nav-links div {
  margin-left: 16px;
  cursor: pointer;
}
.nav-links span {
  color: #d6336a;
  font-weight: bold;
}
.nav-links div:hover {
  text-decoration: underline;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>