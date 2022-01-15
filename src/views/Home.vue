<template>
  <v-container
    fluid
    style="height:100vh;position:relative;"
    class="d-flex align-start body"
  >
    <v-row class="mt-5">
      <v-col cols="1">
      </v-col>
      <v-col cols="11">
        <v-container>
          <v-row>
            <v-col class="mb-4">
              <div class="title font-weight-bold mb-4" style="color:#d6336a">Hi, my name is</div>
              <transition name="slide-fade">
                <div
                  transition="fade-transition"
                  class="text-h4 text-sm-h2 font-weight-bold mb-4"
                  v-if="showName"
                >
                  Mohamad Cheaito
                </div>
              </transition>
              <transition name="slide-fade">
                <h2
                  transition="fade-transition"
                  v-if="showTitle"
                  class="text-h5 text-sm-h3 font-weight-light mb-5 grey--text"
                >
                  I'm a <WordRotate/>
                </h2>
              </transition>
              <transition class="mt-3" name="slide-fade">
                <p
                  transition="fade-transition"
                  v-if="showBio"
                  class="description text-body-1 font-weight-regular"
                >
                  I'm a
                  <span class="font-weight-bold" style="color:#d6336a">fast-learning developer</span>
                  and computer science graduated student who specializes in
                  <span style="font-weight:bold;color:#d6336a">many fields of programming and development</span>.
                </p>
              </transition>
              <transition name="slide-fade">
                <v-btn
                  class="mt-2 pa-6 hidden-md-and-down"
                  v-if="showBio"
                  primary
                  dark
                  color="#953A7A"
                  target="_blank"
                  @click="navigate('#contact')"
                >
                  <v-icon class="mr-5">fa-envelope</v-icon>Get in touch
                </v-btn>
              </transition>&nbsp;
              <transition name="slide-fade">
                <v-btn
                  class="mt-2 pa-6 px-7 hidden-lg-and-up"
                  v-if="showBio"
                  primary
                  dark
                  color="#25b068"

                  target="_blank"
                  href='https://wa.me/qr/HW5RN4XGESM4B1'
                >
                  <v-icon class="mr-2">mdi-whatsapp</v-icon>+96176856722
                </v-btn>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="1" align="right" justify="bottom" align-self="end"></v-col>
    </v-row>
    <div class="down-arrow" @click="$vuetify.goTo('#about', scrollOptions)">
      <v-icon href="#about" class="hidden-md-and-down black--text" style="cursor:pointer" size="50px">fa-chevron-down</v-icon>
    </div>
  </v-container>
</template>

<style scoped>
.body{
  /* margin-top:10px; */
  /* clip-path: polygon(21% 0, 80% 0%, 100% 0, 100% 56%, 52% 100%, 52% 100%, 0 56%, 0 0); */
  clip-path: polygon(100% 0%, 100% 100%, 52% 88%, 0 100%, 0 100%, 0 0);
  border-radius:10px;
}
.down-arrow {
  position: absolute;
  bottom: 60px;
  width: 80px;
  height: 80px;
  left: 50%;
  transform:translateX(-50%);
  animation: downArrow 0.8s linear infinite;
  opacity: 0;
}
@keyframes downArrow {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.description {
  width: 400px;
}
@media only screen and (max-width: 599px) {
  .description {
    width: 100%;
  }
}
</style>

<script>
import WordRotate from '../components/WordRotate';

export default {
  name: "Home",
  data: () => ({
    showName: false,
    showTitle: false,
    showBio: false,
    mailTo: "mailto:cheaitomuhamad.92@gmail.com",
    scrollOptions: {
      duration: 600,
      offset: 0,
    }
  }),
  methods:{
   navigate(target){
      this.$vuetify.goTo(target, this.scrollOptions);
    },
  },
  components: {
    WordRotate
  },
  mounted: function () {
    setTimeout(() => {
      this.showName = true;
    }, 300);
    setTimeout(() => {
      this.showTitle = true;
    }, 500);
    setTimeout(() => {
      this.showBio = true;
    }, 700);
  },
};
</script>