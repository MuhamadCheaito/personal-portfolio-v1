<template>
<div style="background-color:#222536;">
    <Home style="background-color:white;color:black"/>
    <About/>
    <Skills />
    <Portfolio/>
    <Contact/>
</div>
</template>
<style scoped>

.white-text {
  color:white;
}
.repo-link a {
    text-decoration:none;
    opacity:0.8;
    color:gray;
}
.repo-link a:hover {
    text-decoration:none;
    opacity:1;
    color:rgb(70, 171, 70)
}
</style>
<script>
const Home = () => import("./Home.vue");
const About = () => import("./About.vue");
const Skills = () => import("./Skills.vue");
const Portfolio = () => import("./Portfolio.vue");
const Contact = () => import("./Contact.vue");
export default {
  name: "Root",
  props: {},
  components: {
    Home,
    About,
    Skills,
    Portfolio,
    Contact
  },
};
</script>