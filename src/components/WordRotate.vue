<template>
  <div class="rotate-container">
    <span v-for="(word,index) in words" :key="index" class="rotate-text">{{word}}</span>
  </div>
</template>

<script>
export default {
  name:"WordRotate",
  data() {
    return {
      words: ["C# Developer.",
              "Full-Stack Developer.",
              "Problem Solver.",
              "Passionate Learner."]
    };
  },
  methods: {}
};
</script>

<style scoped>
.rotate-container{
  position:relative;
  display:inline-block;
  overflow:visible;
  width:auto;
  width:540px;
  height:1em;
}
@media only screen and (max-width: 959px){
  .rotate-container {
    width:100%;
  }
}
.rotate-text {
  position: absolute;
  overflow: hidden;
  top:7px;
  opacity:0;
  animation: animate 8s linear infinite;
  height:130px
}
@keyframes animate {
  0% {
    opacity: 1;
    transform: translateY(-50px);
  }
  8% {
    opacity: 1;
    transform: translateY(0px);
  }
  24% {
    opacity: 1;
    transform: translateY(0px);
  }
  32% {
    opacity: 0;
    transform: translateY(50px);
  }
}
.rotate-text:nth-child(1) {
  animation-delay: 0s;
  color:#d6336a;
}
.rotate-text:nth-child(2) {
  animation-delay: 2s;
  color:#d6336a;
}
.rotate-text:nth-child(3) {
  animation-delay: 4s;
  color:#d6336a;
}
.rotate-text:nth-child(4) {
  animation-delay: 6s;
  color:#d6336a;
}
</style>